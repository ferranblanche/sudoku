import { expect } from 'chai'
import 'mocha'

import { isIntegerBetween } from '../utilities'

describe('Cell Utilities - isIntegerBetween', () => {
    it('Detects an input that is not a number', () => {
        expect(isIntegerBetween(NaN, 0, 10)).to.be.false
    })
})