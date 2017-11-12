import Vue from "vue"

import withRender from "./notes-summary.html"

import { NoteSummary } from './note-summary';

import { dispatchFetchNotes } from "../../store/actions/fetch-notes";
import { commitSelectNote } from '../../store/mutations/select-note';

export default withRender(Vue.extend({
    created: function() {
        dispatchFetchNotes(this.$store);
    },
    methods: {
        selectNote(selectedIndex: number) {
            commitSelectNote(this.$store, selectedIndex);
        }
    },
    components: {
        "note-summary": NoteSummary
    }
}));