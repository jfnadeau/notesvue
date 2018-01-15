import { Store } from "vuex";

import { RootStore } from "../model/rootstore";
import { Note } from "./../../services/notes/model";

export const selectedNoteGetter = (store: RootStore) => {
  return store.selectedIndex != null ? store.notes[store.selectedIndex] : null;
};

export const getSelectedNote = (store: Store<RootStore>): Note => {
  return store.getters.selectedNoteGetter;
};
