import { BoardModel } from './BoardModel'

interface ISudoku {
    getBoard(): BoardModel
}

export class Sudoku implements ISudoku {
    private board: BoardModel
    constructor(difficulty: "easy" | "medium" | "hard") {
        this.board = new BoardModel()
    }
    public getBoard(): BoardModel {
        return this.board
    }
    
}