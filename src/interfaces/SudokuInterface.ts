import { BoardType } from '../types/BoardType'
import { BlankInterface, HintInterface } from './';
import { MarkInterface } from './MarkInterface';

export interface SudokuInterface {
    // BOARD
    readBoard(): BoardType
    // BLANK CELLS
    readBlanks(): BlankInterface[]
    // MARKS
    writeMark(row: number, col: number, num: number): void
    readMarks(): MarkInterface[]
    eraseMark(row: number, col: number, num: number): void
    // NUMBERS
    validateNumber(row: number, col: number, num: number): boolean
    writeNumber(row: number, col: number, num: number): void
    eraseNumber(row: number, col: number): void
    // HINTS
    readHint(): HintInterface
    // SOLVE
    resolve(): void
    // PREPARE TO PRINT
    toString(): string
}