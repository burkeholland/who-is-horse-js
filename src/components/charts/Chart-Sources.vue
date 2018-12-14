<template>
  <div ref="chartwrapper">
    <svg id="sources" class="chart"></svg>
  </div>
</template>

<script>
import BarChart from "../../charts/barchart";
const data = require("./sources.json");

export default {
  mounted() {
    let wrapper = this.$refs.chartwrapper;

    let barChart = new BarChart("#sources", {
      data: data,
      width: wrapper.clientWidth,
      xAxis: "_id",
      yAxis: "count",
      tooltip: function(d) {
        return `<strong>${d._id}: ${d.count}</strong>`;
      }
    });
  }
};
</script>

<style>
#sources .bar {
  fill: RGBA(253, 105, 169, 1);
  padding: 10px;
  transition: fill 0.5s ease;
}

#sources .bar:hover {
  fill: RGBA(210, 91, 142, 1);
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
