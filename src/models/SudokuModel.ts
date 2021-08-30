import { SudokuInterface } from "../interfaces";
import { Gridtype, MatrixType } from "../types";
import { GridModel } from "./";
import { GroupModel } from "./GroupModel";

export class SudokuModel implements SudokuInterface {
    private _layout: GridModel
    private _grid: GridModel
    private _solution: GridModel = undefined

    public generate(): SudokuModel {
        const layout: MatrixType = [
            [5,3,0,0,7,0,0,0,0],
            [6,0,0,1,9,5,0,0,0],
            [0,9,8,0,0,0,0,6,0],
            [8,0,0,0,6,0,0,0,3],
            [4,0,0,8,0,3,0,0,1],
            [7,0,0,0,2,0,0,0,6],
            [0,6,0,0,0,0,2,8,0],
            [0,0,0,4,1,9,0,0,5],
            [0,0,0,0,8,0,0,7,9]
        ]
        return this.useLayout(layout)
    }

    public useLayout(layout: MatrixType) {
        this._grid = new GridModel().useLayout(layout)
        if (this.grid.cells && this.solveAll()) {
            this._layout = new GridModel().useLayout(layout)
            this.solveAll()
            this._grid = new GridModel().useLayout(layout)
        } else {
            this._grid = undefined
        }
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
        switch (quantity) {
            case 'one':
                this.solveOne()
                break;

            case 'all':
                this.solveAll()
                break;
        }
        return this
    }

    public reset(): SudokuModel {
        this._grid = this._layout
        return this
    }

    private solveOne(): boolean {
        // Strategy 1: Find blanks with just one mark
        const blanks: Gridtype = this._grid.calculateMarks().blanks
        for (const blank of blanks) {
            if (blank.marks.length === 1) {
                this.writeCell(blank.row, blank.column, blank.marks[0])
                return true
            }
        }
        // Strategy 2: Find blanks with just one mark
        const groups: GroupModel[] = this.grid.groups
        for (const group of groups) {
            for (let mark = 1; mark <= 9; mark++) {
                const blanksWithMark = group.filterCellsByMark(mark)
                if (blanksWithMark.length === 1) {
                    this.writeCell(blanksWithMark[0].row, blanksWithMark[0].column, mark)
                    return true
                }
            }
        }
        // Unable to solve
        return false
    }
    private solveAll(): boolean {
        const blanksLeft: number = this._grid.blanks.length
        for (let index = 0; index < blanksLeft; index++) {
            if (!this.solveOne()) {
                return false
            }
        }
        this._solution = this._grid
        return true
    }
}