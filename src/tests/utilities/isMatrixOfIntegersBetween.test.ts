import { expect } from "chai"
import { isMatrixOfIntegersBetween } from "../../utilities"

describe('isMatrixOfIntegersBetween', () => {
    it('returns false when matrix contains undefined', () => {
        let matrix: number[][] = [
            [1, 2, 3],
            [4, 5, 6],
            [2, undefined, 5]
        ]
        let min: number = 1
        let max: number = 6
        expect(isMatrixOfIntegersBetween(matrix, min, max)).to.be.false
    })
    it('returns false when matrix contains decimals', () => {
        let matrix: number[][] = [
            [1, 2, 3],
            [4, 5, 6.3],
            [2, 3, 5]
        ]
        let min: number = 1
        let max: number = 6
        expect(isMatrixOfIntegersBetween(matrix, min, max)).to.be.false
    })
    it('returns false when matrix contains integers smaller than specified', () => {
        let matrix: number[][] = [
            [1, 2, 3],
            [4, 5, 6],
            [2, -3, 5]
        ]
        let min: number = 1
        let max: number = 6
        expect(isMatrixOfIntegersBetween(matrix, min, max)).to.be.false
    })
    it('returns false when matrix contains integers greater than specified', () => {
        let matrix: number[][] = [
            [1, 2, 30],
            [4, 5, 6],
            [2, 3, 5]
        ]
        let min: number = 1
        let max: number = 6
        expect(isMatrixOfIntegersBetween(matrix, min, max)).to.be.false
    })
    it('returns true when matrix contains integers between the range specified', () => {
        let matrix: number[][] = [
            [1, 2, 3],
            [4, 5, 6],
            [2, 3, 5]
        ]
        let min: number = 1
        let max: number = 6
        expect(isMatrixOfIntegersBetween(matrix, min, max)).to.be.true
    })
})