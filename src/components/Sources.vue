<template>
  <div>
    <canvas id="sources"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  mounted() {
    let data = [
      { "_id" : "Twitter Web Client", "count" : 580 },
      { "_id" : "Twitter for Android", "count" : 468 }
    ]

    let chartData = [];
    let chartLabels = [];
    let colors = [];

    data.forEach(item => {
      chartData.push(item.count);
      chartLabels.push(item._id);
      colors.push('rgb(158, 58, 101)');
    });

    this.createChart(chartData, chartLabels, colors);
  },
  methods: {
    createChart(data, labels, colors) {
      let ctx = document.getElementById('sources');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Number of times phrase appears',
              data: data,
              backgroundColor: colors
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Number of times source was used',
                fontColor: 'white'
              },
              ticks: {
                fontColor: "white",
                fontSize: 18,
                beginAtZero: true
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Source used',
                fontColor: 'white'
              },
              ticks: {
                fontColor: "white"
              }
            }]
          }
        }
      });
    }
  }
}
</script>

<style scoped>
</style>
