import { CellModel } from "../models";

export interface GroupInterface {
    cells: CellModel[]
    includesDigit(candidate: number): boolean
    filterCellsByCandidate(candidate: number): CellModel[]
}