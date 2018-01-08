import { Note } from './model';

export const getNotes = () =>
    new Promise<Note[]>(
        (resolve, reject) =>
            setTimeout(() =>
                resolve(
                    [
                        { title: "Mock Note 1", description: "Mock Desc 1" },
                        { title: "Mock Note 2", description: "Mock Desc 2" },
                        { title: "Mock Note 3", description: "Mock Desc 3" }
                    ]
                )
            )
    )

export const persistNote = (note: Note) =>
    new Promise<Note[]>(
        (resolve, reject) =>
            setTimeout(() =>
                resolve()
            )
    )