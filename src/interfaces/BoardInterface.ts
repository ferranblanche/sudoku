import { BoardType } from '../types/BoardType' 

export interface BoardInterface {
    // writeMark(row: number, column: number, number: number): BoardType
    writeNumber(row: number, column: number, number: number): BoardType
}