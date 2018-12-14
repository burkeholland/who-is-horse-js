<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs">
            <h1>Most Quoted People</h1>
            <div class="row end-xs">
              <div class="col-xs">
                <img src="../../assets/pink-x.svg" alt class="dot dot-1">
              </div>
            </div>
            <p>This lead us to believe that if we looked at who @horse_js quotes most often, we could examine common followers of all of these accounts and that would leave us with a pool of possible suspects. Here is a chart of all the people that @horse_js quoted more than 5 times in the past two years.</p>
          </div>
        </div>
        <div class="row center-xs content-extends">
          <div class="col-xs">
            <chart-most-tweeted class="move"></chart-most-tweeted>
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
              When we compared the common followers of all of these accounts,
              <b>all we found were a few spam bots.</b> Sometimes you chase down a dead end.
            </p>
            <p>But what else does this chart tell us? There are some people that @horse_js likes to quote frequently. And one that it REALLY loves to quote.</p>
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
