import Vue from 'vue';
import App from './App.vue';
import VModal from 'vue-js-modal';

// Register a global custom directive called `v-focus`
Vue.directive('height', {
  // When the bound element is inserted into the DOM...
  inserted: function(el) {
    el.style.minHeight = `${window.outerHeight}px`;
  }
});

Vue.use(VModal);

const vue = new Vue({
  el: '#app',
  render: h => h(App)
});

window.BingMapReady = function() {
  vue.$root.$emit('/mapready');
};
