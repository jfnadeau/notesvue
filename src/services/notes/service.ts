import { Note } from "./model"

export const getNotes = () =>
    new Promise<Note[]>(
        (resolve, reject) =>
            setTimeout(() =>
                resolve(
                    [
                        { title: "Mock Note 1", description: "Mock Desc 1" }
                    ]
                )
            )
    )