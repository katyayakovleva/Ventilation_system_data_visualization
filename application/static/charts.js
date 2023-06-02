
let temperatureChartConfig = {
    gui: {

    behaviors: [
          {
            id: 'ZoomIn',
            enabled: 'none',
          },
          {
            id: 'ZoomOut',
            enabled: 'none',
          },
          {
            id: 'Print',
            enabled: 'none',
          },
          {
            id: 'HideGuide',
            enabled: 'none',
          },
        {
            id: 'ShowGuide',
            enabled: 'none',
          },
        {
            id: 'Reload',
            enabled: 'none',
          },
        {
            id: 'FullScreen',
            enabled: 'all',
          },
        {
            id: 'ViewAll',
            enabled: 'all',
          },
        {
            id: 'ExportData',
            enabled: 'none',
          },
        {
            id: 'DownloadXLS',
            enabled: 'none'
          },
        {
            id: 'DownloadCSV',
            enabled: 'none'
          },
        {
            id: 'DownloadPDF',
            enabled: 'none'
          },
        {
            id: 'SaveAsImagePNG',
            enabled: 'none'
          },
        {
            id: 'ViewSource',
            enabled: 'none'
          },
        {
            id: 'ExportData',
            enabled: 'none'
          },
        ],
        contextMenu: {
            // empty: true,
            docked: true,
            position: 'right',
            backgroundColor: 'transparent',
            button: {
                visible: false,
          },
            separator: {
                lineColor: 'transparent'
              },
        },
        progress:{

        }
  },
  graphset: [{
    type: 'line',
    borderColor: '#cccccc',
    borderRadius: '2px',
    borderWidth: '1px',
    timezone: 8,
    utc: true,

    legend: {
        backgroundColor: 'transparent',
        // borderColor: 'transparent',
        // verticalAlign: 'top',
        //   align: 'center',
        borderWidth: 1,
        borderRadius: '3px',

        item: {
            fontColor: '#8a8a8a',
            backgroundColor: 'white'
            },
        // layout: 'float',
        marginTop: '30px',
        marker: {
          // borderColor: 'transparent',
          borderRadius: '50px',
        },
    },
    plot: {
      aspect: 'spline',

        scrollStepMultiplier: 2

    },
    plotarea: {
      margin: 'dynamic'
    },
    scrollX: {

    },
    scaleX: {
      itemsOverlap: true,
      values : temperatureDatetime,
      zooming: true,
      transform: {
        type: 'date',
          all: dateFormat,
      },
    },
    scaleY: {
      values: ""+minTemperature+":"+maxTemperature+"",
      guide: {
        lineStyle: 'solid'
      },
      label: {
        text: 'Temperature (C)'
      }
    },
    crosshairX: {
      lineColor: '#555',
      marker: {
        borderColor: '#fff',
        borderWidth: '1px',
        size: '5px'
      },
      plotLabel: {
        backgroundColor: '#fff',
        borderRadius: '2px',
        borderWidth: '2px',
        multiple: true
      }
    },

    series: [{
        text: 'Actual',
        values: temperature,
        lineColor: '#18a7cb',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
        {
        text: 'Moving Average',
        values: temperatureSMA,
        lineColor: '#fb8500',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },{
        text: 'Exponential Smoothing',
        values: temperatureExpSmooth,
        lineColor: '#52ab1f',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
    ]
  }]
};

let humidityChartConfig = {
    gui: {

    behaviors: [
          {
            id: 'ZoomIn',
            enabled: 'none',
          },
          {
            id: 'ZoomOut',
            enabled: 'none',
          },
          {
            id: 'Print',
            enabled: 'none',
          },
          {
            id: 'HideGuide',
            enabled: 'none',
          },
        {
            id: 'ShowGuide',
            enabled: 'none',
          },
        {
            id: 'Reload',
            enabled: 'none',
          },
        {
            id: 'FullScreen',
            enabled: 'all',
          },
        {
            id: 'ViewAll',
            enabled: 'all',
          },
        {
            id: 'ExportData',
            enabled: 'none',
          },
        {
            id: 'DownloadXLS',
            enabled: 'none'
          },
        {
            id: 'DownloadCSV',
            enabled: 'none'
          },
        {
            id: 'DownloadPDF',
            enabled: 'none'
          },
        {
            id: 'SaveAsImagePNG',
            enabled: 'none'
          },
        {
            id: 'ViewSource',
            enabled: 'none'
          },
        {
            id: 'ExportData',
            enabled: 'none'
          },
        ],
        contextMenu: {
            // empty: true,
            docked: true,
            position: 'right',
            backgroundColor: 'transparent',
            button: {
                visible: false,
          },
            separator: {
                lineColor: 'transparent'
              },
        },
        progress:{

        }
  },
  graphset: [{
    type: 'line',
    borderColor: '#cccccc',
    borderRadius: '2px',
    borderWidth: '1px',
    timezone: 8,
    utc: true,

    legend: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: '3px',

        item: {
            fontColor: '#8a8a8a',
            backgroundColor: 'white'
            },
        marginTop: '30px',
        marker: {
          borderRadius: '50px',
        },
    },
    plot: {
      aspect: 'spline',

        scrollStepMultiplier: 2

    },
    plotarea: {
      margin: 'dynamic'
    },
    scrollX: {

    },
    scaleX: {
      itemsOverlap: true,
      values : humidityDatetime,
      zooming: true,
      transform: {
        type: 'date',
          all: dateFormat,
      },
    },
    scaleY: { 
      values: ""+minHumidity+":"+maxHumidity+"",
      guide: {
        lineStyle: 'solid'
      },
      label: {
        text: 'Relative Humidity (%)'
      }
    },
    crosshairX: {
      lineColor: '#555',
      marker: {
        borderColor: '#fff',
        borderWidth: '1px',
        size: '5px'
      },
      plotLabel: {
        backgroundColor: '#fff',
        borderRadius: '2px',
        borderWidth: '2px',
        multiple: true
      }
    },

    series: [{
        text: 'Actual',
        values: humidity,
        lineColor: '#18a7cb',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
        {
        text: 'Moving Average',
        values: humiditySMA,
        lineColor: '#fb8500',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
      {
        text: 'Exponential Smoothing',
        values: humidityExpSmooth,
        lineColor: '#52ab1f',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
    ]
  }]
};

let co2ChartConfig = {
    gui: {

    behaviors: [
          {
            id: 'ZoomIn',
            enabled: 'none',
          },
          {
            id: 'ZoomOut',
            enabled: 'none',
          },
          {
            id: 'Print',
            enabled: 'none',
          },
          {
            id: 'HideGuide',
            enabled: 'none',
          },
        {
            id: 'ShowGuide',
            enabled: 'none',
          },
        {
            id: 'Reload',
            enabled: 'none',
          },
        {
            id: 'FullScreen',
            enabled: 'all',
          },
        {
            id: 'ViewAll',
            enabled: 'all',
          },
        {
            id: 'ExportData',
            enabled: 'none',
          },
        {
            id: 'DownloadXLS',
            enabled: 'none'
          },
        {
            id: 'DownloadCSV',
            enabled: 'none'
          },
        {
            id: 'DownloadPDF',
            enabled: 'none'
          },
        {
            id: 'SaveAsImagePNG',
            enabled: 'none'
          },
        {
            id: 'ViewSource',
            enabled: 'none'
          },
        {
            id: 'ExportData',
            enabled: 'none'
          },
        ],
        contextMenu: {
            // empty: true,
            docked: true,
            position: 'right',
            backgroundColor: 'transparent',
            button: {
                visible: false,
          },
            separator: {
                lineColor: 'transparent'
              },
        },
        progress:{

        }
  },
  graphset: [{
    type: 'line',
    borderColor: '#cccccc',
    borderRadius: '2px',
    borderWidth: '1px',
    timezone: 8,
    utc: true,

    legend: {
        backgroundColor: 'transparent',
        // borderColor: 'transparent',
        // verticalAlign: 'top',
        //   align: 'center',
        borderWidth: 1,
        borderRadius: '3px',

        item: {
            fontColor: '#8a8a8a',
            backgroundColor: 'white'
            },
        // layout: 'float',
        marginTop: '30px',
        marker: {
          // borderColor: 'transparent',
          borderRadius: '50px',
        },
    },
    plot: {
      aspect: 'spline',

        scrollStepMultiplier: 2

    },
    plotarea: {
      margin: 'dynamic'
    },
    scrollX: {

    },
    scaleX: {
      itemsOverlap: true,
      values : co2Datetime,
      zooming: true,
      transform: {
        type: 'date',
          all: dateFormat,
      },
    },
    scaleY: {
      values: ""+minCO2+":"+maxCO2+"",
      guide: {
        lineStyle: 'solid'
      },
      label: {
        text: 'CO2 (ppm)'
      }
    },
    crosshairX: {
      lineColor: '#555',
      marker: {
        borderColor: '#fff',
        borderWidth: '1px',
        size: '5px'
      },
      plotLabel: {
        backgroundColor: '#fff',
        borderRadius: '2px',
        borderWidth: '2px',
        multiple: true
      }
    },

    series: [{
        text: 'Actual',
        values: co2,
        lineColor: '#18a7cb',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
        {
        text: 'Moving Average',
        values: co2SMA,
        lineColor: '#fb8500',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
      {
        text: 'Exponential Smoothing',
        values: co2ExpSmooth,
        lineColor: '#52ab1f',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
    ]
  }]
};

let outTempChartConfig = {
    gui: {

    behaviors: [
          {
            id: 'ZoomIn',
            enabled: 'none',
          },
          {
            id: 'ZoomOut',
            enabled: 'none',
          },
          {
            id: 'Print',
            enabled: 'none',
          },
          {
            id: 'HideGuide',
            enabled: 'none',
          },
        {
            id: 'ShowGuide',
            enabled: 'none',
          },
        {
            id: 'Reload',
            enabled: 'none',
          },
        {
            id: 'FullScreen',
            enabled: 'all',
          },
        {
            id: 'ViewAll',
            enabled: 'all',
          },
        {
            id: 'ExportData',
            enabled: 'none',
          },
        {
            id: 'DownloadXLS',
            enabled: 'none'
          },
        {
            id: 'DownloadCSV',
            enabled: 'none'
          },
        {
            id: 'DownloadPDF',
            enabled: 'none'
          },
        {
            id: 'SaveAsImagePNG',
            enabled: 'none'
          },
        {
            id: 'ViewSource',
            enabled: 'none'
          },
        {
            id: 'ExportData',
            enabled: 'none'
          },
        ],
        contextMenu: {
            // empty: true,
            docked: true,
            position: 'right',
            backgroundColor: 'transparent',
            button: {
                visible: false,
          },
            separator: {
                lineColor: 'transparent'
              },
        },
        progress:{

        }
  },
  graphset: [{
    type: 'line',
    borderColor: '#cccccc',
    borderRadius: '2px',
    borderWidth: '1px',
    timezone: 8,
    utc: true,

    legend: {
        backgroundColor: 'transparent',
        // borderColor: 'transparent',
        // verticalAlign: 'top',
        //   align: 'center',
        borderWidth: 1,
        borderRadius: '3px',

        item: {
            fontColor: '#8a8a8a',
            backgroundColor: 'white'
            },
        // layout: 'float',
        marginTop: '30px',
        marker: {
          // borderColor: 'transparent',
          borderRadius: '50px',
        },
    },
    plot: {
      aspect: 'spline',

        scrollStepMultiplier: 2

    },
    plotarea: {
      margin: 'dynamic'
    },
    scrollX: {

    },
    scaleX: {
      itemsOverlap: true,
      values : outTempDatetime,
      zooming: true,
      transform: {
        type: 'date',
          all: dateFormat,
      },
    },
    scaleY: {
      values: ""+minOutTemp+":"+maxOutTemp+"",
      guide: {
        lineStyle: 'solid'
      },
      label: {
        text: 'Outdoor Temperature (C)'
      }
    },
    crosshairX: {
      lineColor: '#555',
      marker: {
        borderColor: '#fff',
        borderWidth: '1px',
        size: '5px'
      },
      plotLabel: {
        backgroundColor: '#fff',
        borderRadius: '2px',
        borderWidth: '2px',
        multiple: true
      }
    },

    series: [{
        text: 'Actual',
        values: outTemp,
        lineColor: '#18a7cb',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
        {
        text: 'Moving Average',
        values: outTempSMA,
        lineColor: '#fb8500',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
      {
        text: 'Exponential Smoothing',
        values: outTempExpSmooth,
        lineColor: '#52ab1f',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
    ]
  }]
};

let supplyAirflowChartConfig = {
    gui: {

    behaviors: [
          {
            id: 'ZoomIn',
            enabled: 'none',
          },
          {
            id: 'ZoomOut',
            enabled: 'none',
          },
          {
            id: 'Print',
            enabled: 'none',
          },
          {
            id: 'HideGuide',
            enabled: 'none',
          },
        {
            id: 'ShowGuide',
            enabled: 'none',
          },
        {
            id: 'Reload',
            enabled: 'none',
          },
        {
            id: 'FullScreen',
            enabled: 'all',
          },
        {
            id: 'ViewAll',
            enabled: 'all',
          },
        {
            id: 'ExportData',
            enabled: 'none',
          },
        {
            id: 'DownloadXLS',
            enabled: 'none'
          },
        {
            id: 'DownloadCSV',
            enabled: 'none'
          },
        {
            id: 'DownloadPDF',
            enabled: 'none'
          },
        {
            id: 'SaveAsImagePNG',
            enabled: 'none'
          },
        {
            id: 'ViewSource',
            enabled: 'none'
          },
        {
            id: 'ExportData',
            enabled: 'none'
          },
        ],
        contextMenu: {
            // empty: true,
            docked: true,
            position: 'right',
            backgroundColor: 'transparent',
            button: {
                visible: false,
          },
            separator: {
                lineColor: 'transparent'
              },
        },
        progress:{

        }
  },
  graphset: [{
    type: 'line',
    borderColor: '#cccccc',
    borderRadius: '2px',
    borderWidth: '1px',
    timezone: 8,
    utc: true,

    legend: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: '3px',

        item: {
            fontColor: '#8a8a8a',
            backgroundColor: 'white'
            },
        marginTop: '30px',
        marker: {
          borderRadius: '50px',
        },
    },
    plot: {
      aspect: 'spline',

        scrollStepMultiplier: 2

    },
    plotarea: {
      margin: 'dynamic'
    },
    scrollX: {

    },
    scaleX: {
      itemsOverlap: true,
      values : supplyAirFlowDatetime,
      zooming: true,
      transform: {
        type: 'date',
          all: dateFormat,
      },
    },
    scaleY: {
      values: ""+minSupplyAirFlow+":"+maxSupplyAirFlow+"",
      guide: {
        lineStyle: 'solid'
      },
      label: {
        text: 'Supply Airflow Rate (CFM)'
      }
    },
    crosshairX: {
      lineColor: '#555',
      marker: {
        borderColor: '#fff',
        borderWidth: '1px',
        size: '5px'
      },
      plotLabel: {
        backgroundColor: '#fff',
        borderRadius: '2px',
        borderWidth: '2px',
        multiple: true
      }
    },

    series: [{
        text: 'Actual',
        values: supplyAirFlow,
        lineColor: '#18a7cb',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
        {
        text: 'Moving Average',
        values: supplyAirFlowSMA,
        lineColor: '#fb8500',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
      {
        text: 'Exponential Smoothing',
        values: supplyAirFlowExpSmooth,
        lineColor: '#52ab1f',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
    ]
  }]
};
let returnAirflowChartConfig = {
    gui: {

    behaviors: [
          {
            id: 'ZoomIn',
            enabled: 'none',
          },
          {
            id: 'ZoomOut',
            enabled: 'none',
          },
          {
            id: 'Print',
            enabled: 'none',
          },
          {
            id: 'HideGuide',
            enabled: 'none',
          },
        {
            id: 'ShowGuide',
            enabled: 'none',
          },
        {
            id: 'Reload',
            enabled: 'none',
          },
        {
            id: 'FullScreen',
            enabled: 'all',
          },
        {
            id: 'ViewAll',
            enabled: 'all',
          },
        {
            id: 'ExportData',
            enabled: 'none',
          },
        {
            id: 'DownloadXLS',
            enabled: 'none'
          },
        {
            id: 'DownloadCSV',
            enabled: 'none'
          },
        {
            id: 'DownloadPDF',
            enabled: 'none'
          },
        {
            id: 'SaveAsImagePNG',
            enabled: 'none'
          },
        {
            id: 'ViewSource',
            enabled: 'none'
          },
        {
            id: 'ExportData',
            enabled: 'none'
          },
        ],
        contextMenu: {
            // empty: true,
            docked: true,
            position: 'right',
            backgroundColor: 'transparent',
            button: {
                visible: false,
          },
            separator: {
                lineColor: 'transparent'
              },
        },
        progress:{

        }
  },
  graphset: [{
    type: 'line',
    borderColor: '#cccccc',
    borderRadius: '2px',
    borderWidth: '1px',
    timezone: 8,
    utc: true,

    legend: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: '3px',

        item: {
            fontColor: '#8a8a8a',
            backgroundColor: 'white'
            },
        marginTop: '30px',
        marker: {
          borderRadius: '50px',
        },
    },
    plot: {
      aspect: 'spline',

        scrollStepMultiplier: 2

    },
    plotarea: {
      margin: 'dynamic'
    },
    scrollX: {

    },
    scaleX: {
      itemsOverlap: true,
      values : returnAirFlowDatetime,
      zooming: true,
      transform: {
        type: 'date',
          all: dateFormat,
      },
    },
    scaleY: {
      values: ""+minReturnAirFlow+":"+maxReturnAirFlow+"",
      guide: {
        lineStyle: 'solid'
      },
      label: {
        text: 'Return Airflow Rate (CFM)'
      }
    },
    crosshairX: {
      lineColor: '#555',
      marker: {
        borderColor: '#fff',
        borderWidth: '1px',
        size: '5px'
      },
      plotLabel: {
        backgroundColor: '#fff',
        borderRadius: '2px',
        borderWidth: '2px',
        multiple: true
      }
    },

    series: [{
        text: 'Actual',
        values: returnAirFlow,
        lineColor: '#18a7cb',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
        {
        text: 'Moving Average',
        values: returnAirFlowSMA,
        lineColor: '#fb8500',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
      {
        text: 'Exponential Smoothing',
        values: returnAirFlowExpSmooth,
        lineColor: '#52ab1f',
        marker: {
            visible: 'false',
        },
        legendItem: {
          // backgroundColor: '#29A2CC',
          borderRadius: '2px'
        }

      },
    ]
  }]
};
window.onload=function(){
    zingchart.render({
        id: "temperature",
        output: "auto",
        height:400,
        width: "100%",
        data:temperatureChartConfig
    });
    zingchart.render({
        id: "humidity",
        output: "auto",
        height:400,
        width: "100%",
        data:humidityChartConfig
    });
    // zingchart.render({
    //     id: "pressure",
    //     output: "auto",
    //     height:400,
    //     width: "100%",
    //     data:pressureChartConfig
    // });
    zingchart.render({
        id: "co2",
        output: "auto",
        height:400,
        width: "100%",
        data:co2ChartConfig
    });
    zingchart.render({
        id: 'outTemp',
        output: "auto",
        data: outTempChartConfig,
        width: '100%'
    });
    zingchart.render({
        id: 'supplyAirflow',
        output: "auto",
        data: supplyAirflowChartConfig,
        width: '100%'
    });
    zingchart.render({
        id: 'returnAirflow',
        output: "auto",
        data: returnAirflowChartConfig,
        width: '100%'
    });
    zingchart.render({
        id: 'heatMap',
        output: "auto",
        data: heatMapConfig,
        height: '100%',
        width: '50%'
    });
};


let temperatureInfo = "<p>The average value: " + describeDataOBJ.temperature.mean + "</p>";
temperatureInfo+= "<p>The standard deviation: "+describeDataOBJ.temperature.std+"</p>"
temperatureInfo+= "<p>The minimum value: "+describeDataOBJ.temperature.min+"</p>"
temperatureInfo+= "<p>The maximum value: "+describeDataOBJ.temperature.max+"</p>"

let humidityInfo = "<p>The average value: " + describeDataOBJ.humidity.mean + "</p>";
humidityInfo+= "<p>The standard deviation: "+describeDataOBJ.humidity.std+"</p>"
humidityInfo+= "<p>The minimum value: "+describeDataOBJ.humidity.min+"</p>"
humidityInfo+= "<p>The maximum value: "+describeDataOBJ.humidity.max+"</p>"

let co2Info = "<p>The average value: " + describeDataOBJ.co2.mean + "</p>";
co2Info+= "<p>The standard deviation: "+describeDataOBJ.co2.std+"</p>"
co2Info+= "<p>The minimum value: "+describeDataOBJ.co2.min+"</p>"
co2Info+= "<p>The maximum value: "+describeDataOBJ.co2.max+"</p>"

let outTempInfo = "<p>The average value: " + describeDataOBJ.outdoor_temperature.mean + "</p>";
outTempInfo+= "<p>The standard deviation: "+describeDataOBJ.outdoor_temperature.std+"</p>"
outTempInfo+= "<p>The minimum value: "+describeDataOBJ.outdoor_temperature.min+"</p>"
outTempInfo+= "<p>The maximum value: "+describeDataOBJ.outdoor_temperature.max+"</p>"

let supplyAirflowInfo = "<p>The average value: " + describeDataOBJ.supply_airflow_rate.mean + "</p>";
supplyAirflowInfo+= "<p>The standard deviation: "+describeDataOBJ.supply_airflow_rate.std+"</p>"
supplyAirflowInfo+= "<p>The minimum value: "+describeDataOBJ.supply_airflow_rate.min+"</p>"
supplyAirflowInfo+= "<p>The maximum value: "+describeDataOBJ.supply_airflow_rate.max+"</p>"

let returnAirflowInfo = "<p>The average value: " + describeDataOBJ.return_airflow_rate.mean + "</p>";
returnAirflowInfo+= "<p>The standard deviation: "+describeDataOBJ.return_airflow_rate.std+"</p>"
returnAirflowInfo+= "<p>The minimum value: "+describeDataOBJ.return_airflow_rate.min+"</p>"
returnAirflowInfo+= "<p>The maximum value: "+describeDataOBJ.return_airflow_rate.max+"</p>"


$("#temperature_info").html(temperatureInfo);
$("#humidity_info").html(humidityInfo);
// $("#pressure_info").html(pressureInfo);
$("#co2_info").html(co2Info);
$("#outTemp_info").html(outTempInfo);
$("#supplyAirflow_info").html(supplyAirflowInfo);
$("#returnAirflow_info").html(returnAirflowInfo);
