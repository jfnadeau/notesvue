import Vue from 'vue';
import withRender from "./note-summary.html"

export const NoteSummary = withRender(Vue.extend({
   
    props: ["title", "selected"],
    methods: {
        select() {
            this.$emit("select");
        }
    },
    computed: {
        selectedColor() : string {
            return this.selected ? "gray" : "white"
        }
    }
}));