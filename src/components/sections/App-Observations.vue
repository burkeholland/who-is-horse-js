<template>
  <div v-height class="slide">
    <div class="page row middle-xs center-xs">
      <div class="col-xs-12 content">
        <div class="row center-xs">
          <div class="col-xs-12">
            <h1 class="title">What can Machine Learning REALLY do?</h1>
            <div class="row">
              <div class="col-xs-1 left">
                <img src="../../assets/blue-triangle.svg" alt="" class="dot dot-1">
              </div>
              <div class="col-xs-11 right">
                <img src="../../assets/orange-oval.svg" class="dot dot-2" alt="">
              </div>
            </div>
            <div class="body-content">
              <p>While attending a Machine Learning class, we (<a href="https://twitter.com/burkeholland">Burke Holland</a> and <a href="https://twitter.com/paladique">Jasmine Greenaway</A>) learned about statistical models and how computers use them to "learn" and ultimately make predictions.</p><p>We wondered if it was possible to use this technology to do something really hard - like figuring out who in the heck @horse_js really is.</p>
              <p>What follows is our stumble into the world of statistics and data science, and what we learned along the way.</p>
            </div>
          </div>
          <div class="row middle-xs">
            <div class="col-xs">
              <img class="profile" src="../../assets/jasmine.png" alt="" width="240" height="240" >
            </div>
            <div class="col-xs">
              <img src="../../assets/green-x.svg" alt="" width="22" height="22">
            </div>
            <div class="col-xs">
              <img class="profile" src="../../assets/burke.png" alt="" width="240" height="240" >
            </div>
          </div>
          <div class="row middle-xs">
            <div class="col-xs">
              <div class="profile-name">Jasmine Greenaway</div>
            </div>
            <div class="col-xs" style="width: 22px;"></div>
            <div class="col-xs">
              <div class="profile-name">Burke Holland</div>
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

.profile-name {
  width: 240px;
  text-align: center;
}
</style>
