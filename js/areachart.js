let drawAreaChart = function(
    lables,
    confirmedChartValues,
    diedChartValues,
    recoveredChartValues,
    activeChartValues
  ) {
    var ctx = document.getElementById("myAreaChart");
  
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: lables,
        datasets: [
          {
            type: "line",
            label: "Confirmed: ",
            borderColor: window.chartColors.grey,
            borderWidth: 2,
            fill: false,
            data: confirmedChartValues
          },
          {
            type: "bar",
            label: "Recovered: ",
            backgroundColor: window.chartColors.green,
            stack: "Stack 0",
            data: recoveredChartValues
          },
          {
            type: "bar",
            label: "Died: ",
            backgroundColor: window.chartColors.red,
            stack: "Stack 0",
            data: diedChartValues
          },
          {
            type: "bar",
            label: "Active: ",
            backgroundColor: window.chartColors.orange,
            stack: "Stack 0",
            data: activeChartValues
          }
          
        ]
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            left: 10,
            right: 25,
            top: 25,
            bottom: 0
          }
        },
        scales: {
          xAxes: [
            {
              time: {
                unit: "date"
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
              // ticks: {
              //   maxTicksLimit: 7
              // }
            }
          ],
          yAxes: [
            {
              ticks: {
                maxTicksLimit: 10,
                padding: 10
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          titleMarginBottom: 10,
          titleFontColor: "#6e707e",
          titleFontSize: 14,
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          intersect: false,
          mode: "index",
          caretPadding: 10
        }
      }
    });
  };