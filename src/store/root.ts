import { selectedNoteGetter } from './getters/selected-note';
import Vuex from "vuex"
import Vue from "vue"
import RootStore from "../store/model/rootstore";
import { FETCH_NOTES_ACTION, fetchNotesAction } from "../store/actions/fetch-notes";
import { LOAD_NOTES_ACTION, loadNotesMutation } from "../store/mutations/load-notes";
import { SELECT_NOTE_MUTATION, selectNoteMutation } from "./mutations/select-note";
import { SAVE_NOTE_MUTATION, saveNoteMutation } from './mutations/save-note';
import { PERSIST_NOTE_ACTION, persistNoteAction } from './actions/persist-note';

Vue.use(Vuex);

export default new Vuex.Store<RootStore>({
    state: {
        notes: [],
        selectedIndex: null
    },
    mutations: {
        [SELECT_NOTE_MUTATION]: selectNoteMutation,
        [LOAD_NOTES_ACTION]: loadNotesMutation,
        [SAVE_NOTE_MUTATION]: saveNoteMutation
    },
    actions: {
        [FETCH_NOTES_ACTION]: fetchNotesAction,
        [PERSIST_NOTE_ACTION]: persistNoteAction
    },
    getters: {
        selectedNoteGetter
    }
})