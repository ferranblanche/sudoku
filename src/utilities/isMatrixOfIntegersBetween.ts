import { isIntegerBetween } from "./isIntegerBetween";

export function isMatrixOfIntegersBetween(matrix: number[][]): boolean {
    for (let row of matrix) {
        for (let cell of row) {
            if (!isIntegerBetween(cell)) { return false }
        }
    }
    return true
}