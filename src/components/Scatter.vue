<template>
  <div>
    <div>
      <canvas id="full-scatter"></canvas>
    </div>
    <div class="wrapper">
      <div class="box">
        <canvas id="scoped-scatter"></canvas>
      </div>
      <div class="box">
        <div id="tweet"></div>
        <div>
          <blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">{{ horseTweet.text }}</p>&mdash; {{ horseTweet.user.name }} ({{ horseTweet.user.screen_name }}) <a :href="'https://twitter.com/' + horseTweet.screen_name + '/status/' + horseTweet.id ">{{ horseTweet.created_at }}</a></blockquote>
          <blockquote class="twitter-tweet" data-cards="hidden" data-lang="en"><p lang="en" dir="ltr">{{ originalTweet.text }}</p>&mdash; {{ originalTweet.user.name }} ({{ originalTweet.user.screen_name }}) <a :href="'https://twitter.com/' + originalTweet.screen_name + '/status/' + originalTweet.id ">{{ originalTweet.created_at }}</a></blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Chart from "chart.js";

const offset = -7;

export default {
  data() {
    return {
      horseTweet: {
        text: "",
        user: {},
        created_at: "",
        id: ""
      },
      originalTweet: {
        text: "",
        user: {},
        created_at: "",
        id: ""
      }
    };
  },
  created() {
    let url = 'https://horsetweets.azurewebsites.net/api/GetTimeSeries';
    axios.get(url).then(result => {
      const scatterData = {
        horse: [],
        original: []
      };

      const scopedScatterData = {
        horse: [],
        original: []
      };

      const horseData = result.data.forEach(item => {

        // only get tweets with a source
        if (item.original) {
          item.horse.created_at = moment(item.horse.created_at).add(offset, 'hours');
          item.original.created_at = moment(item.original.created_at).add(offset, 'hours');

          // push all scatter data
          this.pushScatterData(scatterData, item);

          // scope the data to tweets that happen within 5 minutes of each other
          let dif = moment
            .duration(item.horse.created_at.diff(item.original.created_at))
            .asMinutes();
          if (dif < 5) {
            this.pushScatterData(scopedScatterData, item);
          }

        }
      });

      // create all the charts
      this.createScatter(scatterData, scopedScatterData);
    });
  },
  methods: {
    pushScatterData(container, item) {
      container.horse.push(this.mapItem(item.horse, item.original));
      container.original.push(this.mapItem(item.original, item.horse));
    },
    mapItem(tweet, related) {
      return {
        x: tweet.created_at,
        y: `${tweet.created_at.hour()}${tweet.created_at.minute()}`,
        tweet: tweet,
        related: related
      };
    },
    createScatter(fullScatterData, scopedScatterData) {
      let vue = this;

      const options = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var label =
                data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].tweet
                  .text;
              return label;
            }
          }
        },
        scales: {
          xAxes: [
            {
              type: "time"
            }
          ]
        },
        onClick: function(event, item) {
          // get the item from the data set
          if (item[0]) {
            let dataset = item[0]._chart.config.data.datasets[item[0]._datasetIndex];
            let index = item[0]._index;

            let dataItem = dataset.data[index];

            if (dataItem) {
              vue.horseTweet = dataItem.tweet;
              vue.originalTweet = dataItem.related;
            }

            twttr.widgets.load();
          }
        }
      };

      const fullScatterEl = document.getElementById("full-scatter");
      new Chart(fullScatterEl, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "@horse_js",
              data: fullScatterData.horse,
              pointBackgroundColor: "rgba(224, 0, 120, 0.3)",
              pointRadius: 10
            },
            {
              label: "Original Tweet",
              data: fullScatterData.original,
              pointBackgroundColor: "rgba(134, 171, 208, 0.42)",
              pointRadius: 10
            }
          ]
        },
        options: options
      });

      const scopedScatterEl = document.getElementById("scoped-scatter");
      new Chart(scopedScatterEl, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "@horse_js",
              data: scopedScatterData.horse,
              pointBackgroundColor: "rgba(224, 0, 120, 0.3)",
              pointRadius: 10
            },
            {
              label: "Original Tweet",
              data: scopedScatterData.original,
              pointBackgroundColor: "rgba(134, 171, 208, 0.42)",
              pointRadius: 10
            }
          ]
        },
        options: options
      });
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 50% auto;
  grid-gap: 10px;
  background-color: #fff;
  color: #444;
}

.box {
  border-radius: 5px;
  padding: 20px;
}
</style>
