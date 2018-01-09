import { Note } from './model';

export const getNotes = async () => {
    let res = await fetch("/api/notes");
    return res.json<Note[]>();
}

export const persistNote = (note: Note) =>
    new Promise<Note[]>(
        (resolve, reject) =>
            setTimeout(() =>
                resolve()
            )
    )