// Cell utilities
export function isIntegerBetween(num: number, min: number, max: number): boolean {
    return Number.isInteger(num) && num >= min && num <= max
}

// Array utilities
export function isArrayLength(array: number[], length: number): boolean {
    return array.length === length
}
export function isArrayOfIntegersBetween(array: number[], min: number, max: number): boolean {
    for(const num of array) {
        if(!isIntegerBetween(num, min, max)) { return false }
    }
    return true
}

// Matrix utilities
export function isMatrixSize(matrix: number[][], rows: number, cols: number): boolean {
    for(const row of matrix) {
        if(row.length !== cols) {
            return false
        }
    }
    return matrix.length === rows
}
export function isMatrixOfIntegersBetween(matrix: number[][], min: number, max: number): boolean {
    for(const row of matrix) {
        if(!isArrayOfIntegersBetween(row,min,max)) {
            return false
        }
    }
    return true
}