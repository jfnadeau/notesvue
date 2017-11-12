import {Store, Action} from "vuex"
import RootStore from "../model/rootstore"
import { getNotes } from "../../services/notes/service";
import { LoadNotesPayload } from "../mutations/load-notes"

export const FETCH_NOTES_ACTION = "fetch-notes"

export const fetchNotesAction : Action<RootStore, any> = async (context) => {
  
    let notes = await getNotes()
    context.commit<LoadNotesPayload>({type: "load-notes", notes: notes})
}

export const dispatchFetchNotes = (store: Store<any>) => {
    store.dispatch(FETCH_NOTES_ACTION);
}