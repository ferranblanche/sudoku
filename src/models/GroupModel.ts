import { GroupInterface } from "../interfaces";
import { CellModel } from "./CellModel";

export class GroupModel implements GroupInterface {
    private _cells: CellModel[]

    constructor(cells: CellModel[]) {
        this._cells = cells.length === 9 ? cells : []
    }

    public get cells() {
        return this._cells
    }

    includesDigit(candidate: number): boolean {
        return this.getDigits().includes(candidate)
    }

    filterCellsByCandidate(candidate: number): CellModel[] {
        return this._cells.filter(cell => cell.candidates.includes(candidate))
    }

    private getDigits(): number[] {
        const digits = []
        for (const cell of this._cells) {
            digits.push(cell.digit)
        }
        return digits
    }
}