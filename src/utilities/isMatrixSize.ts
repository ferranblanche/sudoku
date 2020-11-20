import { MatrixType } from "../types";

export function isMatrixSize(matrix: MatrixType, rows: number = 9, columns: number = 9) {
    for (const row of matrix) {
        if (row.length !== columns) { return false }
    }
    return matrix.length === rows
}