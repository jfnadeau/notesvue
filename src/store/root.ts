import { selectedNoteGetter } from './getters/selected-note';
import Vuex from "vuex"
import Vue from "vue"
import RootStore from "../store/model/rootstore";
import { FETCH_NOTES_ACTION, fetchNotesAction } from "../store/actions/fetch-notes";
import { LOAD_NOTES_ACTION, loadNotesMutation } from "../store/mutations/load-notes";
import { SELECT_NOTE_MUTATION, selectNoteMutation } from "./mutations/select-note";

Vue.use(Vuex);

export default new Vuex.Store<RootStore>({
    state: {
        notes: [],
        selectedIndex: null
    },
    mutations: {
        [SELECT_NOTE_MUTATION]: selectNoteMutation,
        [LOAD_NOTES_ACTION]: loadNotesMutation
    },
    actions: {
        [FETCH_NOTES_ACTION]: fetchNotesAction
    },
    getters: {
        selectedNoteGetter
    }
})