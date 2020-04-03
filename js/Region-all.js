let areaChartLabels = []
let areaChartValues = []
let confirmedChartValues = []
let diedChartValues = []
let recoveredChartValues = []
let activeChartValues=[]
let affected= 0
fetch('https://planetvitals-backend-py.iinerds.com/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        regions = data.data
        if (regions && regions.length) {
            regions.forEach(item => {
                areaChartLabels.push(item.country)
                confirmedChartValues.push(parseFloat(item.confirmed))
                diedChartValues.push(parseFloat(item.deaths))
                recoveredChartValues.push(parseFloat(item.recovered))
                let itemactive = item.confirmed - item.deaths - item.recovered;
                activeChartValues.push(parseFloat(itemactive))
                affected= affected+1;
                if (itemactive == 0) {
                    document.getElementById("tb-content-1").innerHTML += '<tr class="table-info">' + "<td>" + item.country + "</td>" + '<td>' + item.confirmed + "</td>" + '<td>' + item.change_confirmed + "</td>" + '<td style="color:darkred;">' + item.deaths + "</td>" + '<td style="color:darkred;">' + item.change_deaths + "</td>" +  '<td style="color:red;">' + item.serious_cases + "</td>" +'<td style="color:orange;">' + itemactive + "</td>" +'<td style="color:green;">'  + item.recovered + "</td>" +   "<td>" + item.totalcases_pp + "</td>" +"<td>" + item.deaths_pp + "</td>" +"<td>" + item.first_case + "</td>" +"</tr>";

                } else {
                    document.getElementById("tb-content-1").innerHTML += "<tr>"  + "<td>" + item.country + "</td>" + '<td>' + item.confirmed + "</td>" + '<td>' + item.change_confirmed + "</td>" + '<td style="color:darkred;">' + item.deaths + "</td>" + '<td style="color:darkred;">' + item.change_deaths + "</td>" +  '<td style="color:red;">' + item.serious_cases + "</td>" +'<td style="color:orange;">' + itemactive + "</td>" +'<td style="color:green;">'  + item.recovered + "</td>" +   "<td>" + item.totalcases_pp + "</td>" +"<td>" + item.deaths_pp + "</td>" +"<td>" + item.first_case + "</td>" +"</tr>";

                }

            });
        }
        affected=affected-1;
        drawAreaChart(areaChartLabels.slice(0, 10), confirmedChartValues.slice(0, 10), diedChartValues.slice(0, 10), recoveredChartValues.slice(0, 10),activeChartValues.slice(0,10))
        document.getElementById("count-country").innerHTML +=affected+" countries and territories";
        $(document).ready( function () {
            $('#country-table-1').DataTable({"order": [[ 1, "desc" ]]});
        } );
    })
    .catch(err => {
        // Do something for an error here
    })