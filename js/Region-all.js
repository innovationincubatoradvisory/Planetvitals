let areaChartLabels = []
let areaChartValues = []
let confirmedChartValues = []
let diedChartValues = []
let recoveredChartValues = []
fetch('https://planetvitals-backend.iinerds.com/api/v1/covid-worldmeters/listAllMapData')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        regionsTotal = data.responseReport
        if (regionsTotal && regionsTotal.length) {
            regionsTotal.forEach(item => {
                areaChartLabels.push(item.country)
                confirmedChartValues.push(parseFloat(item.confirmed))
                diedChartValues.push(parseFloat(item.deaths))
                recoveredChartValues.push(parseFloat(item.recovered))
                let itemactive = item.confirmed - item.deaths - item.recovered;
                if (itemactive == 0) {
                    document.getElementById("tb-content").innerHTML += '<tr class="table-success">' + "<td>" + item.country + "</td>" + "<td>" + item.confirmed + "</td>" + "<td>" + item.deaths + "</td>" + "<td>" + item.recovered + "</td>" + "<td>" + itemactive + "</td>" + "<td>" + item.serious_cases + "</td>" + "<td>" + item.totalcases_pp + "</td>" +"</tr>";

                } else {
                    document.getElementById("tb-content").innerHTML += "<tr>" + "<td>" + item.country + "</td>" + "<td>" + item.confirmed + "</td>" + "<td>" + item.deaths + "</td>" + "<td>" + item.recovered + "</td>" + "<td>" + itemactive + "</td>" + "<td>" + item.serious_cases + "</td>" + "<td>" + item.totalcases_pp + "</td>" +"</tr>";

                }

            });
        }
        drawAreaChart(areaChartLabels.slice(0, 10), confirmedChartValues.slice(0, 10), diedChartValues.slice(0, 10), recoveredChartValues.slice(0, 10))
    })
    .catch(err => {
        // Do something for an error here
    })