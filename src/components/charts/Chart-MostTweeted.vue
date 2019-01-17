<template>
  <div ref="chartwrapper">
    <h2 v-show="isLoading">Loading Data (takes a sec...🐴)</h2>
    <svg id="most-tweeted" class="chart"></svg>
  </div>
</template>

<script>
import BarChart from "../../charts/barchart";
import EventBus from "../../EventBus";

export default {
  data() {
    return {
      isLoading: true
    };
  },
  created() {
    EventBus.$on("/mosttweeted/data", data => {
      let wrapper = this.$refs.chartwrapper;

      let sorted = data.sort((a, b) => {
        return b.occurences - a.occurences;
      });

      let filtered = sorted.filter(item => {
        return item.occurences > 5;
      });

      let barChart = new BarChart("#most-tweeted", {
        data: filtered,
        width: wrapper.clientWidth,
        xAxis: "screen_name",
        yAxis: "occurences",
        tooltip: function(d) {
          return `<strong>${d.screen_name}: ${d.occurences}</strong>`;
        }
      });

      this.isLoading = false;
    });
  }
};
</script>

<style>
.bar {
  fill: RGBA(114, 186, 249, 1);
  padding: 10px;
  transition: fill 0.5s ease;
}

.bar:hover {
  fill: RGBA(58, 158, 249, 1);
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
