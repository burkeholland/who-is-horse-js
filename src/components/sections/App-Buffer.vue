<template>
  <div>
    <div v-height class="slide">
      <div class="page row middle-xs center-xs">
        <div class="col-xs-12 content">
          <div class="row center-xs">
            <div class="col-xs">
              <h3>Keep scrolling...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-height class="slide">
      <div class="page row middle-xs center-xs">
        <div class="col-xs-12 content">
          <div class="row center-xs">
            <div class="col-xs">
              <h3>Almost there...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-height class="slide">
      <div class="page row middle-xs center-xs">
        <div class="col-xs-12 content">
          <div class="row center-xs">
            <div class="col-xs">
              <h3>Just one scroll more...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-height class="slide">
      <div class="page row middle-xs center-xs">
        <div class="col-xs-12 content">
          <div class="row center-xs">
            <div class="col-xs">
              <h1>STOP</h1>
              <p>Are you sure you really want to know? Wouldn't it be better if the mystery remained a mystery?</p>
              <p>This is your last chance to preserve the magic of @horse_js. One more scroll (we promise this time) and you'll get the answer.</p>
            </div>
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

<style scoped>
.move {
  margin-left: 50px;
}

.dot {
}

.dot-1 {
  margin-right: -200px;
}

.dot-2 {
  margin-left: -200px;
}
</style>
