<template>
  <div id="app">
    <app-header></app-header>
    <app-observations></app-observations>
    <app-question></app-question>
    <app-how></app-how>
    <app-first-discovery></app-first-discovery>
    <app-tools></app-tools>
    <app-analysis></app-analysis>
    <app-horsplain></app-horsplain>
    <app-original-tweets></app-original-tweets>


    <!-- <div class="row">
      <div class="col-xs-12">
        <Header></Header>
      </div>
    </div>
    <section class="section">
      <div class="sectioncontain">
        <div class="half">
          <h1 class="section-title">Question</h1>
          <p>Is it possible to determine the true identity of an anonymous Twitter account?</p>
          <p>@horse_js is a parody twitter account that tweets fragments of other people's tweets. It's been doing this since February 2012. Since then it has tweeted more than 7K times.</p>
        </div>
        <div class="half">
          <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">anyone know how to prevent webpack --watch from taking all my cpu?</p>&mdash; Ben Vinegar (@bentlegen) <a href="https://twitter.com/bentlegen/status/713438034272722944?ref_src=twsrc%5Etfw">March 25, 2016</a></blockquote>
          <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">anyone know how to prevent webpack</p>&mdash; Horse JS (@horse_js) <a href="https://twitter.com/horse_js/status/713454232913846272?ref_src=twsrc%5Etfw">March 25, 2016</a></blockquote>
        </div>
      </div>
    </section>
    <section class="section alternate">
      <div class="sectioncontain">
        <div class="full">
          <h1 class="section-title">Hypothesis</h1>
          <p></p>
          <p>Machine Learning can predict the identity of @horse_js by analyzing patterns in Twitter data.</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="sectioncontain">
        <div class="full">
          <h1 class="section-title">Experiment</h1>
          <div class="section-body">
            <p>
              The first problem that we had to solve was just how to start. Neither of us had much experience with data science or machine learning. After meeting with some people more knowledgeable than us, we decided to do several statistical evaluations of the Twitter data to try and narrow the field down to a handful of potential suspects.
            </p>
            <h2>Tools We Used</h2>
            <p class="full">
              <img class="logo" src="./assets/functions-logo.svg" alt=""><b>Azure Functions</b> to populate our database on a timer so as not to hit Twitter's rate limits
            </p>
            <p class="full">
              <img src="./assets/cosmos-db.svg" alt="" class="logo"><b>Cosmos DB</b> for our NoSQL database
            </p>
            <p class="full">
              <img src="./assets/cog-services.png" alt="" class="logo"><b>Azure Cognitive Services</b> to analyze text
            </p>
            <p class="full">
              <img src="./assets/twitter.png" class="logo" alt=""><b>twitter package</b> from npm for access to the Twitter API from Node
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="sectioncontain">
        <div class="full">
          <h1 class="section-title">Data Collection</h1>
          <div class="section-body">
            <p>
              The starting point of Project Horse was collecting tweets from the @horse_js account and placing it in a datastore. We asked ourselves a few questions about what we wanted to collect and how to do it:
              <ul>
                <li>How far in time should we go back?</li>
                <li>How often do we want to collect data and when?</li>
                <li>Where should we store this data?</li>
              </ul>
               We created an Azure Functions app to create a time based function that runs on a daily schedule to collect @horse_js's tweets and store them in CosmosDB,using the MongoDB API. We guessed @horse_js and most US based Twitter users would be the least active at 1am EST, which is when the function would collect tweets from the prior day. With a daily task keeping us right on @horse_js's hoofs, we turned our attention to getting @horse_js's older tweets with some backfilling with another timer function. We used HTTP event functions to get data from within CosmosDB for analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section alternate">
      <div class="sectioncontain">
        <div class="full">
          <h1 class="section-title">Time Series Analysis</h1>
          <div class="sectioncontain">
            <div class="half">
              <p>The time series analysis looks at occurrences of an event over a period of time and tries to establish a pattern. In our case, we can look at two different time series patterns...</p>
              <ul>
                <li>@horse_js Tweets</li>
                <li>Original Tweet quoted by @horse_js</li>
              </ul>
              <p>Fortunately, there is a Twitter account called @horseplain_js that references every tweet that @horse_js quotes.</p>
            </div>
            <div class="half center">
              <blockquote class="twitter-tweet" data-lang="en"><p lang="und" dir="ltr"><a href="https://twitter.com/rauschma?ref_src=twsrc%5Etfw">@rauschma</a> <a href="https://t.co/vqHOgIUpb4">https://t.co/vqHOgIUpb4</a></p>&mdash; Horsplain JS (@horsplain_js) <a href="https://twitter.com/horsplain_js/status/1013990302963597312?ref_src=twsrc%5Etfw">July 3, 2018</a></blockquote>
            </div>
          </div>
          <div>
            <p>We used this account and the twitter npm module to fill a Cosmos DB collection using the Mongo DB API. The process consisted of getting all of the @horsesplain tweets, and then using the <code>in_reply_to_status_id_str</code> field in the Twitter response for each tweet to get the @horse_js tweet that matched.</p>
            <horse-tweets></horse-tweets>
            <original-tweets></original-tweets>
            <h2 class="timeseries-highlight">Conclusion: @horse_js is either in Central time or Eastern time.</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="sectioncontain">
        <div class="full">
          <h1 class="section-title">Frequency Analysis</h1>
          <div class="section-body">
            <p>The Frequency Analysis looks at the number of times an event occurs. In our experiment, we looked at who @horse_js quoted most often. The following is a graph of people @horse_js quotes the most.</p>
            <MostTweeted></MostTweeted>
            <p>It's highly likely that @horse_js quotes themselves. It would take a significant level of restraint and commitment to anonymity <b>not</b> to do that, and we are operating under the assumption that "restraint" does not fit the psychological profile for @horse_js. That means that this chart gives us a solid list of suspects.</p>
            <h2 class="frequency-highlight">Conclusion: The real @horse_js is one of the people in the chart above.</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="section alternate">
      <div class="sectioncontain">
        <div class="full">
          <h1 class="section-title">Filtering By Time Zone</h1>
          <div class="sectioncontain">
            <div class="half">
              <p>the next step is to take this list of suspects and rule out anyone who is not in either Central or Eastern time. Twitter provides a <code>timezone</code> field for every user profile, but it's almost always empty. However, they also provide a <code>location</code> field which almost always has a value.</p>
              <p>Notice anything interesting?</p>
              <p>Out of every single person in the suspects group, only 6 are in either Eastern or Central time. Of those six, 5 are in the New York area. This could indicate that the real @horse_js lives in New York. The people that they quote would likely be real life friends and co-workers.</p>
            </div>
            <div class="half">
              <UserLocation></UserLocation>
            </div>
          </div>
          <h2 class="timezone-highlight">Conclusion: The real @horse_js lives in the New York area.</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="sectioncontain">
        <div class="full">
          <h1 class="section-title">Sentiment Analysis</h1>
          <p>At this point we were closing in on a small group of suspects. To gain more understanding about what might trigger @horse_js to tweet, we used Azure Cognitive Services to run a sentiment analysis on all of @horse_js tweets.</p>
          <p>Sentiment analysis analyzes text to give it a "sentiment" score. The close to 1 the score is, the more positive the sentiment is. Since @horse_js tweets a lot of nonsense, the sentiment analysis score doesn't do us much good. But the sentiment analysis includes something else that is of interest: <b>key phrases.</b> </p>
          <div class="sectioncontain">
            <div class="half">
              <h2>Key Phrases</h2>
              <p>Key phrases is described by the Text Analytics API in Azure as "key talking points in the input text". Given how silly a lot of what @horse_js tweets is, we weren't sure how effective this would be. But we were pleasantly surprised.</p>
            </div>
            <div class="half">
              <img src="./assets/sentiment.png" alt="">
            </div>
          </div>
          <div class="sectioncont">
            <div class="full">
              <most-used-phrases></most-used-phrases>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section alternate">
      <div class="sectioncontain">
        <div class="full">
          <h1 class="section-title">Sources</h1>
          <p>The most damning piece of evidence came early on in our investigation. For every tweet, there is a <code>source</code> field that contains the source of the tweet. This is what the user used to post the tweet. It can have a variety of values, but usually centers around "Twitter For Web", "Twitter For Android" and "Twitter for iOS". When we analyzed the past 2 years of @horse_js tweets, the <code>sources</code> held an interesting insight.</p>
          <sources></sources>
          <p>This tells us that @horse_js is an Android user. It also tells us that @horse_js is one person. There are not multiple people posting as @horse_js. This ended up being a crucial piece of evidence since in the end, all we had to do was check the <code>sources</code> of all our suspects.</p>
          <p>
            As it turns out, only one of our suspects uses Android.
          </p>
          <h2 class="sources-highlight">Conclusion: @horse_js uses Android</h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="sectioncontain">
        <div class="full">
          <h1 class="section-title">Results</h1>
        </div>
      </div>
      <div class="sectioncontain">
        <div class="full">
          <p>
            The information that we have is loose, but it is enough to point us in the direction of @horse_js. To protect their anonymity, we are not going to name them here. Although it should be relatively easy for you to draw that line yourself based on the data we've laid out here.
          </p>
          <p>We realize that is going to be disappointing for some people, but we want to preserve the fun of @horse_js. After all, most of the novelty of a parody account is not knowing who it really is.</p>

        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import axios from 'axios';

