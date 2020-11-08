import { BoardType } from '../types/BoardType'
import { BoardInterface } from '../interfaces/BoardInterface'

export class BoardModel implements BoardInterface {
    private board: BoardType
    constructor() {
        this.board = [
            [5, 3, , , 7, , , ,],
            [6, , , 1, 9, 5, , ,],
            [, 9, 8, , , , , 6,],
            [8, , , , 6, , , , 3],
            [4, , , 8, , 3, , , 1],
            [7, , , , 2, , , , 6],
            [, 6, , , , , 2, 8,],
            [, , , 4, 1, 9, , , 5],
            [, , , , 8, , , 7, 9]
        ]
    }
    public writeNumber(rowIndex: number, columnIndex: number, number: number): BoardType {
        if (!this.getCell(rowIndex, columnIndex) && this.validateNumber(rowIndex, columnIndex, number)) {
            this.board[rowIndex][columnIndex] = number
        }
        return this.board
    }
    public validateNumber(rowIndex: number, columnIndex: number, number: number): boolean {
        return this.validateArray(this.getRow(rowIndex), number) && this.validateArray(this.getColumn(columnIndex), number) && this.validateArray(this.getBlock(rowIndex, columnIndex), number)
    }
    private getCell(row: number, column: number) {
        return this.board[row][column]
    }
    private getRow(rowIndex: number): Array<number> {
        return this.board[rowIndex]
    }
    private getColumn(columnIndex: number): Array<number> {
        return this.board.map(row => row[columnIndex])
    }
    private getBlock(rowIndex: number, columnIndex: number): Array<number> {
        let initialRow = Math.floor(rowIndex / 3) * 3
        let initialColumn = Math.floor(columnIndex / 3) * 3
        return this.board.slice(initialRow, initialRow + 3).map(row => row.slice(initialColumn, initialColumn + 3)).join().split(',').map(number => parseInt(number))
    }
    private validateArray(array: Array<number>, number: number) {
        return !array.includes(number)
    }
}
