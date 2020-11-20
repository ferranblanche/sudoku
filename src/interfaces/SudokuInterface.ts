import { SudokuModel, GridModel } from "../models";

export interface SudokuInterface {
    generate(): SudokuModel
    useLayout(layout: number[][]): SudokuModel
    layout: GridModel
    grid: GridModel
    solution: GridModel
    writeCell(row: number, column: number, digit: number): SudokuModel
    eraseCell(row: number, column: number): SudokuModel
    solve(quantity?: 'one' | 'all'): SudokuModel
    reset(): SudokuModel
}