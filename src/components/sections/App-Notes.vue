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
          <h1>Important Notes</h1>
          <p>This project was done in cooperation with individuals in the community and posted with their permission, including Tom Dale's. Respecting people's privacy is always of the utmost importance, even if the data is already public somewhere else. It's just the nice thing to do.</p>
          <h3>"But I already know who @horse_js is, and it's not Tom!"</h3>
          <p>Perhaps. The data here is not 100% conclusive. There are some critical assumptions holding up our conclusion and Tom has never confirmed (or denied) our findings.</p>
          <p>Perhaps the horse lives to tweet another day...</p>
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
