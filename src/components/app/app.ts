import "./app.css";

import Vue from "vue";
import { Component } from "vue-property-decorator";

import { dispatchFetchNotes } from "../../store/actions/fetch-notes";
import { dispatchPersistNote } from "../../store/actions/persist-note";
import { getSelectedNote } from "../../store/getters/selected-note";
import { ErrorToast } from "../error-toast/error-toast";
import { NotesSummary } from "../notes-summary/notes-summary";
import { Note } from "./../../services/notes/model";
import { NoteEditor } from "./../note-editor/note-editor";
import withRender from "./app.html";

@withRender
@Component({
    components: {
        NotesSummary,
        NoteEditor,
        ErrorToast,
    },
})
export class App extends Vue {
    created() {
        dispatchFetchNotes(this.$store);
    }

    get initialNote(): Note {
        return getSelectedNote(this.$store);
    }

    save(note: Note) {
        dispatchPersistNote(this.$store, note);
    }
}
