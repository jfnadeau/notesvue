import { Note, NoteProp } from './../../services/notes/model';
import Vue from "vue";
import withRender from "./note-editor.html"

export const NoteEditor = withRender(Vue.extend({

    props: {
        initialNote: {
            type: Object as NoteProp
        }
    },
    data() {

        let data = {
            note: {} as Note
        };

        data.note = this.initialNote ? this.initialNote : { title: "", description: "" };
        return data;
    },
    watch: {
        initialNote: function (newInitialNote: Note) {
            this.note = { ...newInitialNote };
        }
    },
    methods: {
        save() {
            this.$emit("save", { ...this.note });
        }
    }
}));