import { GroupInterface } from "../interfaces";
import { CellModel } from "./CellModel";

export class GroupModel implements GroupInterface {
    private cells: CellModel[]

    constructor(cells: CellModel[]) {
        this.cells = cells
    }

    isValid(candidate: number): boolean {
        return !this.getDigits().includes(candidate)
    }

    filterByCandidate(candidate: number): CellModel[] {
        return this.cells.filter(cell => cell.candidates.includes(candidate))
    }

    private getDigits(): number[] {
        const digits = []
        for (const cell of this.cells) {
            digits.push(cell.digit)
        }
        return digits
    }
}