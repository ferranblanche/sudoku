import { BoardType } from '../types/BoardType'
import { SudokuInterface, BlankInterface, MarkInterface, HintInterface } from '../interfaces'

export class SudokuModel implements SudokuInterface {
    // PROPERTIES
    private template: BoardType
    private board: BoardType
    private blanks: BlankInterface[]
    private marks: MarkInterface[]
    // CONSTRUCTOR
    constructor(template?: BoardType) {
        if(!template || !this.validateTemplate(template)) {
            this.template = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ]
        } else {
            this.template = template
        }
        this.board = this.template
        this.blanks = this.calculateBlanks()
        this.marks = []
    }
    // BOARD
    public readBoard(): BoardType {
        return this.board
    }
    // BLANK CELLS
    public readBlanks(): BlankInterface[] {
        return this.blanks
    }
    private calculateBlanks(): BlankInterface[] {
        const blanks = []
        for (let rowIndex = 0; rowIndex < this.board.length; rowIndex++) {
            const row = this.board[rowIndex];
            for (let colIndex = 0; colIndex < row.length; colIndex++) {
                const cell = row[colIndex];
                if (!this.validateNumberInput(cell)) {
                    blanks.push({
                        row: rowIndex,
                        col: colIndex
                    })
                }
            }
        }
        return blanks
    }
    private removeBlank(rowIndex: number, colIndex: number): void {
        this.blanks.filter(blank => blank.row !== rowIndex && blank.col !== colIndex)
    }
    // MARKS
    writeMark(row: number, col: number, num: number): void {
        if (this.getCell(row, col) && this.validateNumberInput(num)) {
            this.eraseMark(row, col, num)
            this.marks.push({ row, col, num })
        }
    }
    readMarks(): MarkInterface[] {
        return this.marks
    }
    eraseMark(row: number, col: number, num: number): void {
        this.marks.filter(mark => mark !== { row, col, num })
    }
    // NUMBERS
    public validateNumber(rowIndex: number, colIndex: number, num: number): boolean {
        return this.validateArray(this.getRow(rowIndex), num) && this.validateArray(this.getColumn(colIndex), num) && this.validateArray(this.getBlock(rowIndex, colIndex), num)
    }
    public writeNumber(rowIndex: number, colIndex: number, num: number): BoardType {
        if (!this.getCell(rowIndex, colIndex) && this.validateNumberInput(num)) {
            this.board[rowIndex][colIndex] = num
            this.removeBlank(rowIndex, colIndex)
        }
        return this.board
    }
    public eraseNumber(row: number, col: number): void {
        this.board[row][col] = 0
    }
    // HINTS
    public readHint(): HintInterface {
        const blanks: BlankInterface[] = this.readBlanks()
        for (const blank of blanks) {
            const options = []
            for (let num = 1; num <= 9; num++) {
                if (this.validateNumber(blank.row, blank.col, num)) {
                    options.push(num)
                }
            }
            if (options.length === 1) {
                return {
                    rowIndex: blank.row,
                    colIndex: blank.col,
                    num: options[0]
                }
            }
        }
        return undefined
    }
    // SOLVE
    resolve(): void {
        for (const blank of this.blanks) {
            const { rowIndex, colIndex, num } = this.readHint()
            this.writeNumber(rowIndex, colIndex, num)
        }
    }
    // PREPARE TO PRINT
    public toString(): string {
        return '-----------------\n' + this.board.map(row => { return row.join().replace(/(,|0)/gi, ' ') + '\n' }).join().replace(/,/gi, '')
    }
    // UTILS
    private getCell(row: number, col: number): number {
        return this.board[row][col]
    }
    private getRow(rowIndex: number): number[] {
        return this.board[rowIndex]
    }
    private getColumn(colIndex: number): number[] {
        return this.board.map(row => row[colIndex])
    }
    private getBlock(rowIndex: number, colIndex: number): number[] {
        const initialRow = Math.floor(rowIndex / 3) * 3
        const initialCol = Math.floor(colIndex / 3) * 3
        return this.board.slice(initialRow, initialRow + 3).map(row => row.slice(initialCol, initialCol + 3)).join().split(',').map(num => parseInt(num, 10))
    }
    private validateNumberInput(num: number): boolean {
        return num && num >= 1 && num <= 9
    }
    private validateArrayInput(array: number[]): boolean {
        return (new Set(array.filter(num => num >= 0 && num <= 9))).size !== array.length && array.length === 9
    }
    private validateArray(array: number[], num: number): boolean {
        return this.validateNumberInput(num) && !array.includes(num) && array.length === 9
    }
    private validateTemplate(template: BoardType): boolean {
        for(let row of this.board) {
            if(!this.validateArrayInput(row)) {
                return false
            }
        }
        return template.length === 9
    }
}
