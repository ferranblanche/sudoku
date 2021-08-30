import { GroupInterface } from "../interfaces";
import { CellModel } from "./CellModel";

export class GroupModel implements GroupInterface {
    private _cells: CellModel[]

    constructor(cells: CellModel[]) {
        this._cells = cells.length === 9 ? cells : []
        if(this.hasDuplicateDigits()) { this._cells = [] }
    }

    public get cells() {
        return this._cells
    }

    includesDigit(digit: number): boolean {
        return digit ? this.getDigits().includes(digit) : false
    }

    filterCellsByMark(mark: number): CellModel[] {
        return this._cells.filter(cell => cell.marks.includes(mark))
    }

    private getDigits(): number[] {
        const digits = []
        for (const cell of this._cells) {
            digits.push(cell.digit)
        }
        return digits
    }

    private hasDuplicateDigits(): boolean {
        const digits: number[] = this.getDigits()
        for (const digit of digits) {
            if(digit && digits.filter(_digit => _digit === digit).length !== 1) { return true }
        }
        return false
    }
}