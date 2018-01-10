import "./error-toast.css";

import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

import { commitClearError } from "../../store/mutations/notify-error";
import withRender from "./error-toast.html";

@withRender
@Component
export class ErrorToast extends Vue {

  @Watch("$store.state.hasError")
  hasErrorChanged(val: boolean, oldVal: boolean) {
    if (val) {
      setTimeout(() => {
        commitClearError(this.$store);
      }, 6000);
    }
  }
}
