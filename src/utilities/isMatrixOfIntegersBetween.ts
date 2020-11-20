import { isIntegerBetween } from "./isIntegerBetween";

export function isMatrixOfIntegersBetween(matrix: number[][], min: number = 1, max: number = 9): boolean {
    for (let row of matrix) {
        for (let digit of row) {
            if (!isIntegerBetween(digit, min, max) && digit !== 0) { return false }
        }
    }
    return true
}