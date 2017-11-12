import Vue from "vue"
import withRender from "./notes-summary.html"

import { Note } from "../../services/notes/model"
import { fetchNotes } from "../../store/actions/fetch-notes";

export default withRender(Vue.extend({
    created: function() {
        fetchNotes(this.$store);
    }
}));