import { Gridtype } from "../types";
import { CellModel, GridModel, GroupModel } from "../models";

export interface GridInterface {
    cells: Gridtype
    rows: GroupModel[]
    columns: GroupModel[]
    blocks: GroupModel[]
    groups: GroupModel[]
    blanks: Gridtype
    getCell(row: number, column: number): CellModel
    calculateCandidates(): GridModel
    log(): void
}