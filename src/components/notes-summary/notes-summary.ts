import Vue from "vue"
import withRender from "./notes-summary.html"
import { NoteSummary } from './note-summary';
import { commitSelectNote } from '../../store/mutations/select-note';

export const NotesSummary = withRender(Vue.extend({
    methods: {
        selectNote(selectedIndex: number) {
            commitSelectNote(this.$store, selectedIndex);
        }
    },
    components: {
        NoteSummary
    }
}));