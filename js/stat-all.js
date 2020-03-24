let confirmedCount = 0
let deathsCount = 0
let recoverdCount = 0

fetch('https://planetvitals-backend.iinerds.com/api/v1/covid-worldmeters/totalCount')
    .then(response => {
        return response.json()
    })
    .then(dat => {
        confirmedCount = dat.totalconfirmed;
        deathsCount = dat.totaldeath;
        recoverdCount = dat.totalrecovered;
        document.getElementById("totalConfirmed").innerHTML = confirmedCount;
        document.getElementById("totalDeaths").innerHTML = deathsCount;
        document.getElementById("totalRecovered").innerHTML = recoverdCount;
        document.getElementById("totalSick").innerHTML = confirmedCount - deathsCount - recoverdCount;
        drawDonut(deathsCount, recoverdCount, confirmedCount - deathsCount - recoverdCount)
    })
    .catch(err => {
        // Do something for an error here
    })