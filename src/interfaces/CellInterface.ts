import { CellModel } from "../models";

export interface CellInterface {
    row: number
    column: number
    block: number
    digit?: number
    candidates?: number[]
    clue: boolean
    addCandidate(candidate: number): CellModel
    eraseCandidate(candidate: number): CellModel
    clearCandidates(): CellModel
}