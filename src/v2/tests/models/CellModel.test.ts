import { expect } from "chai"
import { CellModel } from "../../models/CellModel"

describe("Cell Model – Constructor", () => {
    it("defaults cell's number to undefined and no marks", () => {
        let cell: CellModel = new CellModel()
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.empty
    })
    it("sets the number when specifed", () => {
        let number: number = 8
        let cell: CellModel = new CellModel(number)
        expect(cell.getNumber()).to.be.equal(number)
        expect(cell.getMarks()).to.be.empty
    })
    it("rejects decimal numbers", () => {
        let cell: CellModel = new CellModel(3.75)
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.empty
    })
    it("rejects numbers smaller than 1", () => {
        let cell: CellModel = new CellModel(0)
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.empty
    })
    it("rejects numbers greater than 9", () => {
        let cell: CellModel = new CellModel(58)
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.empty
    })
    it("sets the marks when number is not specified", () => {
        let marks: Array<number> = [2, 8, 5, 3]
        let cell: CellModel = new CellModel(undefined, marks)
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.equal(marks)
    })
    it("rejects marks when number is specified, integer and between 1 and 9", () => {
        let number: number = 3
        let marks: Array<number> = [1,2,3,4,5]
        let cell: CellModel = new CellModel(number, marks)
        expect(cell.getNumber()).to.be.equal(number)
        expect(cell.getMarks()).to.be.empty
    })
    it("accepts marks when number is not integer", () => {
        let number: number = 3.89
        let marks: Array<number> = [1,2,3,4,5]
        let cell: CellModel = new CellModel(number, marks)
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.equal(marks)
    })
    it("rejects marks when number is not between 1 and 9", () => {
        let number: number = 12
        let marks: Array<number> = [1,2,3,4,5]
        let cell: CellModel = new CellModel(number, marks)
        expect(cell.getNumber()).to.be.undefined
        expect(cell.getMarks()).to.be.equal(marks)
    })
    it("rejects decimal marks", () => {
        let number: number = 2
        let marks: Array<number> = [1, 5.36, 3]
        let cell: CellModel = new CellModel(number, marks)
        expect(cell.getNumber()).to.be.equal(number)
        expect(cell.getMarks()).to.be.empty
    })
    it("rejects marks smaller than 1", () => {
        let number: number = 2
        let marks: Array<number> = [1, 2, 0]
        let cell: CellModel = new CellModel(number, marks)
        expect(cell.getNumber()).to.be.equal(number)
        expect(cell.getMarks()).to.be.empty
    })
    it("rejects marks greater than 9", () => {
        let number: number = 2
        let marks: Array<number> = [1, 24, 3]
        let cell: CellModel = new CellModel(number, marks)
        expect(cell.getNumber()).to.be.equal(number)
        expect(cell.getMarks()).to.be.empty
    })
})

describe("Cell Model – isBlank", () => {
    it("detects undefined number as a blank", () => {
        let number: number = undefined
        let cell: CellModel = new CellModel(number)
        expect(cell.isBlank()).to.be.true
    })
    it("detects an integer", () => {
        let number: number = 6
        let cell: CellModel = new CellModel(number)
        expect(cell.isBlank()).to.be.false
    })
})

describe("Cell Model – getNumber", () => {
    it("gets the introducided integer", () => {
        let number: number = 9
        let cell: CellModel = new CellModel(number)
        expect(cell.getNumber()).to.be.equal(number)
    })
    it("gets undefined when number not set", () => {
        let cell: CellModel = new CellModel()
        expect(cell.getNumber()).to.be.undefined
    })
    it("gets undefined when number is undefined", () => {
        let number: number = undefined
        let cell: CellModel = new CellModel(number)
        expect(cell.getNumber()).to.be.undefined
    })
    it("gets undefined when number is NaN", () => {
        let number: number = NaN
        let cell: CellModel = new CellModel(number)
        expect(cell.getNumber()).to.be.undefined
    })
})

describe("Cell Model – setNumber", () => {
    it("sets the integer when between 1 and 9", () => {
        let cell: CellModel = new CellModel()
        let number: number = 1
        expect(cell.setNumber(number)).to.be.equal(number)
        expect(cell.getNumber()).to.be.equal(number)
    })
    it("rejects number undefined", () => {
        let initialNumber = 6
        let cell: CellModel = new CellModel(initialNumber)
        let number: number = undefined
        expect(cell.setNumber(number)).to.be.undefined
        expect(cell.getNumber()).to.be.equal(initialNumber)
    })
    it("rejects NaN", () => {
        let cell: CellModel = new CellModel()
        let number: number = NaN
        expect(cell.setNumber(number)).to.be.undefined
        expect(cell.getNumber()).to.be.undefined
    })
    it("rejects decimal numbers", () => {
        let initialNumber = 6
        let cell: CellModel = new CellModel(initialNumber)
        let number: number = 8.3
        expect(cell.setNumber(number)).to.be.undefined
        expect(cell.getNumber()).to.be.equal(initialNumber)
    })
    it("rejects integers smaller than 1", () => {
        let cell: CellModel = new CellModel()
        let number: number = -13
        expect(cell.setNumber(number)).to.be.undefined
        expect(cell.getNumber()).to.be.undefined
    })
    it("rejects integers greater than 9", () => {
        let initialNumber = 6
        let cell: CellModel = new CellModel(initialNumber)
        let number: number = 21
        expect(cell.setNumber(number)).to.be.undefined
        expect(cell.getNumber()).to.be.equal(initialNumber)
    })
    it("cleans the marks when a new number is set", () => {
        let marks: Array<number> = [1, 2, 3]
        let cell: CellModel = new CellModel(undefined, marks)
        let number: number = 3
        expect(cell.setNumber(number)).to.be.equal(number)
        expect(cell.getNumber()).to.be.equal(number)
    })
})

describe("Cell Model – removeNumber", () => {
    it("removes and returns the number when it is defined", () => {
        let number: number = 5
        let cell: CellModel = new CellModel(number)
        expect(cell.removeNumber()).to.be.equal(number)
    })
    it("returns undefined whrn number was not defined", () => {
        let cell: CellModel = new CellModel()
        expect(cell.removeNumber()).to.be.undefined
    })
})

// describe("Cell Model – hasMarks", () => {})
// describe("Cell Model – getMarks", () => {})
// describe("Cell Model – setMark", () => {})
// describe("Cell Model – removeMark", () => {})
// describe("Cell Model – cleanMarks", () => {})