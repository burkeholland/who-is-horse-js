<template>
  <div id="app">
    <Header></Header>
    <section class="section">
      <div class="full">
        <h1 class="section-title">What is this?</h1>
      </div>
      <div class="sectioncontain">
      <div class="half">
        <p class="section-body">While sitting in a Machine Learning class, not paying attention, we (Burke Holland and Jasmine Greenaway) wondered if we could use Machine Learning to do some real good in the world. I mean, it's cool and all that a computer can recognize a picture of Ed Sheeran, but we wanted to solve the important problems.</p>
        <p>Problems like figuring out who runs the @horse_js twitter account.</p>
        <p>What follows is our stumble into the world of stastics and data science, and what we learned along the way.</p>
      </div>
      <div class="half">
        <div class="sectioncontain">
          <div class="half">
            <img src="./assets/jasmine.jpg" class="profile" alt="" width="200" height="200">
          </div>
          <div class="half">
            <img src="./assets/burke.jpg" class="profile" alt="" width="200" height="200">
          </div>
        </div>
      </div>
      </div>
    </section>
    <section class="section">
      <div class="full">
          <h1 class="section-title">Who is @horse_js</h1>
          <p class="section-body">@horse_js is a parody twitter account that tweets fragments of other people's tweets. It's been doing this since February 2012. Since then it has tweeted more than 7K times.</p>
        </div>
      <div class="sectioncontain">
        <div class="half">
          <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">So often when someone bashes JavaScript, they mistakenly think that JS programmers are not aware of its faults.</p>&mdash; Axel Rauschmayer (@rauschma) <a href="https://twitter.com/rauschma/status/1013897908716961792?ref_src=twsrc%5Etfw">July 2, 2018</a></blockquote>
        </div>
        <div class="half">
          <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">when someone bashes JavaScript, they mistakenly think that</p>&mdash; Horse JS (@horse_js) <a href="https://twitter.com/horse_js/status/1013989099638874116?ref_src=twsrc%5Etfw">July 3, 2018</a></blockquote>
        </div>
      </div>
      <div class="sectioncontain">
        <div class="full">
          <h1 class="section-title">Where do we start?</h1>
          <div class="section-body">
            <p>
              The first problem that we had to solve was just how to start. Neither of us had much experience with data science or machine learning. After meeting with some people more knowledgable than us, we decided to do several statistical evaluations of the Twitter data to try and narrow the field down to a handful of potential suspects.
            </p>
            <h2>Tools We Used</h2>
            <p>These are the tools we used on this project:</p>
            <ul>
              <li>Cosmos DB For The Database</li>
              <li>Azure Functions to populate our database on a timer so as not to hit Twitter's rate limits</li>
              <li>Azure Cognitive Services Sentiment Analysis</li>
              <li>The twitter npm package</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="section-contain">
        <div class="full">
          <h1 class="section-title">Our Analysis</h1>
        </div>
        <div class="section-body">
          <h3>Time Series Analysis</h3>
            <p>The time series analysis looks at occurances of an event over a period of time and tries to establish a pattern. In our case, we can look at two different time series patterns...</p>
            <ul>
              <li>@horse_js Tweets</li>
              <li>Original Tweet quoted by @horse_js</li>
            </ul>
            <p>Fortunately, there is a Twitter account called @horseplain_js that references every tweet that @horse_js quotes. We used this account and the twitter npm module to fill a Cosmos DB collection using the Mongo DB API. The process consisted of getting all of the @horsesplain tweets, and then using the <code>in_reply_to_status_id_str</code> field in the Twitter response for each tweet to get the @horse_js tweet that matched.</p>
            <TimeSeries></TimeSeries>
            <p>There are not very many of these. We can cross-reference the followers for all of these individuals to see if there are any that they have in common as a group.</p>
        </div>
      </div>
    </section>
    <MostTweeted></MostTweeted>
  </div>
</template>

<script>
import TimeSeries from './components/TimeSeries.vue';
import MostTweeted from './components/MostTweeted.vue';
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    TimeSeries,
    MostTweeted,
    Header
  }
}
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

body {
  background-color: #333333;
  font-size: 18px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

.half {
  width: 50%;
}

.full {
  width: 100%;
}

.center {
  text-align: center;
}

.title {
  font-size: 5em;
}

.sectioncontain {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
}

.section {
  max-width: 1200px;
  margin: 80px auto 20px;
}

.section-title {
  font-size: 3em;
  margin-bottom: 0;
}

.profile {
  border-radius: 50%;
}
</style>
