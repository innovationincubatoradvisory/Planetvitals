function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
a = getUrlParameter('country');
let time_seriesValues = []
let confirmedChartValues = []
let diedChartValues = []
let recoveredChartValues = []
let activeChartValues = []

//line chart
function countryallchart() {
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: time_seriesValues,
            datasets: [{
                data: confirmedChartValues,
                label: "Confirmed",
                borderColor: "#A9A9A9",
                fill: false
            }, {
                data: diedChartValues,
                label: "Died",
                borderColor: "#FF0000",
                fill: false
            }, {
                data: recoveredChartValues,
                label: "Recovered",
                borderColor: "#008000",
                fill: false
            }, {
                data: activeChartValues,
                label: "Active",
                borderColor: "#FFA500",
                fill: false
            }]
        },
        options: {
            title: {
                display: false,
                text: ''
            }
        }
    });
}




//Old Data
fetch('https://planetvitals-backend-py.iinerds.com/history/' + a)
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        dt = data.data
        if (dt && dt.length) {
            dt.forEach(item => {
                time_seriesValues.push(item.time_series.slice(5, 16))
                confirmedChartValues.push(item.confirmed)
                diedChartValues.push(item.deaths)
                recoveredChartValues.push(item.recovered)
                activeChartValues.push(item.confirmed - item.deaths - item.recovered)
            });
        }
    })
    .catch(err => {
        // Do something for an error here
    })

//New Data
fetch('https://planetvitals-backend-py.iinerds.com/data/' + a)
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        dt = data.data
        if (dt && dt.length) {
            dt.forEach(item => {
                confirmedCount = item.confirmed;
                deathsCount = item.deaths;
                recoverdCount = item.recovered;
                seriouscount = item.serious_cases;
                case_ppcount = item.totalcases_pp;
                closedCount = deathsCount + recoverdCount;
                activeCount = confirmedCount - closedCount;
                mildCount = activeCount - seriouscount;
                time_seriesValues.push(item.time_series.slice(5, 16))
                confirmedChartValues.push(item.confirmed)
                diedChartValues.push(item.deaths)
                recoveredChartValues.push(item.recovered)
                activeChartValues.push(item.confirmed - item.deaths - item.recovered)
                document.getElementById("totalConfirmed").innerHTML = confirmedCount;
                document.getElementById("totalDeaths").innerHTML = deathsCount;
                document.getElementById("totalRecovered").innerHTML = recoverdCount;
                document.getElementById("totalSick").innerHTML = activeCount;
            });
        }
    })
    .catch(err => {
        // Do something for an error here
    })
console.log(confirmedChartValues)
console.log(time_seriesValues)
    countryallchart();