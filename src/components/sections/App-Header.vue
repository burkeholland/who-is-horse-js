<template>
  <div>
    <img src="../../assets/pink-x.svg" alt="" class="dot dot-1">
    <img src="../../assets/blue-oval.svg" alt="" class="dot dot-2">
    <div class="content">
      <div class="row center-xs">
        <div class="col-xs-12">
          <h1 class="title">Who Is @horse_js?</h1>
          <h4 class="subtitle">A data science project to uncover the true identity of the notorious JavaScript parody account</h4>
        </div>
      </div>
      <div class="row center-xs">
        <div class="col-xs-12">
          <img src="../../assets/twitter-header.png" alt="">
        </div>
      </div>
      <div class="row center-xs bottom">
        <div class="col-xs">
          <p>Scroll</p>
          <img src="../../assets/arrow-bottom.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
.dot-1 {
  position: absolute;
  left: 175px;
}

.dot-2 {
  position: absolute;
  right: 50px;
  top: 340px;
}

/* .bottom {
  position: absolute;
  bottom: 20px;
  width: 100%;
} */
</style>
