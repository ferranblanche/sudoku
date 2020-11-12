import { expect } from "chai"
import { isIntegerBetween1and9, isArrayOfIntegersBetween1and9 } from "../../utilities/NumberUtilities"

describe("Number Utilities - isIntegerBetween1and9", () => {
    it("rejects undefined", () => {
        expect(isIntegerBetween1and9(undefined)).to.be.false
    })
    it("rejects NaN", () => {
        expect(isIntegerBetween1and9(NaN)).to.be.false
    })
    it("rejects decimal numbers", () => {
        expect(isIntegerBetween1and9(3.45)).to.be.false
    })
    it("rejects integers smaller than 1", () => {
        expect(isIntegerBetween1and9(0)).to.be.false
    })
    it("rejects integers greater than 9", () => {
        expect(isIntegerBetween1and9(128)).to.be.false
    })
    it("accepts integers between 1 and 9", () => {
        expect(isIntegerBetween1and9(5)).to.be.true
    })
})

describe("Number Utilities - isArrayOfIntegersBetween1and9", () => {
    it("rejects undefined", () => {
        let array: Array<number> = [1,2,undefined,3]
        expect(isArrayOfIntegersBetween1and9(array)).to.be.false
    })
    it("rejects NaN", () => {
        let array: Array<number> = [1,2,3,4,NaN]
        expect(isArrayOfIntegersBetween1and9(array)).to.be.false
    })
    it("rejects decimal numbers", () => {
        let array: Array<number> = [1,2,3.89,4,5,6]
        expect(isArrayOfIntegersBetween1and9(array)).to.be.false
    })
    it("rejects integers smaller than 1", () => {
        let array: Array<number> = [1,2,3,4,0,9,8]
        expect(isArrayOfIntegersBetween1and9(array)).to.be.false
    })
    it("rejects integers greater than 9", () => {
        let array: Array<number> = [1,2,12,3]
        expect(isArrayOfIntegersBetween1and9(array)).to.be.false
    })
    it("accepts integers between 1 and 9", () => {
        let array: Array<number> = [1,2,3,4,5,6,7,8,9]
        expect(isArrayOfIntegersBetween1and9(array)).to.be.true
    })
})