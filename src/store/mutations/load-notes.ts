import { Mutation } from "vuex";

import { Note } from "../../services/notes/model";
import { RootStore } from "../model/rootstore";

export const LOAD_NOTES_MUTATION = "load-notes";

export interface LoadNotesPayload {
    type: "load-notes";
    notes: Note[];
}

export const loadNotesMutation: Mutation<RootStore> = (state, payload: LoadNotesPayload) => {
    state.notes = payload.notes;
};
