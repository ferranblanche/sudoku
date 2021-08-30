import { CellModel } from "../models";

export interface CellInterface {
    readonly row: number
    readonly column: number
    readonly block: number
    readonly digit?: number
    readonly candidates?: number[]
    readonly clue: boolean
    writeCandidate(candidate: number): CellModel
    eraseCandidate(candidate: number): CellModel
    clearCandidates(): CellModel
    writeDigit(digit: number): CellModel
    eraseDigit(): CellModel
}