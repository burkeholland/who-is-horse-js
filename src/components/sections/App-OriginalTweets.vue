<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs">
            <h1>Original Tweet Time Series</h1>
            <p>If we apply the same Time Series Analysis that we did for @horse_js to these original tweets that @horsplain_js provides, we see a similar pattern.</p>
          </div>
        </div>
        <div class="row center-xs content-extends">
          <div class="col-xs chart-space">
            <chart-original-tweets></chart-original-tweets>
          </div>
        </div>
        <br>
        <div class="row center-xs">
          <div class="col-xs conclusion">
            <img src="../../assets/attention.svg" alt>
            <h1>Conclusion</h1>
            <p>
              <b>@horse_js might be quoting their own circle of friends most often</b>. In other words, if we narrow down the right group of related people on Twitter, we might be able to find our culprit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartOriginalTweets from "../charts/Chart-OriginalTweets.vue";

export default {
  components: {
    ChartOriginalTweets
  }
};
</script>

<style scoped>
.chart-space {
  height: 500px;
}
</style>
