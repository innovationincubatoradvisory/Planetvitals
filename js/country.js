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
document.getElementById("country-display").innerHTML=a.toUpperCase();
//line chart


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
                activeChartValues.push(item.activecases)
                document.getElementById("tb-content-1").innerHTML +="<tr><td>"+item.time_series.slice(5,16)+"</td><td>"+item.confirmed+'<td style="color:darkred;">'+item.deaths+"</td>"+'<td style="color:orange;">'+item.activecases+"</td>"+'<td style="color:green;">'+item.recovered+"</td>"+"</td></tr>";             
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
                time_seriesValues.push(item.time_series.slice(5, 16))
                confirmedChartValues.push(item.confirmed)
                diedChartValues.push(item.deaths)
                recoveredChartValues.push(item.recovered)
                activeChartValues.push(item.activecases)
                document.getElementById("last-updated").innerHTML=item.time_series;                
                document.getElementById("totalConfirmed").innerHTML = confirmedCount;
                document.getElementById("totalDeaths").innerHTML = deathsCount;
                document.getElementById("totalRecovered").innerHTML = recoverdCount;
                document.getElementById("totalSick").innerHTML = item.activecases;
                document.getElementById("tb-content-1").innerHTML +="<tr><td>"+item.time_series.slice(5,16)+"</td><td>"+item.confirmed+'<td style="color:darkred;">'+item.deaths+"</td>"+'<td style="color:orange;">'+item.activecases+"</td>"+'<td style="color:green;">'+item.recovered+"</td>"+"</td></tr>";
                $(document).ready( function () {
                    $('#country-table-1').DataTable({"order": [[ 1, "desc" ]]});
                } );
            
            });
        }
    })
    .catch(err => {
        // Do something for an error here
    })
    