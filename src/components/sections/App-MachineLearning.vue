<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row start-xs">
          <div class="col-xs">
            <img src="../../assets/pink-x.svg" alt class="dot dot-1">
          </div>
        </div>
        <div class="row center-xs middle-xs">
          <div class="col-xs-12">
            <h1 class="title">Finally. Some Machine Learning.</h1>
            <p>At this point, someone was starting to look like a good candidate to us. But it was all circumstantial. We needed more evidence.</p>
            <p>We ran all of @horse_js tweets from the last 2 years through <a href="https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/?WT.mc_id=whoishorsejs-dotcom-buhollan">Azure Cognitive Services Text Analytics service</a>. This service identifies keywords in phrases.</p>
            <p>Here is a chart of the most used key phrases from 2 years of @horse_js tweets.</p>
          </div>
        </div>
        <div class="row end-xs">
          <div class="col-xs-12">
            <img src="../../assets/blue-oval.svg" alt class="dot dot-2">
          </div>
        </div>
        <div class="row center-xs content-extends">
          <div class="col-xs-12">
            <chart-most-used-phrases></chart-most-used-phrases>
          </div>
        </div>
        <div class="row center-xs">
          <div class="col-xs conclusion">
            <img src="../../assets/attention.svg" alt>
            <h1>Conclusion</h1>
            <p>On it's own, this doesn't tell us anything specific. However, this information will come in useful later as evidence that reinforces our conclusion.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartMostUsedPhrases from "../charts/Chart-MostUsedPhrases.vue";

export default {
  components: {
    ChartMostUsedPhrases
  }
};
</script>

<style scoped>
.dot-1 {
  margin-left: -200px;
}

.dot-2 {
  margin-right: -200px;
}

/* .bottom {
  position: absolute;
  bottom: 20px;
  width: 100%;
} */
</style>
