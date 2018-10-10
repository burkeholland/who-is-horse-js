<template>
  <div v-height>
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs">
            <h1>Time Series Analysis</h1>
            <div class="row end-xs">
              <div class="col-xs">
                <img src="../../assets/pink-x.svg" alt="" class="dot dot-1">
              </div>
            </div>
            <p>This scatter plot represents each @horse_js tweet as a dot. The day the tweet occured is plotted on the y-axis. The time it occured is plotted on the x-axis.</p><p>We we see here is a period of time each day where @horse_js is inactive. <strong>This is likely when they are asleep</strong>. From this we can discern which time zone @horse_js might live in.</p>
          </div>
        </div>
        <div class="row center-xs content-extends">
          <div class="col-xs">
            <horse-tweets></horse-tweets>
          </div>
        </div>
        <div class="row center-xs">
          <div class="col-xs conclusion">
            <div class="row start-xs">
              <div class="col-xs">
                <img src="../../assets/blue-oval.svg"  class="dot dot-2" alt="">
              </div>
            </div>
            <img src="../../assets/attention.svg" alt="">
            <h1>Conclusion</h1>
            <p>@horse_js lives in either the Central or Eastern time zone</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HorseTweets from '../charts/HorseTweets.vue'

  export default {
    components: {
      HorseTweets
    }
  }
</script>

<style scoped>
.dot-1 {

}

.dot-2 {
  position: absolute;
  margin-left: -200px;
}
</style>