// import OriginalTweets from './components/OriginalTweets.vue';
// import MostTweeted from './components/MostTweeted.vue';
// import UserLocation from './components/UserLocation.vue';
// import MostUsedPhrases from './components/MostUsedPhrases';
// import Sources from './components/Sources';

import AppHeader from './components/sections/App-Header';
import AppObservations from './components/sections/App-Observations';
import AppQuestion from './components/sections/App-Question';
import AppHow from './components/sections/App-How';
import AppFirstDiscovery from './components/sections/App-FirstDiscovery';
import AppTools from './components/sections/App-Tools';
import AppAnalysis from './components/sections/App-Analysis';
import AppHorsplain from './components/sections/App-Horsplain';
import AppOriginalTweets from './components/sections/App-OriginalTweets';

const ROOT = 'https://horsetweets.azurewebsites.net/api';

export default {
  name: 'app',
  components: {
    // OriginalTweets,
    // MostTweeted,
    // UserLocation,
    // MostUsedPhrases,
    // Sources,
    AppHeader,
    AppObservations,
    AppQuestion,
    AppHow,
    AppFirstDiscovery,
    AppTools,
    AppAnalysis,
    AppHorsplain,
    AppOriginalTweets
  },
  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors: [ 'header', 'observations', 'question', 'how', 'menu', 'analysis', 'horsplain', 'original' ]
      }
    }
  },
  methods: {
    afterLoad() {
      debugger;
    }
  }
};
</script>

