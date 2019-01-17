<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs">
            <h1>Time Series Analysis</h1>
            <p>
              Based on suggestions from Vadim, the first thing we attempted was a "Time Series Analysis". We plotted every tweet we had from horse_js as it occured over time. The day is charted on the x-axis, and the
              <i>time of day</i> on the y.
            </p>
            <p>What do you see when you look at this graph? Notice anything that jumps out at you immediately?</p>
          </div>
        </div>
        <div class="row center-xs content-extends">
          <div class="col-xs">
            <div class="row end-xs">
              <div class="col-xs">
                <img src="../../assets/pink-x.svg" alt class="dot dot-1">
              </div>
            </div>
            <chart-horse-tweets></chart-horse-tweets>
          </div>
        </div>
        <br>
        <div class="row center-xs">
          <div class="col-xs conclusion">
            <div class="row start-xs">
              <div class="col-xs">
                <img src="../../assets/blue-oval.svg" class="dot dot-2" alt>
              </div>
            </div>
            <img src="../../assets/attention.svg" alt>
            <h1>Conclusion</h1>
            <p>
              @horse_js
              <b>lives in either the Central or Eastern time zone</b>. Their activity dwindles sharply in the evening and disapears between ~11 PM - 12 AM CST and reappears at ~8 AM - 9 AM CST because they are likely asleep.
            </p>
            <p>We could also use this to make very general assumptions about horse_js. For instance, they likely do not like to stay out late. We know that because of the consitent offline pattern.</p>
            <p>What conclusions do you draw from this data?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartHorseTweets from "../charts/Chart-HorseTweets.vue";

export default {
  components: {
    ChartHorseTweets
  }
};
</script>

<style scoped>
.dot-1 {
  margin-right: -200px;
  margin-top: -100px;
}

.dot-2 {
  position: absolute;
  margin-left: -200px;
}
</style>
