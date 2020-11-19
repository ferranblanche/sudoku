import { isIntegerBetween } from "./isIntegerBetween";

export function isMatrixOfIntegersBetween(matrix: number[][], min: number = 1, max: number = 9): boolean {
    for (let row of matrix) {
        for (let cell of row) {
            if (!isIntegerBetween(cell, min, max)) { return false }
        }
    }
    return true
}