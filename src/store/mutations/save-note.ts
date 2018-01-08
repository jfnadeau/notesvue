import { Mutation } from 'vuex';

import { Note } from '../../services/notes/model';
import { RootStore } from '../model/rootstore';

export const SAVE_NOTE_MUTATION = "save-note"

export interface SaveNotePayload {
  type: "save-note"
  note: Note
}

export const saveNoteMutation: Mutation<RootStore> = (state, payload: SaveNotePayload) => {

  if (state.selectedIndex == null) {
    state.notes.push({ ...payload.note });
  } else {
    Object.assign(state.notes[state.selectedIndex], payload.note);
  }
}