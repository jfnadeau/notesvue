import { Note } from './../../services/notes/model';
import { Store } from 'vuex';
import RootStore from '../model/rootstore';

export const selectedNoteGetter = (store: RootStore) => {
    return store.selectedIndex != null ? store.notes[store.selectedIndex] : null;
}

export const getSelectedNote = (store: Store<RootStore>): Note => {
    return store.getters.selectedNoteGetter;
}