<template>
  <div id="app">
    <app-header :released="isReleased"></app-header>
  <div v-if="isReleased">
    <app-observations></app-observations>
    <app-question></app-question>
    <app-how></app-how>
    <app-first-discovery></app-first-discovery>
    <app-tools></app-tools>
    <app-analysis></app-analysis>
    <app-horsplain></app-horsplain>
    <app-original-tweets></app-original-tweets>
    <app-most-tweeted></app-most-tweeted>
    <app-major-assumption></app-major-assumption>
    <app-locations></app-locations>
    <app-machine-learning></app-machine-learning>
    <app-sources></app-sources>
    <app-review></app-review>
    <app-buffer></app-buffer>
    <div class="show-reveal" :class="{ reveal: !hasConsent, show: hasConsent }">
      <app-reveal></app-reveal>
      <app-notes></app-notes>
      <app-final></app-final>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import EventBus from "./EventBus.js";

import AppHeader from "./components/sections/App-Header";
import AppObservations from "./components/sections/App-Observations";
import AppQuestion from "./components/sections/App-Question";
import AppHow from "./components/sections/App-How";
import AppFirstDiscovery from "./components/sections/App-FirstDiscovery";
import AppTools from "./components/sections/App-Tools";
import AppAnalysis from "./components/sections/App-Analysis";
import AppHorsplain from "./components/sections/App-Horsplain";
import AppOriginalTweets from "./components/sections/App-OriginalTweets";
import AppMostTweeted from "./components/sections/App-MostTweeted";
import AppMajorAssumption from "./components/sections/App-MajorAssumption";
import AppLocations from "./components/sections/App-Locations";
import AppMachineLearning from "./components/sections/App-MachineLearning";
import AppSources from "./components/sections/App-Sources.vue";
import AppReview from "./components/sections/App-Review.vue";
import AppBuffer from "./components/sections/App-Buffer.vue";
import AppReveal from "./components/sections/App-Reveal.vue";
import AppNotes from "./components/sections/App-Notes.vue";
import AppFinal from "./components/sections/App-Final.vue";

const ROOT = "https://horsetweets.azurewebsites.net/api";

export default {
  name: "app",
  components: {
    AppHeader,
    AppObservations,
    AppQuestion,
    AppHow,
    AppFirstDiscovery,
    AppTools,
    AppAnalysis,
    AppHorsplain,
    AppOriginalTweets,
    AppMostTweeted,
    AppMajorAssumption,
    AppLocations,
    AppMachineLearning,
    AppSources,
    AppReview,
    AppBuffer,
    AppReveal,
    AppNotes,
    AppFinal
  },
  data() {
    return {
      isReleased: true,
      hasConsent: false,
      options: {
        anchors: [
          "header",
          "observations",
          "question",
          "how",
          "menu",
          "analysis",
          "horsplain",
          "original"
        ]
      }
    };
  },
  mounted() {
    const API = "https://horsetweets.azurewebsites.net/api";

    axios.get(`${API}/GetTimeSeries`).then(response => {
      EventBus.$emit("/timeseries/data", response.data);
    });

    axios.get(`${API}/GetMostTweeted`).then(response => {
      EventBus.$emit("/mosttweeted/data", response.data);
    });

    EventBus.$on("showMe", () => {
      this.hasConsent = true;
      setTimeout(function() {
        const showMe = document.getElementById("showMe");
        showMe.scrollIntoView();
      }, 500);
    });
  }
};
</script>

<style lang="scss">
@import "~flexboxgrid/css/flexboxgrid.css";

@font-face {
  font-family: CerebriSans;
  src: url("./assets/fonts/CerebriSans/CerebriSans-Light.otf")
    format("opentype");
  font-style: normal;
  font-weight: normal;
}

html,
body {
  padding: 0;
  margin: 0;
}

.show-reveal {
  transition: opacity 5s;
}

.show {
  display: inherit;
  opacity: 1;
}

.reveal {
  display: none;
  opacity: 0;
  transition: opacity 5s;
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

.flex {
  display: flex;
  &.is-vertically-centered {
    align-items: center;
  }
  &.is-horizontally-centered {
    justify-content: center;
  }
  &.flex-column {
    flex-direction: column;
  }
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

.slide {
  display: flex;
  align-items: center;
  justify-content: center;
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
  background-color: RGBA(104, 161, 236, 1);
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
  font: normal normal 14px/1.4 Helvetica, Roboto, "Segoe UI", Calibri,
    sans-serif;
  .tweet-header {
    .tweet-author {
      font-size: 13px;
      color: #6f7888;
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

blockquote {
  border-left: none;
  padding-left: 20px;
  padding-right: 20px;
}

.quote-badge {
  background-color: rgba(0, 0, 0, 0.2);
}

.quote-box {
  overflow: hidden;
  margin-top: -50px;
  padding-top: -100px;
  border-radius: 17px;
  background-color: white;
  margin-top: 25px;
  box-shadow: 2px 2px 2px 2px #e0e0e0;
  text-align: left;
}

.quotation-mark {
  font-family: "Times New Roman", Georgia, Serif;
  margin-top: -10px;
  font-weight: bold;
  font-size: 100px;
}

.quote-text {
  font-size: 19px;
  margin-top: -150px;
}

a {
  color: #fd69a9;
}

.chart-space {
  height: 500px;
}
</style>
