<template>
  <div ref="chartwrapper">
    <svg id="originalTweets" class="chart"></svg>
  </div>
</template>

<script>
import ScatterPlot from "../../charts/scatterplot";
import EventBus from "../../EventBus.js";
import * as moment from "moment";

export default {
  created() {
    EventBus.$on("/timeseries/data", data => {
      let wrapper = this.$refs.chartwrapper;

      let originalData = data
        .filter(item => {
          return item.original;
        })
        .map(item => {
          return item.original;
        });

      let chart = new ScatterPlot("#originalTweets", {
        data: originalData,
        width: wrapper.clientWidth,
        tooltip: function(d) {
          return `
            <div class="tweet">
              <div class="tweet-header">
                <div class="tweet-author">
                  <span class="tweet-screenname">${d.user.screen_name}</span>
                </div>
              </div>
              <div class="tweet-body">
                <p>${d.text}</p>
                <div>
                  <time>${moment(d.created_at).format("LT")} - ${moment(
            d.created_at
          ).format("MMMM Do YYYY")}</time>
                </div>
              </div>
            </div>`;
        }
      });
    });
  }
};
</script>

<style>
.main text {
  font: 10px sans-serif;
}

.axis line,
.axis path {
  shape-rendering: crispEdges;
  stroke: black;
  fill: none;
}

circle {
  fill: rgba(134, 171, 208, 0.42);
}
</style>
