<template>
  <div>
    <img src="../../assets/orange-plus.svg" class="dot dot-1" alt="">
    <img src="../../assets/blue-oval.svg" class="dot dot-2" alt="">
    <img src="" class="dot-2" alt="">
    <div class="content">
      <div class="row">
        <div class="col-xs-12">
          <h1>Gathering Data With Azure Functions and Cosmos DB</h1>
          <p>We gathered ~2 years worth of @horse_js tweets from the Twitter API. The API is rate limited, so we created a set of Node.js Azure Functions that ran on a timers. These functions would request as many tweets as they could before they were rate limited, wait for the timeout interval specified by the API docs, then resume processing where they left off. Then it would wake up and try again.</p>
          <p>All data was put in a Cosmos DB database utilizing the Mongo DB API.</p>
        </div>
      </div>
    </div>
    <div class="outer-content">
      <div class="row">
        <div class="col-xs-6">
          <div class="box">
            <div class="row middle-xs">
              <div class="col-xs-3">
                <div class="col-xs-12">
                  <img class="logo" src="../../assets/functions-logo.svg" alt="" width="60" height="60" >
                </div>
              </div>
              <div class="col-xs-9">
                <div class="product-description">
                  <h2 class="box-title">Azure Functions</h2>
                  <p class="box-description">Event driven, serverless architecture</p>
                  <p><a href="">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="box">
            <div class="row middle-xs">
              <div class="col-xs-3">
                <div class="col-xs-12">
                  <img class="logo" src="../../assets/cosmos-db.svg" alt="" width="60" height="60" >
                </div>
              </div>
              <div class="col-xs-9">
                <div class="product-description">
                  <h2 class="box-title">Cosmos DB</h2>
                  <p class="box-description">Globally distributed, NoSQL database</p>
                  <p><a href="">Learn more</a></p>
                </div>
              </div>
            </div>
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
.box {
  background-color: white;
  border-radius: 10px;
  padding-top: 40px;
  padding-bottom: 40px;
}

.box-title {
  font-weight: bold;
  font-size: 18px;
}

.box-description {
  font-size: 16px;
}

.product-description {
  margin-left: 20px;
}

.logo {
  padding-left: 20px;
}

.dot-1 {
  position: absolute;
  right: 0;
}

.dot-2 {
  position: absolute;
  top: 650px;
  left: 150px;
}
</style>
