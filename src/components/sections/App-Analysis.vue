<template>
  <div>
    <img src="../../assets/pink-x.svg" alt="" class="dot dot-1">
    <img src="../../assets/blue-oval.svg"  class="dot dot-2" alt="">
    <div class="content">
      <div class="row center-xs">
        <div class="col-xs-12">
          <h1>Time Series Analysis</h1>
          <p>With our data, we performed a "Time Series Analysis", which looks at @horse_js's activity over a period of time. We saw that there is a period of time where @horse_js is inactive, and probably asleep. All times below are CST (-6).</p>
        </div>
      </div>
    </div>
    <div class="outer-content">
      <horse-tweets></horse-tweets>
    </div>
    <div class="content">
      <div class="row center-xs">
          <div class="col-xs conclusion">
            <img src="../../assets/attention.svg" alt="">
            <h1>Conclusion</h1>
            <p>@horse_js lives in either the Central or Eastern time zone</p>
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
.conclusion > h1 {
  margin-left: -20px;
  display: inline;
}

.dot-1 {
  position: absolute;
  right: 150px;
  top: 100px;
}

.dot-2 {
  position: absolute;
  bottom: 150px;
  left: 200px;
}
</style>
