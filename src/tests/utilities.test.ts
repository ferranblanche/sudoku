import { expect } from 'chai'
import 'mocha'

import { isIntegerBetween } from '../utilities'

describe('Cell Utilities - isIntegerBetween', () => {
    it('Detects an input that is undefined', () => {
        expect(isIntegerBetween(undefined, 0, 10)).to.be.false
    })
    it('Detects an input that is not a number', () => {
        expect(isIntegerBetween(NaN, 0, 10)).to.be.false
    })
    it('Detects a number that it is not an integer', () => {
        expect(isIntegerBetween(0.5, 0, 10)).to.be.false
    })
    it('Detects a number that it is smaller than the minimum', () => {
        expect(isIntegerBetween(-1, 0, 10)).to.be.false
    })
    it('Detects a number that it is greater than the maximum', () => {
        expect(isIntegerBetween(100, 0, 10)).to.be.false
    })
    it('Detects a number that it is an integer and between the minimum and the maximum', () => {
        expect(isIntegerBetween(3, 0, 10)).to.be.true
    })
})