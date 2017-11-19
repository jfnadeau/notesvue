export interface Note {
    title: string
    description: string
}

export type NoteProp = { (): Note }
