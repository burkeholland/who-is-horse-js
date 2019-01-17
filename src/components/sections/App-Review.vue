<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs">
            <h1>Reviewing The Evidence</h1>
            <div class="row start-xs">
              <div class="col-xs-12">
                <img src="../../assets/blue-oval.svg" alt class="dot dot-2">
              </div>
            </div>
            <p>Let's review what our investigation has revealed:</p>
            <div class="row start-xs">
              <div class="col-xs">
                <ul>
                  <li>@horse_js lives in either Central or Eastern Time</li>
                  <li>@horse_js tweets about JavaScript, Webpack and Ember a lot</li>
                  <li>@horse_js is an Android user</li>
                  <li>@horse_js quotes some people far more than others and one of these people fits all the above criteria</li>
                </ul>
              </div>
            </div>
            <p>At this point, we have enough evidence (we think) to determine who @horse_js really is.</p>
            <h2>Are you ready to find out?</h2>
          </div>
        </div>
        <div class="row center-xs bottom">
          <div class="col-xs">
            <p>Scroll</p>
            <img src="../../assets/arrow-bottom.svg" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartMostTweeted from "../charts/Chart-MostTweeted.vue";

export default {
  components: {
    ChartMostTweeted
  }
};
</script>

<style>
</style>
