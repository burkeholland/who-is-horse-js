<template>
  <div>
    <img src="../../assets/pink-x.svg" class="dot dot-1" alt="">
    <img src="../../assets/blue-oval.svg" class="dot dot-2" alt="">
    <div class="content">
      <div class="row">
        <div class="col-xs">
          <h1 class="title">How</h1>
          <p>Not knowing anything about Machine Learning or Statistics, the first question we had to ask ourselves was, "How in the WORLD are we doing to do this?"</p>
          <p>To answer that question, we turned to Dr. Vadim Karpusenko at Microsoft. After explaining what we were trying to do and what our data set was (twitter activity), Dr. Karpusenko told us...</p>
        </div>
      </div>
      <div class="row center-xs">
        <div class="col-xs-11">
          <blockquote class="quote-box">
            <p class="quotation-mark">
              “
            </p>
            <p class="quote-text">
              You don't have a machine learning problem. You have a statistics problem.
            </p>
          </blockquote>
        </div>
        <div class="col-xs-1">
          <img class="vadim" src="../../assets/vadim.png" width="140" height="140" >
        </div>
      </div>
      <div class="row">
        <div class="col-xs">
          <p>Which brings us to the first thing this project taught us: <strong>Machine Learning is not the answer to everything.</strong></p>
          <p>We did use <i>some</i> Machine Learning in this project, but most of the work we did is good old-fashioned data analysis and statistics.</p>
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
  right: 0;
}

.dot-2 {
  position: absolute;
  bottom: 100px;
}

.vadim {
  margin-left: -100px;
}

/* @media screen and (min-width: 750px) {
  .vadim {
    margin-left: -100px;
  }
} */
</style>
