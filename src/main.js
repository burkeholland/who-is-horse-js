import Vue from 'vue'
import App from './App.vue'

// Register a global custom directive called `v-focus`
Vue.directive('height', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    // debugger;
    el.style.height = `${window.outerHeight}px`;
  }
});

const vue = new Vue({
  el: '#app',
  render: h => h(App)
});

window.BingMapReady = function () {
  vue.$root.$emit('/mapready');
}
