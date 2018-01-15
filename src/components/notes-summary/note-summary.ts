import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import withRender from "./note-summary.html";

@withRender
@Component
export class NoteSummary extends Vue {
  @Prop({ required: true })
  selected: boolean;

  @Prop({ required: true })
  title: string;

  select() {
    this.$emit("select");
  }
}
