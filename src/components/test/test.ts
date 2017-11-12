import Vue from "vue"
import withRender from "./test.html"

export default withRender(Vue.extend({
    data() {
        return {
            msg: 'Hello'
        }
    },
    methods: {
        // need annotation due to `this` in return type
        greet(): string {
            return this.msg + ' world'
        }
    },
    computed: {
        // need annotation
        greeting(): string {
            return this.greet() + '!'
        }
    }
}));