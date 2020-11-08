import { BoardType } from '../types/BoardType' 

export interface SudokuInterface {
    getBoard(): BoardType
    // writeMark(row: number, column: number, number: number): BoardType
    validateNumber(row: number, column: number, number: number): boolean
    writeNumber(row: number, column: number, number: number): BoardType
}