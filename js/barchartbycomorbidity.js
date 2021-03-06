new Chart(document.getElementById("bar-chart-bycomorbidity"), {
    type: 'horizontalBar',
    data: {
      labels: ["Cardio Vascular Diseases", "Diabetes", "Chronic respiratory disease", "Hypertension", "Cancer","no pre-existing conditions"],
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 6,
          label: "Fatality By Comorbidity (number of deaths/number of cases) in percentage",
          backgroundColor: ["#8B0000", "#B22222","#FF0000","#DC143C","#FA8072","#F08080"],
          data: [13.2,9.2,8.0,8.4,7.6,0.9]
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
        display: false,
        text: 'Number of deaths/Number of cases in percentage'
      }
    }
});

