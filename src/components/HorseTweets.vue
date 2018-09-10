<template>
  <div ref="chartwrapper">
    <svg id="timeSeries" class="chart"></svg>
  </div>
</template>

<script>
  import ScatterPlot from '../charts/scatterplot';
  import data from '../assets/data/time-series.json';
  import * as moment from 'moment';

  export default {
    mounted() {
      let wrapper = this.$refs.chartwrapper;

      let horseData = data.map(item => {
        return item.horse;
      })

      let chart = new ScatterPlot('#timeSeries', {
        data: horseData,
        width: wrapper.clientWidth,
        pointClass: 'horse-point',
        tooltip: function(d) {
          console.log(JSON.stringify(d));
          return `
            <div class="tweet">
              <div class="tweet-header">
                <div class="tweet-author">
                  <span class="tweet-screenname">@horse_js</span>
                </div>
              </div>
              <div class="tweet-body">
                <p>${d.text}</p>
                <div>
                  <time>${moment(d.created_at).format('LT')} - ${moment(d.created_at).format('MMMM Do YYYY')}</time>
                </div>
              </div>
            </div>`
        }
      });
    }
  }
</script>

<style>
.main text {
  font: 10px sans-serif;
}

.axis line, .axis path {
  shape-rendering: crispEdges;
  stroke: black;
  fill: none;
}

.horse-point {
  fill: rgba(224, 0, 120, 0.3)
}
</style>
