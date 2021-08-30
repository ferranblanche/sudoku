import { CellModel } from "../models";

export interface CellInterface {
    readonly row: number
    readonly column: number
    readonly block: number
    digit?: number
    candidates?: number[]
    clue: boolean
    addCandidate(candidate: number): CellModel
    eraseCandidate(candidate: number): CellModel
    clearCandidates(): CellModel
}