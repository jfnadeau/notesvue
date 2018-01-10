import { Action, Store } from "vuex";

import { getNotes } from "../../services/notes/service";
import { RootStore } from "../model/rootstore";
import { LoadNotesPayload } from "../mutations/load-notes";
import { NotifyErrorPayload } from "../mutations/notify-error";

export const FETCH_NOTES_ACTION = "fetch-notes";

export const fetchNotesAction: Action<RootStore, any> = async (context) => {

    try {
        const notes = await getNotes();
        context.commit<LoadNotesPayload>({ type: "load-notes", notes });
    } catch (e) {
        let message = "Unknown error";
        if (e instanceof Error) {
            message = e.message;
        }
        context.commit<NotifyErrorPayload>({ type: "notify-error", message });
    }
};

export const dispatchFetchNotes = (store: Store<any>) => {
    store.dispatch(FETCH_NOTES_ACTION);
};
