import { fetchApi } from "../common/fetch-api";
import { Note } from "./model";

export const getNotes = () => {
  return fetchApi<Note[]>("notes");
};

export const persistNote = (note: Note) =>
  new Promise<Note[]>((resolve, reject) => setTimeout(() => resolve()));
