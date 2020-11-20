import { expect } from "chai"
import { SudokuModel } from "../../models"

describe('SudokuModel', () => {
    // describe('generate', () => {})
    describe('useLayout', () => {
        it('rejects a layout that has mistakes', () => {
            let sudoku = new SudokuModel()
            let matrixWithMistakes = [
                [5, 1, 6, 8, 4, 9, 7, 3, 2],
                [3, 0, 7, 6, 0, 5, 0, 0, 0],
                [8, 0, 9, 7, 0, 0, 0, 6, 5],
                [1, 3, 5, 0, 6, 0, 9, 0, 7],
                [4, 7, 5, 5, 9, 1, 0, 0, 6],
                [9, 6, 8, 3, 7, 0, 0, 5, 0],
                [2, 5, 3, 1, 8, 6, 0, 7, 4],
                [6, 8, 4, 2, 0, 7, 5, 0, 0],
                [7, 9, 1, 0, 5, 0, 6, 0, 8]
            ]
            expect(sudoku.useLayout(matrixWithMistakes).grid).to.be.undefined
        })
        it('rejects a layout that has multiple solutions', () => {

            let sudoku = new SudokuModel()
            let matrixWithMultipleSolutions = [
                [0, 8, 0, 0, 0, 9, 7, 4, 3],
                [0, 5, 0, 0, 0, 8, 0, 1, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 0],
                [8, 0, 0, 0, 0, 5, 0, 0, 0],
                [0, 0, 0, 8, 0, 4, 0, 0, 0],
                [0, 0, 0, 3, 0, 0, 0, 0, 6],
                [0, 0, 0, 0, 0, 0, 0, 7, 0],
                [0, 3, 0, 5, 0, 0, 0, 8, 0],
                [9, 7, 2, 4, 0, 0, 0, 5, 0]
            ]
            expect(sudoku.useLayout(matrixWithMultipleSolutions).grid).to.be.undefined
        })
        it('accepts a layout that has one solutions and is valid', () => {
            let sudoku = new SudokuModel()
            let validMatrix = [
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
            expect(sudoku.useLayout(validMatrix).grid.cells.length).to.equal(81)
        })
    })
    // describe('writeCell', () => {})
    // describe('eraseCell', () => {})
    // describe('solve', () => {})
    // describe('reset', () => {})
})