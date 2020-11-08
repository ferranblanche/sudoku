import { SudokuModel } from "./models/SudokuModel";

// tslint:disable-next-line:no-console
console.log("🚀 Let's play");

let template = [
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

const sudoku = new SudokuModel("easy", template)

// tslint:disable-next-line:no-console
console.log(sudoku.toString())

sudoku.resolve()

// tslint:disable-next-line:no-console
console.log(sudoku.toString())