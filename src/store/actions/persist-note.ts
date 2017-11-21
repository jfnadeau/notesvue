import { Store, Action } from "vuex"
import RootStore from "../model/rootstore"
import { persistNote } from "../../services/notes/service";
import { Note } from "../../services/notes/model";
import { SaveNotePayload } from "../mutations/save-note";

export const PERSIST_NOTE_ACTION = "save-note";

export const persistNoteAction: Action<RootStore, any> = async (context, note: Note) => {
  await persistNote(note);
  context.commit<SaveNotePayload>({ type: "save-note", note: note })
}

export const dispatchPersistNote = (store: Store<any>, note: Note) => {
  store.dispatch(PERSIST_NOTE_ACTION, note);
}