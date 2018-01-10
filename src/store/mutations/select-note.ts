import { Mutation, Store } from "vuex";

import { RootStore } from "../model/rootstore";

export const SELECT_NOTE_MUTATION = "select-note";

export interface SelectNotePayload {
    type: "select-note";
    selectedIndex: number;
}

export const selectNoteMutation: Mutation<RootStore> = (state, payload: SelectNotePayload) => {
    state.selectedIndex = payload.selectedIndex;
};

export const commitSelectNote = (store: Store<any>, selectedIndex: number) => {
    store.commit<SelectNotePayload>({ type: SELECT_NOTE_MUTATION, selectedIndex });
};
