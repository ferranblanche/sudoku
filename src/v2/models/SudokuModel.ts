import { BoardType } from "../types/BoardType";
import { SudokuInterface } from "../interfaces/SudokuInterface";
import { CellModel } from './CellModel'

export class Sudoku implements SudokuInterface {
    private board: BoardType

    constructor() {
        this.board = new Array(9).fill(new Array(9).fill(new CellModel()))
    }

    public getBoard(): BoardType {
        return this.board
    }
}