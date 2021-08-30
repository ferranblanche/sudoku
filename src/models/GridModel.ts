import { isMatrixOfIntegersBetween, isMatrixSize } from "../utilities";
import { GridInterface } from "../interfaces";
import { Gridtype, MatrixType } from "../types";
import { CellModel, GroupModel } from "./";

export class GridModel implements GridInterface {
    private _cells: Gridtype = []

    public useLayout(layout: MatrixType): GridModel {
        if (!layout || !isMatrixSize(layout, 9, 9) || !isMatrixOfIntegersBetween(layout, 1, 9)) {
            this._cells = undefined
            return this
        }
        this._cells = this.matrix2grid(layout)
        for (const group of this.groups) {
            if (group.cells.length !== 9) {
                this._cells = undefined
                return this
            }
        }
        return this
    }

    public get cells(): Gridtype {
        return this._cells
    }

    public get rows(): GroupModel[] {
        const rows: GroupModel[] = []
        for (let index = 1; index <= 9; index++) {
            rows.push(this.getRow(index))
        }
        return rows
    }

    public get columns(): GroupModel[] {
        const columns: GroupModel[] = []
        for (let index = 1; index <= 9; index++) {
            columns.push(this.getColumn(index))
        }
        return columns
    }


    public get blocks(): GroupModel[] {
        const blocks: GroupModel[] = []
        for (let index = 1; index <= 3; index++) {
            for (let index2 = 1; index2 <= 3; index2++) {
                blocks.push(this.getBlock(parseInt(index + '' + index2, 10)))
            }
        }
        return blocks
    }

    public get groups(): GroupModel[] {
        const rows: GroupModel[] = this.rows
        const columns: GroupModel[] = this.columns
        const blocks: GroupModel[] = this.blocks
        return rows.concat(columns).concat(blocks)
    }

    public get blanks(): Gridtype {
        return this.cells.filter(cell => !cell.digit)
    }

    public getCell(row: number, column: number): CellModel {
        return this.cells.find(cell => cell.row === row && cell.column === column)
    }

    public calculateCandidates(): GridModel {
        this.clearCandidates()
        for (const blank of this.blanks) {
            this.getCellCandidates(blank)
        }
        return this
    }

    private clearCandidates(): GridModel {
        for (const blank of this.blanks) {
            blank.clearCandidates()
        }
        return this
    }

    public log(): void {
        const matrix = this.grid2matrix(this.cells)
        // tslint:disable-next-line:no-console
        console.log(matrix.map(row => { return row.join().replace(/(0)/gi, '·').replace(/(,)/gi, ' ') }).join().replace(/(,)/gi, '\n'));
    }

    private getCellCandidates(cell: CellModel): CellModel {
        const row: GroupModel = this.getRow(cell.row)
        const column: GroupModel = this.getColumn(cell.column)
        const block: GroupModel = this.getBlock(cell.block)

        for (let candidate = 1; candidate <= 9; candidate++) {
            if (!row.includesDigit(candidate) && !column.includesDigit(candidate) && !block.includesDigit(candidate)) {
                cell.writeCandidate(candidate)
            }
        }
        return cell
    }

    private matrix2grid(matrix: MatrixType): Gridtype {
        // converts matrix of numbers into an array of cells (row, column, digit)
        const cells: Gridtype = []
        for (let rowIndex = 1; rowIndex <= matrix.length; rowIndex++) {
            const row = matrix[rowIndex - 1];
            for (let columnIndex = 1; columnIndex <= row.length; columnIndex++) {
                const digit = row[columnIndex - 1];
                const isClue = digit ? true : false
                cells.push(new CellModel(rowIndex, columnIndex, digit))
            }
        }
        return cells
    }

    private grid2matrix(grid: Gridtype): MatrixType {
        // converts array of cells (row, column, digit) into a matrix of numbers
        const matrix: MatrixType = new Array(9).fill(0).map(() => new Array(9).fill(0))
        for (const cell of grid) {
            matrix[cell.row - 1][cell.column - 1] = cell.digit ? cell.digit : 0
        }
        return matrix
    }

    private getRow(row: number): GroupModel {
        return new GroupModel(this.cells.filter(cell => cell.row === row))
    }

    private getColumn(column: number): GroupModel {
        return new GroupModel(this.cells.filter(cell => cell.column === column))
    }

    private getBlock(block: number): GroupModel {
        return new GroupModel(this.cells.filter(cell => cell.block === block))
    }
}