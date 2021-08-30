import { CellModel } from "../models";

export interface CellInterface {
    readonly row: number
    readonly column: number
    readonly block: number
    readonly digit?: number
    readonly marks?: number[]
    readonly clue: boolean
    writeMark(mark: number): CellModel
    eraseMark(mark: number): CellModel
    clearMarks(): CellModel
    writeDigit(digit: number): CellModel
    eraseDigit(): CellModel
}