<style lang="scss">
@import "~flexboxgrid/css/flexboxgrid.css";

@font-face {
  font-family: CerebriSans;
  src: url('./assets/fonts/CerebriSans/CerebriSans-Light.otf') format('opentype');
  font-style: normal;
  font-weight: normal;
}

html,
body {
  padding: 0;
  margin: 0;
}

body {
  background-color: #f5eeec;
}

#app {
  font-family: CerebriSans, Arial, sans-serif;
  color: #484848;
  font-size: 22px;
  font-weight: normal;
  font-weight: 300;
  max-width: 1150px;
  margin: auto;
}

.right {
  text-align: right;
}

.left {
  text-align: left;
}

.center {
  text-align: center;
}

.conclusion > h1 {
  margin-left: -20px;
  display: inline;
}

img {
  max-width: 100%;
  height: auto;
}

.page {
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
}

.content {
  max-width: 750px;
}

.content-extends {
  margin-left: -155px;
  margin-right: -155px;
}

.title {
  font-size: 48px;
  font-weight: 500;
}

.subtitle {
  font-size: 28px;
  font-weight: normal;
}

.col-xs {
  margin: 0;
  padding: 0;
}

.half {
  width: 50%;
  margin: 10px;
}

.full {
  width: 100%;
}

.center {
  text-align: center;
  margin: auto;
}

.text-center {
  text-align: center;
}

.sectioncontain {
  max-width: 1200px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: top;
  -ms-flex-align: top;
  align-items: top;
  margin: 0px auto 20px;
}

section {
  width: 100vw;
  padding: 40px;
}

.timeseries-highlight {
  padding: 5px;
  background-color: #9f3a65;
}

.frequency-highlight {
  padding: 5px;
  background-color: RGBA(104, 161, 236, 1.00);
}

.timezone-highlight {
  padding: 5px;
  background-color: rgba(134, 171, 208, 0.42);
}

.sources-highlight {
  padding: 5px;
  background-color: rgba(138, 70, 99, 1);
}

.alternate {
  background-color: #414141;
}

.twitter-avatar {
  border-radius: 50%;
  max-width: 100%;
  max-height: 100%;
}

.d3-tip {
  line-height: 1;
  font-weight: bold;
  padding: 12px;
  background: #fff;
  color: #333;
  border-radius: 5px;
  transition: opacity 0.2s ease-in-out;
  max-width: 400px;
}

/* Creates a small triangle extender for the tooltip */
.d3-tip:after {
  width: 100%;
  box-sizing: border-box;
  display: inline;
  font-size: 10px;
  line-height: 1;
  color: #fff;
  content: "\25BC";
  position: absolute;
  text-align: center;
}

/* Style northward tooltips specifically */
.d3-tip.n:after {
  margin: -2px 0 0 0;
  top: 100%;
  left: 0;
}

.d3-tip span {
  transition: scale 0.2s ease;
}

.tweet {
  font: normal normal 14px/1.4 Helvetica,Roboto,"Segoe UI",Calibri,sans-serif;
  .tweet-header {
    .tweet-author {
      font-size: 13px;
      color: #6F7888;
    }
  }
  .tweet-body {
    margin-top: 14px;
  }
  time {
    font-size: 14px;
    color: #697888;
  }
}

.chart {
  overflow: visible;
}

blockquote{
  border-left:none;
  padding-left: 20px;
  padding-right: 20px;
}

.quote-badge{
    background-color: rgba(0, 0, 0, 0.2);
}

.quote-box{
  overflow: hidden;
  margin-top: -50px;
  padding-top: -100px;
  border-radius: 17px;
  background-color: white;
  margin-top: 25px;
  box-shadow: 2px 2px 2px 2px #E0E0E0;
  text-align: left;
}

.quotation-mark{
  font-family: "Times New Roman", Georgia, Serif;
  margin-top: -10px;
  font-weight: bold;
  font-size:100px;
}

.quote-text{
  font-size: 19px;
  margin-top: -150px;
}
</style>
