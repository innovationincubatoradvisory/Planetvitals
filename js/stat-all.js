let confirmedCount = 0
let deathsCount = 0
let recoverdCount = 0
function drawDonut(p1, p2, p3) {
    new Chart(document.getElementById("doughnut-chart"), {
        type: 'doughnut',
        data: {
            labels: ["Dead", "Recovered", "Active"],
            datasets: [
                {
                    label: "Population (millions)",
                    backgroundColor: ["red", "green", "orange"],
                    data: [p1, p2, p3]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'CORONA/COVID19 Overview'
            }
        }
    });
}

fetch('https://planetvitals-backend-py.iinerds.com/count')
    .then(response => {
        return response.json()
    })
    .then(dat => {
        confirmedCount = dat.confirmed;
        deathsCount = dat.deaths;
        recoverdCount = dat.recovered;
        seriouscount=dat.serious_cases;
        case_ppcount=dat.totalcases_pp;
        closedCount=deathsCount+recoverdCount;
        activeCount=confirmedCount - closedCount;
        mildCount=activeCount-seriouscount;
        
        document.getElementById("totalConfirmed").innerHTML = confirmedCount;
        document.getElementById("totalDeaths").innerHTML = deathsCount;
        document.getElementById("totalRecovered").innerHTML = recoverdCount;
        document.getElementById("totalSick").innerHTML =  activeCount;
        document.getElementById("card-closed-count").innerHTML='<strong>'+closedCount+'</strong>';
        document.getElementById("card-closed-death").innerHTML='<strong>'+deathsCount+'('+((deathsCount/(closedCount))*100).toFixed(1)+'%)'+'</strong>';
        document.getElementById("card-closed-recovered").innerHTML='<strong>'+recoverdCount+'('+((recoverdCount/(closedCount))*100).toFixed(1)+'%)'+'</strong>';
        document.getElementById("card-infected-count").innerHTML='<strong>'+activeCount+'</strong>';
        document.getElementById("card-infected-mild").innerHTML='<strong>'+mildCount+'('+((mildCount/activeCount)*100).toFixed(1)+'%)'+'</strong>';
        document.getElementById("card-infected-serious").innerHTML='<strong>'+seriouscount+'('+((seriouscount/activeCount)*100).toFixed(1)+'%)'+'</strong>';
        drawDonut(deathsCount, recoverdCount, confirmedCount - deathsCount - recoverdCount)
    })
    .catch(err => {
        // Do something for an error here
    })