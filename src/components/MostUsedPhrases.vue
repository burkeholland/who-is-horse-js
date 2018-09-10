<template>
  <div ref="chartwrapper">
    <svg id="common-phrases"></svg>
  </div>
</template>

<script>
import moment from "moment";
import BarChart from '../charts/barchart.js';

export default {
  mounted() {
    let data = [
      { "_id" : "javascript", "count" : 39 },
      { "_id" : "js", "count" : 13 },
      { "_id" : "webpack", "count" : 12 },
      { "_id" : "ember", "count" : 11 },
      { "_id" : "npm", "count" : 10 },
      { "_id" : "Node", "count" : 6 },
      { "_id" : "TypeScript", "count" : 6 },
      { "_id" : "ES6", "count" : 5 },
      { "_id" : "CSS", "count" : 5 },
      { "_id" : "people", "count" : 4 },
      { "_id" : "website", "count" : 3 },
      { "_id" : "web", "count" : 3 },
      { "_id" : "tools", "count" : 3 },
      { "_id" : "Mozilla", "count" : 3 },
      { "_id" : "Firefox", "count" : 3 }
    ]

    let wrapper = this.$refs.chartwrapper;

    let sorted = data.sort((a, b) => {
      return b.occurences - a.occurences;
    });

    let filtered = sorted.filter(item => {
      return item.occurences > 5;
    });

    let barChart = new BarChart('.chart', {
      options: {
        data: data,
        width: wrapper.clientWidth,
        xAxis: '_id',
        yAxis: 'count'
      }
    });
  }
}
</script>

<style scoped>
</style>
