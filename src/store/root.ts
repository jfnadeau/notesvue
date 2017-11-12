import Vuex from "vuex"
import Vue from "vue"
import RootStore from "../store/model/rootstore";
import { FETCH_NOTES_ACTION, fetchNotesAction } from "../store/actions/fetch-notes";
import { LOAD_NOTES_ACTION, loadNotesMutation } from "../store/mutations/load-notes";

Vue.use(Vuex);

export default new Vuex.Store<RootStore>({
    state: {
        notes: []
    },
    mutations: {
        [LOAD_NOTES_ACTION]: loadNotesMutation
    },
    actions: {
        [FETCH_NOTES_ACTION]: fetchNotesAction
    },
    getters: {
        allNotes: (state) => {
            return state.notes;
        }
    }
})