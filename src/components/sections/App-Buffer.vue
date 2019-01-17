<template>
  <div>
    <div v-height class="slide">
      <div class="page row middle-xs center-xs">
        <div class="col-xs-12 content">
          <div class="row center-xs">
            <div class="col-xs">
              <h3>Keep scrolling...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-height class="slide">
      <div class="page row middle-xs center-xs">
        <div class="col-xs-12 content">
          <div class="row center-xs">
            <div class="col-xs">
              <h3>Almost there...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-height class="slide">
      <div class="page row middle-xs center-xs">
        <div class="col-xs-12 content">
          <div class="row center-xs">
            <div class="col-xs">
              <h3>Just one scroll more...</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-height class="slide">
      <div class="page row middle-xs center-xs">
        <div class="col-xs-12 content">
          <div class="row center-xs">
            <div class="col-xs">
              <h1>Sorry - one more thing</h1>
              <p>This project was done in good fun. It is a game of cat and mouse played amongst consenting members of the JavaScript community. We got permission from our suspect before we released this site and they have allowed to use their name and release the data that we had about them.</p>
              <p>Privacy is paramount. We do not condone the use of data science or machine learning for the purpose of releasing someone's identity against their will. By clicking the button below, you agree that you are viewing this information only because this person has agreed to participate in this project and has consented to you seeing this information.</p>
              <button @click="showMe()">I understand and I am ok with seeing this info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartMostTweeted from "../charts/Chart-MostTweeted.vue";
import EventBus from "../../EventBus.js";

export default {
  components: {
    ChartMostTweeted
  },
  methods: {
    showMe() {
      EventBus.$emit("showMe");
    }
  }
};
</script>

<style scoped>
button {
  height: 3.75em;
  border-radius: 4px;
  font-size: 1.25rem;
  line-height: 1.5;
  border: 1px solid transparent;
  padding-left: 0.75em;
  padding-right: 0.75em;
  background: inherit;
  cursor: pointer;
  background-color: #1cabe9;
  color: white;
}

.move {
  margin-left: 50px;
}

.dot {
}

.dot-1 {
  margin-right: -200px;
}

.dot-2 {
  margin-left: -200px;
}
</style>
