import { expect } from 'chai'
import { isIntegerBetween } from '../../utilities'

describe('isIntegerBetween', () => {
    it('returns false when number is not defined or NaN', () => {
        let num = undefined
        let min = 1
        let max = 10
        expect(isIntegerBetween(num, min, max)).to.be.false
    })
    it('returns false when number is decimal', () => {
        let num = 1.5
        let min = 1
        let max = 10
        expect(isIntegerBetween(num, min, max)).to.be.false
    })
    it('returns false when number is integer smaller than min', () => {
        let num = 0
        let min = 1
        let max = 10
        expect(isIntegerBetween(num, min, max)).to.be.false
    })
    it('returns false when number is integer greater than max', () => {
        let num = 13
        let min = 1
        let max = 10
        expect(isIntegerBetween(num, min, max)).to.be.false
    })
    it('returns true when number is integer greater than min and smaller than max', () => {
        let num = 3
        let min = 1
        let max = 10
        expect(isIntegerBetween(num, min, max)).to.be.true
    })
    it('sets min to 1 when not defined', () => {
        let min = undefined
        let max = 10
        expect(isIntegerBetween(0, min, max)).to.be.false
        expect(isIntegerBetween(1, min, max)).to.be.true
        expect(isIntegerBetween(2, min, max)).to.be.true
    })
    it('sets max to 9 when not defined', () => {
        let min = 1
        let max = undefined
        expect(isIntegerBetween(8, min, max)).to.be.true
        expect(isIntegerBetween(9, min, max)).to.be.true
        expect(isIntegerBetween(10, min, max)).to.be.false
    })
})