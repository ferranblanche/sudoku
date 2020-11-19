import { CellModel } from "../models";

export interface GroupInterface {
    includesDigit(candidate: number): boolean
    filterCellsByCandidate(candidate: number): CellModel[]
}