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

    print(): void {
        // tslint:disable-next-line:no-console
        console.log(this.cells.map(cell => cell.digit).join().replace(/(0|,)/gi, ' '));
    }

    private getDigits(): number[] {
        const digits = []
        for (const cell of this.cells) {
            digits.push(cell.digit)
        }
        return digits
    }
}