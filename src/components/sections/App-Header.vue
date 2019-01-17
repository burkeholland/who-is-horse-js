<template>
  <div class="slide" v-height>
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row start-xs">
          <div class="col-xs">
            <img src="../../assets/pink-x.svg" alt class="dot dot-1">
          </div>
        </div>
        <div class="row center-xs middle-xs">
          <div class="col-xs-12">
            <h1 class="title">Who Is @horse_js?</h1>
            <h4
              class="subtitle"
            >A data science project to uncover the true identity of the notorious JavaScript parody account</h4>
          </div>
        </div>
        <div class="row end-xs">
          <div class="col-xs-12">
            <img src="../../assets/blue-oval.svg" alt class="dot dot-2">
          </div>
        </div>
        <div class="row center-xs">
          <div class="col-xs-12">
            <img src="../../assets/twitter-header.png" alt>
          </div>
        </div>
        <div class="row center-xs bottom">
          <div class="col-xs" v-if="released">
            <p>Scroll</p>
            <img src="../../assets/arrow-bottom.svg" alt>
          </div>
          <div class="col-xs" v-if="!released">
            <p>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['released']
};
</script>

<style scoped>
.dot-1 {
  margin-left: -200px;
}

.dot-2 {
  margin-right: -200px;
}
</style>
