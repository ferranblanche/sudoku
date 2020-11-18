import { Gridtype } from "../types";
import { GridModel, GroupModel } from "../models";

export interface GridInterface {
    getRows(): GroupModel[]
    getColumns(): GroupModel[]
    getBlocks(): GroupModel[]
    getBlanks(): Gridtype
    writeCell(row: number, column: number, digit: number): Gridtype
    eraseCell(row: number, column: number): Gridtype
    calculateCandidates(): GridModel
    print(): void
}