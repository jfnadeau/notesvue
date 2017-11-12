import Vue from "vue"
import Store from "./store/root";
import NotesSummary from "./components/notes-summary/notes-summary"


new Vue({
    el: '#app',
    store: Store,
    components: {
      NotesSummary
    },
    render : h => h('notes-summary')
  });