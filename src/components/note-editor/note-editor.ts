import { Note } from './../../services/notes/model';
import Vue from "vue";
import Component from 'vue-class-component'
import { Prop, Watch } from "vue-property-decorator";
import withRender from "./note-editor.html"

import "./note-editor.css"

@Component
@withRender
export class NoteEditor extends Vue {

    @Prop()
    initialNote: Note;

    note: Note = { title: "", description: "" };

    created() {
        if (this.initialNote) {
            this.note = this.initialNote;
        }
    }

    @Watch("initialNote")
    watchInitialNote(newInitialNote: Note) {
        this.note = { ...newInitialNote };
    }
    save() {
        this.$emit("save", { ...this.note });
    }
}