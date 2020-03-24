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
        console.log(data)
        regionsTotal = data.responseReport

        if (regionsTotal && regionsTotal.length) {
            regionsTotal.forEach(item => {
                areaChartLabels.push(item.country)
                confirmedChartValues.push(parseFloat(item.confirmed))
                diedChartValues.push(parseFloat(item.deaths))
                recoveredChartValues.push(parseFloat(item.recovered))
                let itemactive = item.confirmed - item.deaths - item.recovered;
                if (itemactive == 0) {
                    document.getElementById("tb-content").innerHTML += "<tr>" + "<td>" + item.country + "</td>" + "<td>" + item.confirmed + "</td>" + "<td>" + item.deaths + "</td>" + "<td>" + item.recovered + "</td>" + "</tr>";

                } else {
                    document.getElementById("tb-content").innerHTML += "<tr>" + "<td table-sucess>" + item.country + "</td>" + "<td>" + item.confirmed + "</td>" + "<td>" + item.deaths + "</td>" + "<td>" + item.recovered + "</td>" + "</tr>";

                }

            });
        }
        console.log(areaChartLabels)
        console.log(confirmedChartValues)
        console.log(diedChartValues)
        console.log(recoveredChartValues)
        console.log(data.dataForMap)
        drawAreaChart(areaChartLabels.slice(0, 10), confirmedChartValues.slice(0, 10), diedChartValues.slice(0, 10), recoveredChartValues.slice(0, 10))
    })
    .catch(err => {
        // Do something for an error here
    })