import { CellModel } from "../models";

export interface GroupInterface {
    cells: CellModel[]
    includesDigit(mark: number): boolean
    filterCellsByMark(mark: number): CellModel[]
}