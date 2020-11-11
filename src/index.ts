// export { SudokuModel as Sudoku } from "./models/SudokuModel"

import { SudokuModel } from "./models/SudokuModel";

// // tslint:disable-next-line:no-console
// console.log("🚀 Let's play");

// const template = [
//     [5, 3, 0, 0, 7, 0, 0, 0, 0],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5],
//     [0, 0, 0, 0, 8, 0, 0, 7, 9]
// ]

// const sudoku = new SudokuModel(template)

// // tslint:disable-next-line:no-console
// console.log(sudoku.toString())

// sudoku.resolve()

// // tslint:disable-next-line:no-console
// console.log(sudoku.toString())

const template = new Array(9).fill(new Array(9).fill(0))
const sudoku = new SudokuModel(template)

while (!sudoku.isSolvable()) {
    const num = getRandomInt(1, 9)
    const row = getRandomInt(1, 9)
    const col = getRandomInt(1, 9)
    if (sudoku.validateNumber(row, col, num)) {
        sudoku.writeNumber(row, col, num)
    }
}

// tslint:disable-next-line:no-console
console.log(sudoku.toString())

function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}