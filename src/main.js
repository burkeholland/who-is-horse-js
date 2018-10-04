import Vue from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);

const vue = new Vue({
  el: '#app',
  render: h => h(App)
});

window.BingMapReady = function () {
  vue.$root.$emit('/mapready');
}
