import moment from "moment";
import $ from "jquery";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import solidGauge from "highcharts/modules/solid-gauge";
highchartsMore(Highcharts);
solidGauge(Highcharts);

// Relationship between Miles Per Hour, Miles Per Gallon, and zero-intercept ratio
const graph1 = (fieldValues, setRenderPlotAgain) => {
  Highcharts.chart("container1", {
    chart: {
      type: "scatter"
    },
    title: {
      text:
        "Relationship between Miles Per Hour, Miles Per Gallon, and zero-intercept ratio"
    },
    xAxis: {
      title: {
        enabled: true,
        text: "Miles Per Hour"
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: "Miles Per Gallon"
      }
    },
    legend: {
      backgroundColor: "#FFFFFF",
      borderWidth: 1
    },
    plotOptions: {
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              lineColor: "rgb(100,100,100)"
            }
          }
        },
        states: {
          hover: {
            marker: {
              enabled: false
            }
          }
        }
      }
    },
    tooltip: {
      formatter: function (tooltip) {
        let zeroInterceptRatioValue = fieldValues.zero_intercept_ratio;
        return `<b>${this.series.name} : ${
          isFinite(zeroInterceptRatioValue) ? zeroInterceptRatioValue : 0
        }</b><br> Miles Per Hour: ${this.point.x}<br>Miles Per Gallon: ${
          this.point.y
        }`;
      }
    },
    series: [
      {
        name: "zero-intercept ratio",
        data: [
          [
            Number(fieldValues.miles_per_hour),
            Number(fieldValues.miles_per_gallon),
            Number(fieldValues.zero_intercept_ratio)
          ]
        ]
      }
    ]
  });

  setRenderPlotAgain(false);
};

// Gallons Per Hour
const graph2 = (fieldValues, setRenderPlotAgain) => {
  Highcharts.chart("container2", {
    chart: {
      type: "line"
    },
    title: {
      text: "Gallons Per Hour"
    },
    xAxis: {
      categories: ["Miles Per Hour", "Miles Per Gallon", "Gallons Per Hour"]
    },
    yAxis: {
      title: {
        text: "Values"
      }
    },
    tooltip: {
      formatter: function (tooltip) {
        return `${this.x} : ${this.point.y.toFixed(2)}`;
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "Gallons Per Hour",
        data: [
          Number(fieldValues.miles_per_hour),
          Number(fieldValues.miles_per_gallon),
          Number(fieldValues.gallons_per_hour)
        ]
      }
    ]
  });

  setRenderPlotAgain(false);
};

// Gallons Per Hour vs Zero-Intercept Dollars Per Hour
const graph3 = (fieldValues, setRenderPlotAgain) => {
  Highcharts.chart("container3", {
    chart: {
      type: "column"
    },
    title: {
      text: "Gallons Per Hour vs Zero-Intercept Dollars Per Hour"
    },
    xAxis: {
      categories: [moment().format("MMM")]
    },
    yAxis: [
      {
        title: {
          text: "Gallon/Hr"
        }
      },
      {
        title: {
          text: "$/Hr"
        },
        opposite: true
      }
    ],
    tooltip: {
      valueDecimals: 2,
      shared: true,
      useHTML: true,
      crosshairs: true,
      outside: false,
      formatter: function () {
        var s = "<span>" + this.x + "</span>";

        $.each(this.points, function (i, point) {
          s += `<br/><span style=color:${point.color}>\u25CF</span> ${
            point.series.name
          } :  <b>${point.y.toFixed(2)}</b>`;
        });

        return s;
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "Gallons Per Hour",
        type: "column",
        yAxis: 0,
        data: [Number(fieldValues.gallons_per_hour)],
        color: "#6f9654"
      },
      {
        name: "Zero-Intercept Dollars Per Hour",
        type: "spline",
        yAxis: 1,
        data: [Number(fieldValues.zero_intercept_dollars_per_hour)],
        color: "#ff7c79"
      }
    ]
  });

  setRenderPlotAgain(false);
};

// Gallons
const graph4 = (fieldValues, setRenderPlotAgain) => {
  Highcharts.chart("container4", {
    chart: {
      type: "solidgauge"
    },

    title: {
      text: "Gallons"
    },

    tooltip: { enabled: false },

    yAxis: {
      min: 0,
      max: Number(fieldValues.gallons) + 10000
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "gallons",
        data: [Number(Number(fieldValues.gallons).toFixed(0))]
      }
    ]
  });

  setRenderPlotAgain(false);
};

// Revenue
const graph5 = (fieldValues, setRenderPlotAgain) => {
  Highcharts.chart("container5", {
    chart: {
      type: "bar"
    },
    title: {
      text: "Revenue"
    },
    xAxis: {
      categories: [moment().format("MMM")]
    },
    yAxis: {
      title: {
        text: "$"
      }
    },
    tooltip: {
      valueDecimals: 2,
      shared: true,
      useHTML: true,
      crosshairs: true,
      outside: false,
      formatter: function () {
        var s = "<span>" + this.x + "</span>";

        $.each(this.points, function (i, point) {
          s += `<br/><span style=color:${point.color}>\u25CF</span> ${
            point.series.name
          } :  <b>${point.y.toFixed(0)}</b>`;
        });

        return s;
      }
    },
    series: [
      {
        name: "Base Revenue",
        data: [Number(fieldValues.base_revenue)]
      },

      {
        name: "Adjustment",
        data: [Number(fieldValues.adjustment)]
      },

      {
        name: "Total Revenue",
        data: [Number(fieldValues.total_revenue)]
      },

      {
        name: "Cost Change",
        data: [Number(fieldValues.cost_change)]
      },

      {
        name: "Over Recovery",
        data: [Number(fieldValues.over_recovery)]
      }
    ]
  });

  setRenderPlotAgain(false);
};

// Percentage
const graph6 = (fieldValues, setRenderPlotAgain) => {
  Highcharts.chart("container6", {
    chart: {
      type: "column"
    },
    title: {
      text: "Percentage"
    },
    xAxis: {
      categories: [moment().format("MMM")]
    },
    yAxis: {
      title: {
        text: "%"
      }
    },
    tooltip: {
      valueDecimals: 2,
      shared: true,
      useHTML: true,
      crosshairs: true,
      outside: false,
      formatter: function () {
        var s = "<span>" + this.x + "</span>";

        $.each(this.points, function (i, point) {
          s += `<br/><span style=color:${point.color}>\u25CF</span> ${
            point.series.name
          } :  <b>${point.y.toFixed(2)}</b>`;
        });

        return s;
      }
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: "Implied",
        data: [Number(fieldValues.implied)]
      },
      {
        name: "Over Recovery Percentage of Adjustment",
        data: [Number(fieldValues.over_recovery_percentage_of_adjustment)]
      },
      {
        name: "Adjustment percentage",
        data: [Number(fieldValues.adjustment_percentage) * 100]
      },
      {
        name: "Over-Recovery % of Revenue",
        data: [Number(fieldValues.over_recovery_percentage)]
      }
    ]
  });

  setRenderPlotAgain(false);
};

export { graph1, graph2, graph3, graph4, graph5, graph6 };
