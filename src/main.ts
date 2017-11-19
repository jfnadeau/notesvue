import { App } from './components/app/app';
import Vue from "vue"
import Store from "./store/root";

new Vue({
  el: '#app',
  store: Store,
  components: {
    App
  },
  render: h => h('app')
});