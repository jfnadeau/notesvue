import "./notes-summary.css";

import Vue from "vue";
import { Component } from "vue-property-decorator";

import { commitSelectNote } from "../../store/mutations/select-note";
import { NoteSummary } from "./note-summary";
import withRender from "./notes-summary.html";

@withRender
@Component({
  components: {
    NoteSummary
  }
})
export class NotesSummary extends Vue {
  selectNote(selectedIndex: number) {
    commitSelectNote(this.$store, selectedIndex);
  }
}
