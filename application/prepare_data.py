import pickle
import os
import pandas as pd
import numpy as np
from datetime import datetime
import pytz

places = ['room1', 'room2', 'room3', 'room4']

def localize_utc_timestamps(ts):

    return ts.apply(lambda x: pytz.timezone('UTC').localize(x).astimezone(pytz.timezone('Europe/Helsinki')))


def return_df(file):
    df = pd.read_csv(file)
    df = df.drop('nodeid', axis=1)
    df.devicetimestamp = df.devicetimestamp.apply(datetime.utcfromtimestamp)
    df.set_index('devicetimestamp')
    aggregated_df = aggregate(df)
    interpolated_df = interpolate_data(aggregated_df)
    return interpolated_df


def interpolate_single_missing(df):
    dat = df.copy()
    inds = np.where(dat.isna())[0]
    inds = [i for i in inds if i + 1 not in inds and i - 1 not in inds]
    for ind in inds:
        dat.iloc[ind] = np.mean([dat.iloc[ind - 1], dat.iloc[ind + 1]]).round(2)
    return dat


def aggregate(df):
    dat = df.copy()
    dat = dat.set_index('devicetimestamp')
    df = dat.resample('1min').apply(np.nanmedian)
    df = df.reset_index()
    df.devicetimestamp = localize_utc_timestamps(df.devicetimestamp)
    df = df.set_index('devicetimestamp')
    df['co2'] = interpolate_single_missing(df['co2'])
    start = pd.to_datetime(datetime.strptime('2019-01-01 00:00:00', '%Y-%m-%d %H:%M:%S'))
    newind = pd.date_range(start, periods=60 * 24 * 365, freq='1min', tz=pytz.timezone('Europe/Helsinki'))
    df_new = df.reindex(newind)
    return df_new


def interpolate_data(df):
    interpolated = df.interpolate(method='linear')
    return interpolated


def remove_localization(df, param):
    df[param] = df[param].dt.tz_localize(None)
    return df



def transform_data(df):
    df['outdoor_temperature'] = df['outdoor_temperature'].apply(fahrenheit_to_celsius)
    df['return_airflow_rate'] = df['return_airflow_rate'].apply(cfm_to_m_on_h)
    df['supply_airflow_rate'] = df['supply_airflow_rate'].apply(cfm_to_m_on_h)
    return df

def prepare_data():
    for place in places:
        filename = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'datasets/raw_data', place+'.csv')
        df = return_df(filename)
        filenameT_outdoor = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'datasets/ventilation', 'outdoor_temperature.csv')
        filenameReturn_airflow = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'datasets/ventilation', 'return_airflow_rate.csv')
        filenameSupply_airflow = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'datasets/ventilation','supply_airflow_rate.csv')
        dfT_outdoor = pd.read_csv(filenameT_outdoor,usecols=['date_time', place])
        dfReturn_airflow = pd.read_csv(filenameReturn_airflow, usecols=['date_time', place])
        dfSupply_airflow = pd.read_csv(filenameSupply_airflow, usecols=['date_time', place])
        df = remove_localization(df, 'devicetimestamp')
        df['devicetimestamp'] = pd.to_datetime(df['devicetimestamp'], format='%Y/%m/%d %H:%M:%S')
        dfT_outdoor['date_time'] = pd.to_datetime(dfT_outdoor['date_time'], format='%Y/%m/%d %H:%M:%S')
        dfReturn_airflow['date_time'] = pd.to_datetime(dfReturn_airflow['date_time'], format='%Y/%m/%d %H:%M:%S')
        dfSupply_airflow['date_time'] = pd.to_datetime(dfSupply_airflow['date_time'], format='%Y/%m/%d %H:%M:%S')

        # Merge the DataFrames based on 'date_time' column
        merged_data = pd.merge(df, dfT_outdoor, on='date_time')
        merged_data = pd.merge(merged_data, dfReturn_airflow, on='date_time')
        merged_data = pd.merge(merged_data, dfSupply_airflow, on='date_time')

        merged_data = transform_data(merged_data)

        merged_data.to_csv(os.path.join(os.path.abspath(os.path.dirname(__file__)), 'datasets/cleaned_data', place+'1.csv'), sep=',', index_label='date_time')


def fahrenheit_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5 / 9
    return celsius


def cfm_to_m_on_h(cfm):
    m_on_h = cfm * 1.669
    return m_on_h
