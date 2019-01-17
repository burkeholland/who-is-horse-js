<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row end-xs">
          <div class="col-xs">
            <img src="../../assets/pink-x.svg" class="dot dot-1" alt>
          </div>
        </div>
        <div class="row center-xs">
          <h1>The Doctor Is In</h1>
          <p>Not knowing anything about Machine Learning or Statistics, the first question we had to answer was, "<b>How</b> are we doing to do this?"
          </p>
          <p>
            To answer that question, we enlisted the help of
            <a
              href="https://twitter.com/vadi"
            >Dr. Vadim Karpusenko</a> at Microsoft. After explaining what we were trying to do and what our data set was (twitter activity), Vadim told us...
          </p>
        </div>
        <div class="row center-xs">
          <div class="col-xs-12">
            <blockquote class="quote-box">
              <p class="quotation-mark">“</p>
              <p
                class="quote-text"
              >You don't have a machine learning problem. You have a statistics problem.</p>
            </blockquote>
            <img class="vadim" src="../../assets/vadim.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.dot-1 {
  margin-right: -200px;
}

.dot-2 {
  position: absolute;
  bottom: 100px;
}

.vadim {
  margin-top: -40px;
}

/* @media screen and (min-width: 750px) {
  .vadim {
    margin-left: -100px;
  }
} */
</style>
