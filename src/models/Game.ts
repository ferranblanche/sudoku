type Board = Array<Array<number>>

interface IGame {
    // writeMark(row: number, column: number, number: number): Board
    writeNumber(row: number, column: number, number: number): Board
    // getHint(): Board // Returns the Board with an extra number added
    // resolve()
}


export class Game implements IGame {
    private Board: Board
    constructor(difficulty: "easy" | "medium" | "hard") {
        this.Board = [
            [ 5, 3,  ,  , 7,  ,  ,  ,  ],
            [ 6,  ,  , 1, 9, 5,  ,  ,  ],
            [  , 9, 8,  ,  ,  ,  , 6,  ],
            [ 8,  ,  ,  , 6,  ,  ,  , 3],
            [ 4,  ,  , 8,  , 3,  ,  , 1],
            [ 7,  ,  ,  , 2,  ,  ,  , 6],
            [  , 6,  ,  ,  ,  , 2, 8,  ],
            [  ,  ,  , 4, 1, 9,  ,  , 5],
            [  ,  ,  ,  , 8,  ,  , 7, 9]
        ]
    }
    public writeNumber(rowIndex: number, columnIndex: number, number: number) {
        if (!this.getCell(rowIndex, columnIndex)) {
            this.Board[rowIndex][columnIndex] = number
        }
        return this.Board
    }
    private getCell(row: number, column: number) {
        return this.Board[row][column]
    }
    private getRow(rowIndex: number): Array<number> {
        return this.Board[rowIndex]
    }
    private getColumn(columnIndex: number): Array<number> {
        return this.Board.map(row => row[columnIndex])
    }
    private validateRow(rowIndex: number):boolean {
        var row = this.getRow(rowIndex)
        return !this.hasDuplicates(row)
    }
    private validateColumn(columnIndex: number): boolean {
        var column = this.getColumn(columnIndex)
        return !this.hasDuplicates(column)
    }
    private hasDuplicates(array: Array<number>): boolean {
        var existingNumbers = {}
        for (let index = 0; index < array.length; index++) {
            const number = array[index];
            if (number in existingNumbers) {
                return true
            }
        }
        return false
    }
}

// TO BE IMPLEMENTED WITH MARKS
// class Cell {
//     private number: number
//     private marks: Array<number>
//     public getNumber(): number { return this.number }
//     public setNumber(number: number): number {
//         this.number = number
//         return this.number
//     }
//     public getMark(): Array<number> { return this.marks }
//     public addMark(mark: number): Array<number> {
//         this.removeMark(mark).push(mark)
//         return this.marks
//     }
//     public removeMark(mark: number): Array<number> {
//         this.marks = this.marks.filter((existingMark) => mark != existingMark)
//         return this.marks
//     }
// }