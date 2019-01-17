<template>
  <div v-height class="slide">
    <div class="page row center-xs middle-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs-12">
            <h1 class="title">Question</h1>
            <div class="row start-xs">
              <div class="col-xs">
                <img src="../../assets/orange-triangle.svg" class="dot dot-1" alt>
              </div>
            </div>
            <p>
              <b>Is it possible to determine the true identity of a Twitter account using Twitter data and Machine Learning?</b>
            </p>
            <p>@horse_js is a twitter parody account that tweets fragments of other people's tweets or blog posts. It first came online in February, 2012. Since then it has tweeted more than 7K times.</p>
          </div>
        </div>
        <div class="row center-xs content-extends">
          <div class="col-xs-12">
            <div class="row end-xs">
              <div class="col-xs">
                <img src="../../assets/green-squiggly.svg" class="dot dot-2" alt>
              </div>
            </div>
            <div class="original-tweet tweet">
              <blockquote class="twitter-tweet" data-lang="en">
                <p
                  lang="en"
                  dir="ltr"
                >anyone know how to prevent webpack --watch from taking all my cpu?</p>&mdash; Ben Vinegar (@bentlegen)
                <a
                  href="https://twitter.com/bentlegen/status/713438034272722944?ref_src=twsrc%5Etfw"
                >March 25, 2016</a>
              </blockquote>
            </div>
            <div class="horse-tweet tweet">
              <blockquote class="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">anyone know how to prevent webpack</p>&mdash; Horse JS (@horse_js)
                <a
                  href="https://twitter.com/horse_js/status/713454232913846272?ref_src=twsrc%5Etfw"
                >March 25, 2016</a>
              </blockquote>
            </div>
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
  margin-left: -200px;
}

.dot-2 {
  position: absolute;
  margin-top: 75px;
}

@media screen and (max-width: 970px) {
  .tweet {
    width: 400px;
    margin: auto;
  }
}

@media screen and (min-width: 970px) {
  .horse-tweet {
    margin-left: 450px;
    margin-top: -75px;
  }
}
</style>
