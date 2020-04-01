function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
a=getUrlParameter('country');
let Countrylabels=[]
let confirmedChartValues = []
let diedChartValues = []
let recoveredChartValues = []
let activeChartValues = []

//Old Data
fetch('https://planetvitals-backend-py.iinerds.com/history/'+a)
    .then(response => {
        return response.json()
    })
    .then(data => {
        // Work with JSON data here
        dt = data.data
        if (dt && dt.length) {
            dt.forEach(item => {
                Countrylabels.push(item.country.slice(5,16))
                confirmedChartValues.push(item.confirmed)
                diedChartValues.push(item.deaths)
                recoveredChartValues.push(item.recovered)
                activeChartValues.push(item.confirmed-item.deaths-item.recovered)
            });
        }
    })
    .catch(err => {
        // Do something for an error here
    })

    //New Data
fetch('https://planetvitals-backend-py.iinerds.com/data/'+a)
.then(response => {
    return response.json()
})
.then(data => {
    // Work with JSON data here
    dt = data.data
    if (dt && dt.length) {
        dt.forEach(item => {
            confirmedCount =item.confirmed;
        deathsCount = item.deaths;
        recoverdCount = item.recovered;
        seriouscount=item.serious_cases;
        case_ppcount=item.totalcases_pp;
        closedCount=deathsCount+recoverdCount;
        activeCount=confirmedCount - closedCount;
        mildCount=activeCount-seriouscount;
            Countrylabels.push(item.country.slice(5,16))
            confirmedChartValues.push(item.confirmed)
            diedChartValues.push(item.deaths)
            recoveredChartValues.push(item.recovered)
            activeChartValues.push(item.confirmed-item.deaths-item.recovered)
            document.getElementById("totalConfirmed").innerHTML = confirmedCount;
            document.getElementById("totalDeaths").innerHTML = deathsCount;
            document.getElementById("totalRecovered").innerHTML = recoverdCount;
            document.getElementById("totalSick").innerHTML =  activeCount;
        });
    }
})
.catch(err => {
    // Do something for an error here
})