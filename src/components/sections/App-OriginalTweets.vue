<template>
  <div v-height>
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs">
            <p>If we apply the same Time Series Analysis that we did for @horse_js to these original original tweets, we see a similar pattern. This tells us that @horse_js is mostly quoting people who live in close proximity - or rather the United States. From this we can determine that @horse_js might be quoting their friends most often.</p>
          </div>
        </div>
        <div class="row center-xs content-extends">
          <div class="col-xs">
            <chart-original-tweets></chart-original-tweets>
          </div>
        </div>
        <div class="row center-xs">
          <div class="col-xs conclusion">
            <img src="../../assets/attention.svg" alt="">
            <h1>Conclusion</h1>
            <p>@horse_js most often quotes their own circle of friends</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChartOriginalTweets from '../charts/Chart-OriginalTweets.vue';

  export default {
    components: {
      ChartOriginalTweets
    }
  }
</script>

<style scoped>

</style>
