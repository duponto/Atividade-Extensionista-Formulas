/* globals Chart:false, feather:false */
import objValues from './graphValues.js';
var ctx = document.getElementById('myChart')
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: objValues.dates,
    datasets: [{
      data: objValues.values,
      lineTension: 0,
      backgroundColor: 'transparent',
      borderColor: '#007bff',
      borderWidth: 4,
      pointBackgroundColor: '#007bff'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  }
});
  