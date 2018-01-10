import Vue from 'vue';
import Vuex from 'vuex';

import { FETCH_NOTES_ACTION, fetchNotesAction } from '../store/actions/fetch-notes';
import { RootStore } from '../store/model/rootstore';
import { LOAD_NOTES_MUTATION, loadNotesMutation } from '../store/mutations/load-notes';
import { PERSIST_NOTE_ACTION, persistNoteAction } from './actions/persist-note';
import { selectedNoteGetter } from './getters/selected-note';
import {
  CLEAR_ERROR_MUTATION,
  clearErrorMutation,
  NOTIFY_ERROR_MUTATION,
  notifyErrorMutation,
} from './mutations/notify-error';
import { SAVE_NOTE_MUTATION, saveNoteMutation } from './mutations/save-note';
import { SELECT_NOTE_MUTATION, selectNoteMutation } from './mutations/select-note';

Vue.use(Vuex);

export default new Vuex.Store<RootStore>({
    state: {
        notes: [],
        selectedIndex: null,
        hasError: false,
        message: null
    },
    mutations: {
        [SELECT_NOTE_MUTATION]: selectNoteMutation,
        [LOAD_NOTES_MUTATION]: loadNotesMutation,
        [SAVE_NOTE_MUTATION]: saveNoteMutation,
        [NOTIFY_ERROR_MUTATION]: notifyErrorMutation,
        [CLEAR_ERROR_MUTATION]: clearErrorMutation
    },
    actions: {
        [FETCH_NOTES_ACTION]: fetchNotesAction,
        [PERSIST_NOTE_ACTION]: persistNoteAction
    },
    getters: {
        selectedNoteGetter
    }
})