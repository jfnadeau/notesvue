import { Note } from "../../services/notes/model";

export interface RootStore {
    notes: Note[];
    selectedIndex: number | null;

    hasError: boolean;
    message: string | null;
}
