<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs middle-xs">
          <div class="col-xs-12">
            <h1 class="title">The Smoking Gun</h1>
            <div class="row start-xs">
              <div class="col-xs">
                <img src="../../assets/orange-triangle.svg" class="dot dot-1" alt>
              </div>
            </div>
            <p>
              At this point we felt like all signs were pointing
              <b>strongly</b> to one person. But we still didn't have anything that we felt really sealed the deal. Then we found the smoking gun.
            </p>
            <p>Twitter always records the source of a tweet. It could be the web, iOS or Android or third party app. If we take a look at all of @horse_js's tweets, they always originate from one of two sources.</p>
          </div>
        </div>
        <div class="row center-xs content-extends">
          <div class="col-xs-12">
            <chart-sources class="move"></chart-sources>
          </div>
        </div>
        <div class="row center-xs">
          <div class="col-xs conclusion">
            <img src="../../assets/attention.svg" alt>
            <h1>Conclusion</h1>
            <p>
              @horse_js
              <b>uses Android</b>. This is paticularly damning piece of evidence because of all our suspects, only one uses Android and it's the same one we've been suspecting thus far.
            </p>
            <p>This also tells us that @horse_js is likely just one person. If it was multiple people, we would expect to see a different source (like iPhone) in there somewhere.</p>
          </div>
        </div>
        <div class="row center-xs content-extends">
          <div class="col-xs-12">
            <div class="row end-xs">
              <div class="col-xs">
                <img src="../../assets/green-squiggly.svg" class="dot dot-2" alt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartSources from "../charts/Chart-Sources.vue";

export default {
  components: {
    ChartSources
  }
};
</script>

<style>
.dot-1 {
  margin-left: -200px;
}

.dot-2 {
  margin-right: -200px;
}

.move {
  margin-left: 50px;
}

/* .bottom {
  position: absolute;
  bottom: 20px;
  width: 100%;
} */
</style>
