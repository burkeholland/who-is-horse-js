<template>
  <div>
    <canvas id="most-tweeted"></canvas>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Chart from "chart.js";
export default {
  created() {
    let url = 'https://horsetweets.azurewebsites.net/api/GetTimeSeries';

    axios.get(url).then(result => {
      let chartData = [];
      let chartLabels = [];
      let colors = [];

      result.data.forEach(item => {
        if (item.occurences > 5) {
          chartData.push(item.occurences);
          chartLabels.push(item._id);
          colors.push('rgb(153, 102, 255)');
        }
      });

      this.createChart(chartData, chartLabels, colors);
    })
  },
  methods: {
    createChart(data, labels, colors) {
      let ctx = document.getElementById('most-tweeted');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Accounts quoted more than five times',
              data: data,
              backgroundColor: colors
            }
          ]
        }
      });
    }
  }
}
</script>

<style scoped>
</style>
