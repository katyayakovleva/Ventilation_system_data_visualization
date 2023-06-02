import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from statsmodels.tsa.stattools import adfuller
import seaborn as sns

args = ['temperature', 'humidity','co2',  'outdoor_temperature', 'return_airflow_rate', 'supply_airflow_rate']


def get_df(name):
    filename = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'datasets/cleaned_data', '' + name + '.csv')
    df = pd.read_csv(filename, names=['date_time', 'temperature', 'humidity', 'co2', 'outdoor_temperature',
                                      'return_airflow_rate', 'supply_airflow_rate'], header=0, parse_dates=['date_time'])

    return df


def filter_dataset(df, start_date, end_date, frequency):

    start_date = pd.to_datetime(start_date)
    end_date = pd.to_datetime(end_date)
    df['date_time'] = pd.to_datetime(df['date_time'], format='%Y-%m-%d %H:%M:%S.%f')
    mask = (df['date_time'] >= start_date) & (df['date_time'] <= end_date)

    filtered_df = df.loc[mask]
    filtered_df = filtered_df.set_index('date_time')
    resampled_df = filtered_df.resample(frequency).mean()

    return resampled_df


def smooth_data(df, frequency):
    if frequency == 'D':
        window_size = 24
    else:
        window_size = 100
    for arg in args:
        df[arg + '_sma'] = df[arg].rolling(window=window_size).mean()


    df.dropna(inplace=True)

    smoothing_factor = 0.1
    # Apply exponential smoothing with a specified smoothing factor
    for arg in args:
        exp_smoothing = ExponentialSmoothing(df[arg], trend=None, seasonal=None, initialization_method="estimated")
        exp_smoothed_values = exp_smoothing.fit(smoothing_level=smoothing_factor, optimized=False).fittedvalues

        # Add the smoothed values to the dataframe
        df[arg + '_exp_smooth'] = exp_smoothed_values

    return df


def heatmap(df):
    corr_matrix = df.corr(method='pearson', numeric_only=True)
    corr_matrix = corr_matrix.round(3)
    corr_list = corr_matrix.values.tolist()
    return corr_list


def pca(df):
    df = df.dropna()
    subset = df[args]

    # Стандартизація даних
    subset = (subset - subset.mean()) / subset.std()

    # Використання PCA
    pca = PCA(n_components=2)  # Вибір кількості головних компонент
    principal_components = pca.fit_transform(subset)
    # Perform PCA analysis
    principal_df = pd.DataFrame(data=principal_components, columns=['PC1', 'PC2'])
    plt.scatter(principal_df['PC1'], principal_df['PC2'])
    plt.xlabel('Principal Component 1')
    plt.ylabel('Principal Component 2')
    plt.title('PCA Visualization')

    # _ = sns.heatmap(pca.components_ ** 2,
    #                 yticklabels=["PCA" + str(x) for x in range(1, pca.n_components_ + 1)],
    #                 xticklabels=list(args),
    #                 annot=True,
    #                 fmt='.2f',
    #                 square=True,
    #                 linewidths=0.05,
    #                 cbar_kws={"orientation": "horizontal"})
    plt.show()

    return principal_df


# def fuller(df):
#     df = df.dropna()
#
#     for arg in args:
#         result = adfuller(df[arg])
#         print(arg)
#         print('ADF Statistic: %f' % result[0])
#         print('p-value: %f' % result[1])
#         print('Critical Values:')
#         for key, value in result[4].items():
#             print('\t%s: %.3f' % (key, value))

