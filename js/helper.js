(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";
window.randomScalingFactor = function() {
  return Math.floor(Math.random() * 100);;
};
window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	grey: 'rgb(201, 203, 207)'
};

// Area Chart
let drawAreaChart = function(lables, confirmedChartValues, diedChartValues, recoveredChartValues) {
  var ctx = document.getElementById("myAreaChart");
  
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: lables,
      datasets: [{
        type: 'line',
        label: 'Confirmed: ',
        borderColor: window.chartColors.blue, 
        borderWidth: 2,
        fill: false,
        data: confirmedChartValues
      }, {
        type: 'bar',
        label: 'Died: ',
        backgroundColor: window.chartColors.red,
        stack: 'Stack 0',
        data: diedChartValues,
      }, {
        type: 'bar',
        label: 'Recovered: ',
        backgroundColor: window.chartColors.green,
        stack: 'Stack 0',
        data: recoveredChartValues
      }]
    },
    // options: {
    //   // responsive: true,
    //   // title: {
    //   //   display: true,
    //   //   text: 'Chart.js Stacked Bar and Unstacked Line Combo Chart'
    //   // },
    //   tooltips: {
    //     mode: 'index',
    //     intersect: true
    //   },
    //   scales: {
    //     xAxes: [{
    //       stacked: true,
    //     }]
    //   }
    // }
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
                  },
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

let drawPieChart = function(values) {
  console.log("valuesvaluesvaluesvalues", values);

  var ctx = document.getElementById("myPieChart");
  var myPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Confirmed", "Died", "Recovered"],
      datasets: [
        {
          data: values,
          backgroundColor: ["#4e73df", "#e74a3b", "#36b9cc"],
          hoverBackgroundColor: ["#2e59d9", "#ef301e", "#2c9faf"],
          hoverBorderColor: "rgba(234, 236, 244, 1)"
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        caretPadding: 10
      },
      legend: {
        display: false
      },
      cutoutPercentage: 80
    }
  });
};

let downloadCsv = function(items) {
  let csv = '';
  // Loop the array of objects
  for (let row = 0; row < items.length; row++) {
    let keysAmount = Object.keys(items[row]).length;
    let keysCounter = 0;

    // If this is the first row, generate the headings
    if (row === 0) {
      // Loop each property of the object
      for (let key in items[row]) {
        // This is to not add a comma at the last cell
        // The '\r\n' adds a new line
        console.log(key);
        
        csv += key + (keysCounter + 1 < keysAmount ? "," : "\r\n");
        keysCounter++;
      }
    } else {
      for (let key in items[row]) {
        csv += items[row][key] + (keysCounter + 1 < keysAmount ? "," : "\r\n");
        keysCounter++;
      }
    }
    keysCounter = 0;
  }
  // Once we are done looping, download the .csv by creating a link
  let link = document.createElement("a");
  link.id = "download-csv";
  link.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(csv)
  );
  link.setAttribute("download", "corona-report.csv");
  document.body.appendChild(link);
  document.querySelector("#download-csv").click();
};
