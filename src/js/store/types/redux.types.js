// @flow

export type PayloadAction<T> = {
    +type: string,
    +payload: T,
    +callback?: (errors?: string[]) => void,
}
