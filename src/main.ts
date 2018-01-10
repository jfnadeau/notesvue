import "../node_modules/purecss/build/pure.css";

import Vue from "vue";

import { App } from "./components/app/app";
import Store from "./store/root";

const app = new Vue({
  el: "#app",
  store: Store,
  components: {
    App,
  },
  render: (h) => h("app"),
});
