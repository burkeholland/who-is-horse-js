<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs-12">
            <h1 class="title">What can Machine Learning REALLY do?</h1>
            <div class="row">
              <div class="col-xs-1 left">
                <img src="../../assets/blue-triangle.svg" alt class="dot dot-1">
              </div>
              <div class="col-xs-11 right">
                <img src="../../assets/orange-oval.svg" class="dot dot-2" alt>
              </div>
            </div>
            <div class="body-content">
              <p>
                While attending a Machine Learning class, we (
                <a
                  href="https://twitter.com/burkeholland"
                >Burke Holland</a> and
                <a href="https://twitter.com/paladique">Jasmine Greenaway</a>) learned about how Machine Learning can takes massive amounts of data and make predictions.
              </p>
              <p>We wondered if it was possible to use this technology to do something really hard. Something that involved sifting through a LOT of data.</p>
              <p>What follows is our stumble into the world of statistics and data science, and what we learned along the way.</p>
            </div>
          </div>
          <div class="flex is-horizontally-centered">
            <div class="flex flex-column is-horizontally-centered">
              <img src="../../assets/jasmine.png" alt width="200" height="200">
              <div>Jasmine Greenaway</div>
            </div>
            <img class="separator" src="../../assets/green-x.svg" alt width="22" height="22">
            <div class="flex flex-column is-horizontally-centered">
              <img src="../../assets/burke.png" alt width="200" height="200">
              <div>Burke Holland</div>
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
  margin-right: -200px;
}

.separator {
  margin: 70px 25px 0px 25px;
}
</style>
