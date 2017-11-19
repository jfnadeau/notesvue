import { Note } from './../../services/notes/model';
import Vue from "vue";
import { dispatchFetchNotes } from './../../store/actions/fetch-notes';
import { NotesSummary } from './../notes-summary/notes-summary';
import { NoteEditor } from './../note-editor/note-editor';
import withRender from "./app.html"
import { getSelectedNote } from '../../store/getters/selected-note';

export const App = withRender(Vue.extend({
    created: function () {
        dispatchFetchNotes(this.$store);
    },
    computed: {
        initialNote(): Note {
            return getSelectedNote(this.$store);
        }
    },
    components: {
        NotesSummary,
        NoteEditor
    }
}));