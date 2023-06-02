import os

import pandas as pd
from flask import request, render_template, redirect, url_for
from flask import current_app as app
from application.prepare_data import cfm_to_m_on_h, prepare_data
from application.work_with_data import get_df, filter_dataset, heatmap, pca, smooth_data


min_date = '2019-03-01'
max_date = '2019-12-31'


@app.route('/places/<place>', methods=['GET', 'POST'])
def show_place(place):
    df = get_df(place)
    start_date = min_date
    end_date = max_date
    frequency = 'D'

    if request.method == 'POST':
        start_date = request.form.get('start_date')
        end_date = request.form.get('end_date')
        frequency = str(request.form['frequency_options'])

        filtered_df = filter_dataset(df, start_date, end_date, frequency)

        correlation_matrix = heatmap(filtered_df)

        smoothed_df = smooth_data(filtered_df, frequency)
        smoothed_df = smoothed_df.round(4)
        chart_data = smoothed_df.to_json(orient='columns')
        describe_df = filtered_df.describe()
        describe_df = describe_df.round(2)
        describe_data = describe_df.to_json(orient='columns')

        return render_template('place.html', min_date=min_date, max_date=max_date,
                               chart_data=chart_data,describe_data=describe_data,
                               end_date=end_date, start_date=start_date,
                               place=place, frequency=frequency,
                               temperatureMax=filtered_df['temperature'].max(), temperatureMin=filtered_df['temperature'].min(),
                               humidityMax=filtered_df['humidity'].max(), humidityMin=filtered_df['humidity'].min(),
                               co2Max=filtered_df['co2'].max(), co2Min=filtered_df['co2'].min(),
                               outTempMax=filtered_df['outdoor_temperature'].max(), outTempMin=filtered_df['outdoor_temperature'].min(),
                               returnAirFlowMax=filtered_df['return_airflow_rate'].max(), returnAirFlowMin=filtered_df['return_airflow_rate'].min(),
                               supplyAirFlowMax=filtered_df['supply_airflow_rate'].max(), supplyAirFlowMin=filtered_df['supply_airflow_rate'].min(),
                               correlation_matrix=correlation_matrix,
                               )
    return render_template('place.html', min_date=min_date, max_date=max_date, end_date=end_date, start_date=start_date,
                           place=place, frequency=frequency)


@app.route('/', methods=['GET', 'POST'])
def index():
    # prepare_data()
    if request.method == 'POST':
        chosen_place = request.form.get('place')
        return redirect(url_for('show_place', place=chosen_place))
    return render_template('index.html')



