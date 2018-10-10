// Register a global custom directive called `v-focus`
Vue.directive('height', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.height = window.clientHeight;
  }
})
