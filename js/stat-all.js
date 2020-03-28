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
        seriouscount=dat.seriouscases;
        case_ppcount=dat.totalcases_pp;
        document.getElementById("totalConfirmed").innerHTML = confirmedCount;
        document.getElementById("totalDeaths").innerHTML = deathsCount;
        document.getElementById("totalRecovered").innerHTML = recoverdCount;
        document.getElementById("totalSick").innerHTML = confirmedCount - deathsCount - recoverdCount;
        drawDonut(deathsCount, recoverdCount, confirmedCount - deathsCount - recoverdCount)
    })
    .catch(err => {
        // Do something for an error here
    })