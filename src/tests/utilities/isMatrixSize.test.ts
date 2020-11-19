import { expect } from "chai"
import { isMatrixSize } from '../../utilities'

describe('isMatrixSize', () => {
    it('returns false when matrix has less rows than specified', () => {
        let matrix = [
            [1,2],
            [3,4]
        ]
        let rows = 3
        let columns = 2
        expect(isMatrixSize(matrix, rows, columns)).to.be.false
    })
    it('returns false when matrix has more rows than specified', () => {
        let matrix = [
            [1,2],
            [3,4]
        ]
        let rows = 1
        let columns = 2
        expect(isMatrixSize(matrix, rows, columns)).to.be.false
    })
    it('returns false when matrix has less columns (in at least one row) than specified', () => {
        let matrix = [
            [1,2],
            [3,4]
        ]
        let rows = 2
        let columns = 4
        expect(isMatrixSize(matrix, rows, columns)).to.be.false
    })
    it('returns false when matrix has more columns (in at least one row) than specified', () => {
        let matrix = [
            [1,2],
            [3,4]
        ]
        let rows = 0
        let columns = 2
        expect(isMatrixSize(matrix, rows, columns)).to.be.false
    })
    it('returns true when matrix contains the specified rows and each row contains the specified columns', () => {
        let matrix = [
            [1,2],
            [3,4]
        ]
        let rows = 2
        let columns = 2
        expect(isMatrixSize(matrix, rows, columns)).to.be.true
    })
})