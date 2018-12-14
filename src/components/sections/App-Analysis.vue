<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs">
            <h1>Time Series Analysis</h1>
            <p>
              Not really knowing where to start, we first plotted every tweet we had from horse_js as it occured over time. The day is charted on the y-axis, and the
              <i>time of day</i> on the y. All times are plotted in
              <b>Central Standard Time</b>.
            </p>
            <p>What do you see?</p>
          </div>
        </div>
        <div class="row center-xs content-extends">
          <div class="col-xs">
            <div class="row end-xs">
              <div class="col-xs">
                <img src="../../assets/pink-x.svg" alt class="dot dot-1">
              </div>
            </div>
            <horse-tweets></horse-tweets>
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
              <b>lives in either the Central or Eastern time zone</b>. We know that because their activity dwindles sharply in the evening and disapears between approximately 11 - 12 PM CST and reappears at around 8-9 AM CST.
            </p>
            <p>There are a myriad of other, less helpful conclusions that we could draw from this data. What other things do you see here?</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HorseTweets from "../charts/HorseTweets.vue";

export default {
  components: {
    HorseTweets
  }
};
</script>

<style scoped>
.dot-1 {
  position: absolute;
  margin-right: -200px;
  margin-top: -100px;
}

.dot-2 {
  position: absolute;
  margin-left: -200px;
}
</style>
