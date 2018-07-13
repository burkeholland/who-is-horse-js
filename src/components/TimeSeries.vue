<template>
  <div>
    <canvas id="time-pie"></canvas>
  </div>
</template>

<script>
  import axios from 'axios';
  import Chart from 'chart.js';
  import moment from 'moment';

  export default {
    created() {
      const offset = -7;

      axios.get('http://localhost:7071/api/GetTimeSeries').then(result => {
        const pieData = [];

        const horseData = result.data.forEach(item => {
          let horseCreatedAt = item.horse ? moment(item.horse.created_at).add(-7, 'hours') : null;
          let originalCreatedAt = item.original ? moment(item.original.created_at).add(-7, 'hours') : null;

          // push pie data
          pieData.push(horseCreatedAt.hour());

        });

        // create all the charts
        this.createCharts({ pieData: pieData, scatterData: scatterData, scopedScatterData: scopedScatterData });
      });
    },
    methods: {
      pushScatterData(container, horseCreatedAt, originalCreatedAt, item) {
        container.horse.push({ x: horseCreatedAt, y: `${horseCreatedAt.hour()}${horseCreatedAt.minute()}`, text: item.horse.text, id: item.horse.id_str, screenName: item.horse.user.screen_name });
        if (originalCreatedAt) {
          container.original.push({ x: originalCreatedAt, y: `${originalCreatedAt.hour()}${originalCreatedAt.minute()}`, text: item.original.text, id: item.original.id_str, screenName: item.original.user.screen_name });
        }
      },
      createCharts(data) {
        this.createScatter(data.scopedScatterData);
        this.createPie(data.pieData);
      },
      groupByBlock(data) {
        return function(min, max) {
          let total = 0;

          data.forEach(item => {
            if (item >= min && item < max ) {
              total = total + 1;
            }
          });

          return total;
        }
      },

      createPie(data) {

        let grouper = this.groupByBlock(data);
        const pieData = [ grouper(0, 6), grouper(6, 12), grouper(12, 18), grouper(18, 24)]

        const ctx = document.getElementById('time-pie');

        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ["Early Morning (Midnight - 6 AM)", "Morning (Midnight - 6 AM)", "Afternoon (Noon - 6 PM)", "Evening (6PM - Midnight)"],
            datasets: [{
              label: "Tweets By Time Of Day",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
              data: pieData
            }]
          },
          options: {
            title: {
              display: true,
              text: 'When Is @horse_js Tweeting?'
            }
          }
        });
      },
      createScatter(data) {
        const ctx = document.getElementById('time-scatter');
        const myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [
              {
                label: "@horse_js",
                data: data.horse,
                pointBackgroundColor: "rgba(224, 0, 120, 0.3)",
                pointRadius: 10,
              },
              {
                label: "Original Tweet",
                data: data.original,
                pointBackgroundColor: "rgba(134, 171, 208, 0.42)",
                pointRadius: 10
              }
            ]
          },
          options: {
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].text;
                  return label;
                }
              }
            },
            scales: {
              xAxes: [{
                type: 'time'
              }]
            },
            onClick: function(event, item) {
              // get the item from the data set
              if (item[0]) {
                let tweet = item[0]._chart.data.datasets[item[0]._datasetIndex].data[item[0]._index];
                window.open(`https://twitter.com/${tweet.screenName}/status/${tweet.id}`);
              }
            }
          },
        });
      }
    }
  }
</script>

<style scoped>
</style>
