new Chart(document.getElementById("bar-chart-byage"), {
    type: 'horizontalBar',
    data: {
      labels: ["80+ Years", "70-79 Years", "60-69 Years", "50-59 Years", "40-49Years","30-39 Years","20-29 Years","10-19Years","0-9 Years"],
      datasets: [
        {
          barPercentage: 0.5,
          barThickness: 6,
          label: "Fatality By Age (number of deaths/number of cases) in percentage",
          backgroundColor: ["#8B0000", "#B22222","#FF0000","#DC143C","#FA8072","#F08080","#E9967A","#FFA07A","#ffa"],
          data: [14.8,8,3.6,1.3,0.4,0.2,0.2,0.2,0]
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: 'number of deaths/number of cases in percentage'
      }
    }
});
