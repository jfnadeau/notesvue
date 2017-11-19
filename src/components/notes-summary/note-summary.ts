import Vue from 'vue';
import withRender from "./note-summary.html"

export const NoteSummary = withRender(Vue.extend({
    props: {
        selected: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    methods: {
        select() {
            this.$emit("select");
        }
    },
    computed: {
        selectedColor(): string {
            return this.selected ? "gray" : "white"
        }
    }
}));