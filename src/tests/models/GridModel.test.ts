import { expect } from "chai"
import { GridModel } from '../../models'

describe('GridModel', () => {
    describe('constructor and cells', () => {
        it('rejects matrix with less than 9 rows', () => {
            let matrixWith5Rows: number[][] = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1]
            ];
            let grid: GridModel = new GridModel()
            grid.useLayout(matrixWith5Rows)
            expect(grid.cells).to.be.undefined
        })
        it('rejects matrix with more than 9 rows', () => {
            let matrixWith11Rows: number[][] = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [0, 6, 0, 0, 0, 0, 2, 8, 0]
            ];
            let grid: GridModel = new GridModel()
            grid.useLayout(matrixWith11Rows)
            expect(grid.cells).to.be.undefined
        })
        it('rejects matrix with less than 9 columns', () => {
            let matrixWith8Columns: number[][] = [
                [5, 3, 0, 0, 7, 0, 0],
                [6, 0, 0, 1, 9, 5, 0],
                [0, 9, 8, 0, 0, 0, 0],
                [8, 0, 0, 0, 6, 0, 0],
                [4, 0, 0, 8, 0, 3, 0],
                [7, 0, 0, 0, 2, 0, 0],
                [0, 6, 0, 0, 0, 0, 2],
                [0, 0, 0, 4, 1, 9, 0],
                [0, 0, 0, 0, 8, 0, 0]
            ];
            let grid: GridModel = new GridModel()
            grid.useLayout(matrixWith8Columns)
            expect(grid.cells).to.be.undefined
        })
        it('rejects matrix with more than 9 columns', () => {
            let matrixWith10Columns: number[][] = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3, 0],
                [4, 0, 0, 8, 0, 3, 0, 0, 1, 0],
                [7, 0, 0, 0, 2, 0, 0, 0, 6, 0],
                [0, 6, 0, 0, 0, 0, 2, 8, 0, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5, 0],
                [0, 0, 0, 0, 8, 0, 0, 7, 9, 0]
            ];
            let grid: GridModel = new GridModel()
            grid.useLayout(matrixWith10Columns)
            expect(grid.cells).to.be.undefined
        })
        it('rejects matrix with decimals', () => {
            let matrixWithDecimals: number[][] = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3.5, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ];
            let grid: GridModel = new GridModel()
            grid.useLayout(matrixWithDecimals)
            expect(grid.cells).to.be.undefined
        })
        it('rejects matrix with integers smaller than 1', () => {
            let matrixWithIntegerSmallerThan1: number[][] = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, -1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ];
            let grid: GridModel = new GridModel()
            grid.useLayout(matrixWithIntegerSmallerThan1)
            expect(grid.cells).to.be.undefined
        })
        it('rejects matrix with integers greater than 9', () => {
            let matrixWithIntegerGreaterThan9: number[][] = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 18, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ];
            let grid: GridModel = new GridModel()
            grid.useLayout(matrixWithIntegerGreaterThan9)
            expect(grid.cells).to.be.undefined
        })
        it('rejects matrix with duplicated digits in a row', () => {
            let matrix: number[][] = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 9, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ]
            let grid: GridModel = new GridModel()
            grid.useLayout(matrix)
            expect(grid.cells).to.be.undefined
        })
        it('rejects matrix with duplicated digits in a column', () => {
            let matrix: number[][] = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 8, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ]
            let grid: GridModel = new GridModel()
            grid.useLayout(matrix)
            expect(grid.cells).to.be.undefined
        })
        it('rejects matrix with duplicated digits in a block', () => {
            let matrix: number[][] = [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [6, 0, 0, 0, 8, 0, 0, 7, 9]
            ]
            let grid: GridModel = new GridModel()
            grid.useLayout(matrix)
            expect(grid.cells).to.be.undefined
        })
        // it('rejects matrix with mistakes', () => { })
        // it('rejects matrix with multiple solutions', () => { })
        it('each cell in the grid contains the specified digit when the matrix is valid and solvable', () => {
            let matrix: number[][] = [
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
            let grid: GridModel = new GridModel()
            grid.useLayout(matrix)
            expect(grid.cells.length).to.equal(81)
        })
    })
    // rows
    // columns
    // blocks
    // blanks
    // getCell
    // calculateCanidates
    // log
})