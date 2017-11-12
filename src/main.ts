import Vue from "vue"
import Test from "./components/test/test"

new Vue({
    el: '#app',
    components: {
      Test
    },
    render : h => h('test')
  });