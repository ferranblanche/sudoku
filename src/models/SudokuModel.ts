import { SudokuInterface } from "../interfaces";
import { Gridtype, MatrixType } from "../types";
import { GridModel } from "./";
import { GroupModel } from "./GroupModel";

export class SudokuModel implements SudokuInterface {
    private _layout: GridModel
    private _grid: GridModel
    private _solution: GridModel = undefined

    constructor() {
        this.generate()
    }

    public generate(layout?: MatrixType): SudokuModel {
        if (!layout) {
            layout = [
                [0, 0, 0, 8, 0, 0, 0, 7, 0],
                [0, 4, 2, 0, 0, 0, 6, 5, 0],
                [9, 6, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 9, 0, 0, 6, 0, 2, 0],
                [8, 2, 0, 0, 1, 0, 0, 3, 6],
                [0, 3, 0, 2, 0, 0, 9, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 9, 5],
                [0, 9, 5, 0, 0, 0, 4, 1, 0],
                [0, 8, 0, 0, 0, 3, 0, 0, 0]
            ]
        }
        this._layout = new GridModel().setLayout(layout)
        this._grid = new GridModel().setLayout(layout)
        return this
    }

    public get layout(): GridModel {
        return this._layout
    }
    public get grid(): GridModel {
        return this._grid
    }
    public get solution(): GridModel {
        return this._solution
    }

    public writeCell(row: number, column: number, digit: number): SudokuModel {
        this._grid.getCell(row, column).digit = digit
        return this
    }

    public eraseCell(row: number, column: number): SudokuModel {
        this._grid.getCell(row, column).digit = undefined
        return this
    }

    public solve(quantity: 'one' | 'all' = 'one'): SudokuModel {
        const cells2solve: number = quantity === 'one' ? 1 : this._grid.blanks.length
        for (let index = 0; index < cells2solve; index++) {
            if (!this.solveOne()) {
                return this
            }
        }
        this._solution = quantity === 'all' ? this._grid : undefined
        return this
    }

    public reset(): SudokuModel {
        this._grid = this._layout
        return this
    }

    private solveOne(): boolean {
        // Strategy 1: Find blanks with just one candidate
        const blanks: Gridtype = this._grid.calculateCandidates().blanks
        for (const blank of blanks) {
            if (blank.candidates.length === 1) {
                this.writeCell(blank.row, blank.column, blank.candidates[0])
                return true
            }
        }
        // Strategy 2: Find blanks with just one candidate
        const rows: GroupModel[] = this._grid.rows
        const columns: GroupModel[] = this._grid.columns
        const blocks: GroupModel[] = this._grid.blocks
        const groups: GroupModel[] = rows.concat(columns).concat(blocks)
        for (const group of groups) {
            for (let candidate = 1; candidate <= 9; candidate++) {
                const blanksWithCandidate = group.filterCellsByCandidate(candidate)
                if (blanksWithCandidate.length === 1) {
                    this.writeCell(blanksWithCandidate[0].row, blanksWithCandidate[0].column, candidate)
                    return true
                }
            }
        }
        // Unable to solve
        return false
    }
}