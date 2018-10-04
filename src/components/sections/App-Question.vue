<template>
  <div>
    <img src="../../assets/orange-triangle.svg" class="dot" alt="">
    <img src="../../assets/green-squiggly.svg" class="dot dot-2" alt="">
    <div class="content">
      <div class="row center-xs">
        <div class="col-xs-12">
          <h1 class="title">What is @horse_js?</h1>
          <p>@horse_js is the original JavaScript meme; a parody twitter account that tweets fragments of other people's tweets and blog posts. By tweeting just fragments, the original text takes on an entirely new (and frankly, amazing) meaning.</p>
          <p>@horse_js tweeted for the first time in February, 2012. Since then it has tweeted more than 7K times.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="original-tweet">
            <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">anyone know how to prevent webpack --watch from taking all my cpu?</p>&mdash; Ben Vinegar (@bentlegen) <a href="https://twitter.com/bentlegen/status/713438034272722944?ref_src=twsrc%5Etfw">March 25, 2016</a></blockquote>
          </div>
          <div class="horse-tweet">
            <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">anyone know how to prevent webpack</p>&mdash; Horse JS (@horse_js) <a href="https://twitter.com/horse_js/status/713454232913846272?ref_src=twsrc%5Etfw">March 25, 2016</a></blockquote>
          </div>
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
.original-tweet {
  margin-left: -400px;
}

.horse-tweet {
  margin-top: -60px;
  margin-right: -400px;
}

.dot-2 {
  position: absolute;
  right: 0;
  top: 550px;
}
</style>
