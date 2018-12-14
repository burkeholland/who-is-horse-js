<template>
  <div v-height class="slide">
    <div class="page row center-xs middle-xs">
      <div class="col-xs-12 content">
        <h1>Our First Discovery</h1>
        <p>Which brings us to the first thing this project taught us:
          <strong>Machine Learning is not the answer to everything.</strong>
        </p>
        <p>We did use
          <i>some</i> Machine Learning in this project, but most of the work we did is good old-fashioned data analysis and statistics.
        </p>
        <div class="tweet">
          <blockquote class="twitter-tweet" data-lang="en">
            <p
              lang="en"
              dir="ltr"
            >Half of the time when companies say they need &quot;AI&quot; what they really need is a SELECT clause with GROUP BY.
              <br>
              <br>You&#39;re welcome.
            </p>&mdash; Mat Velloso (@matvelloso)
            <a
              href="https://twitter.com/matvelloso/status/1001899539484192768?ref_src=twsrc%5Etfw"
            >May 30, 2018</a>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tweet {
  max-width: 500px;
  margin: auto;
}
</style>
