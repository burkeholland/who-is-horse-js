<template>
  <div ref="chartwrapper">
    <svg id="common-phrases"></svg>
  </div>
</template>

<script>
import moment from "moment";
import BarChart from "../../charts/barchart.js";

export default {
  mounted() {
    let data = [
      { _id: "javascript", count: 39 },
      { _id: "js", count: 13 },
      { _id: "webpack", count: 12 },
      { _id: "ember", count: 11 },
      { _id: "npm", count: 10 },
      { _id: "Node", count: 6 },
      { _id: "TypeScript", count: 6 },
      { _id: "ES6", count: 5 },
      { _id: "CSS", count: 5 },
      { _id: "people", count: 4 },
      { _id: "website", count: 3 },
      { _id: "web", count: 3 },
      { _id: "tools", count: 3 },
      { _id: "Mozilla", count: 3 },
      { _id: "Firefox", count: 3 }
    ];

    let wrapper = this.$refs.chartwrapper;

    let barChart = new BarChart("#common-phrases", {
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
.bar {
  fill: RGBA(222, 168, 86, 1);
  padding: 10px;
  transition: fill 0.5s ease;
}

.bar:hover {
  fill: RGBA(187, 142, 80, 1);
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
