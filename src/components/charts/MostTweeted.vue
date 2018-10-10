<template>
  <div ref="chartwrapper">
    <svg id="most-tweeted" class="chart" viewBox="0 0 1200 500">
    </svg>
  </div>
</template>

<script>
import BarChart from '../charts/barchart';
const data = require("./most-tweeted.json");

export default {
  mounted() {
    let wrapper = this.$refs.chartwrapper;

    let sorted = data.sort((a, b) => {
      return b.occurences - a.occurences;
    });

    let filtered = sorted.filter(item => {
      return item.occurences > 5;
    });

    let barChart = new BarChart('#most-tweeted', {
      data: filtered,
      width: wrapper.clientWidth,
      xAxis: 'screen_name',
      yAxis: 'occurences',
      tooltip: function(d) {
        return `<strong>${d.screen_name}: ${d.occurences}</strong>`;
      }
    });
  }
};
</script>

<style>

.chart {
  margin-bottom: 80px;
}

.bar {
  fill: RGBA(114, 186, 249, 1.00);
  transition: fill 0.5s ease;
}

.bar:hover {
  fill: RGBA(58, 158, 249, 1.00);
}

.axis text {
  font: 10px sans-serif;
}

.axis path,
.axis line {
  fill: none;
  stroke: #fff;
  shape-rendering: crispEdges;
}

.x.axis path {
  display: none;
}
</style>
