import { SudokuModel, GridModel } from "../models";

export interface SudokuInterface {
    layout: GridModel
    grid: GridModel
    solution: GridModel
    generate(layout: number[][]): SudokuModel
    writeCell(row: number, column: number, digit: number): SudokuModel
    eraseCell(row: number, column: number): SudokuModel
    solve(quantity?: 'one' | 'all'): SudokuModel
    reset(): SudokuModel
}