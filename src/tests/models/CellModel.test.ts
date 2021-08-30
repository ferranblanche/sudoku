import { expect } from 'chai'
import { CellModel } from '../../models'

describe('CellModel', () => {
    describe('Row', () => {
        it('rejects row values smaller than 0', () => {
            let cell = new CellModel(0, 4)
            expect(cell).to.be.empty
        })
        it('rejects row values greater than 9', () => {
            let cell = new CellModel(10, 4)
            expect(cell).to.be.empty
        })
    })
    describe('Column', () => {
        it('rejects column values smaller than 0', () => {
            let cell = new CellModel(3, -4)
            expect(cell).to.be.empty
        })
        it('rejects column values greater than 9', () => {
            let cell = new CellModel(3, 93)
            expect(cell).to.be.empty
        })
    })
    describe('Band', () => {
        it('returns undefined when row is not defined', () => {
            let cell = new CellModel(undefined,3)
            expect(cell.band).to.be.undefined
        })
        it('returns undefined when row is smaller than 1', () => {
            let cell = new CellModel(-5,3)
            expect(cell.band).to.be.undefined
        })
        it('returns undefined when row is greater than 9', () => {
            let cell = new CellModel(18,3)
            expect(cell.band).to.be.undefined
        })
        it('returns band 1 when row is between 1 and 3', () => {
            let cell1 = new CellModel(1,3)
            expect(cell1.band).to.be.equal(1)
            let cell2 = new CellModel(2,5)
            expect(cell2.band).to.be.equal(1)
            let cell3 = new CellModel(3,8)
            expect(cell3.band).to.be.equal(1)
        })
        it('returns band 1 when row is between 4 and 6', () => {
            let cell1 = new CellModel(4,3)
            expect(cell1.band).to.be.equal(2)
            let cell2 = new CellModel(5,5)
            expect(cell2.band).to.be.equal(2)
            let cell3 = new CellModel(6,8)
            expect(cell3.band).to.be.equal(2)
        })
        it('returns band 1 when row is between 7 and 9', () => {
            let cell1 = new CellModel(7,3)
            expect(cell1.band).to.be.equal(3)
            let cell2 = new CellModel(8,5)
            expect(cell2.band).to.be.equal(3)
            let cell3 = new CellModel(9,8)
            expect(cell3.band).to.be.equal(3)
        })
    })
    describe('Stack', () => {
        it('returns undefined when column is not defined', () => {
            let cell = new CellModel(3, undefined)
            expect(cell.stack).to.be.undefined
        })
        it('returns undefined when column is smaller than 1', () => {
            let cell = new CellModel(3,-5)
            expect(cell.stack).to.be.undefined
        })
        it('returns undefined when column is greater than 9', () => {
            let cell = new CellModel(3,18)
            expect(cell.stack).to.be.undefined
        })
        it('returns stack 1 when column is between 1 and 3', () => {
            let cell1 = new CellModel(8,1)
            expect(cell1.stack).to.be.equal(1)
            let cell2 = new CellModel(4,2)
            expect(cell2.stack).to.be.equal(1)
            let cell3 = new CellModel(1,3)
            expect(cell3.stack).to.be.equal(1)
        })
        it('returns stack 1 when column is between 4 and 6', () => {
            let cell1 = new CellModel(8,4)
            expect(cell1.stack).to.be.equal(2)
            let cell2 = new CellModel(4,5)
            expect(cell2.stack).to.be.equal(2)
            let cell3 = new CellModel(1,6)
            expect(cell3.stack).to.be.equal(2)
        })
        it('returns stack 1 when column is between 7 and 9', () => {
            let cell1 = new CellModel(8,7)
            expect(cell1.stack).to.be.equal(3)
            let cell2 = new CellModel(4,8)
            expect(cell2.stack).to.be.equal(3)
            let cell3 = new CellModel(1,9)
            expect(cell3.stack).to.be.equal(3)
        })
    })
    describe('Digit', () => {
        it('returns undefined digit when not defined', () => {
            let cell = new CellModel(3, 7)
            expect(cell.digit).to.be.undefined
        })
        it('returns undefined digit when NaN or undefined', () => {
            let cell = new CellModel(3, 7, NaN)
            expect(cell.digit).to.be.undefined
        })
        it('returns undefined digit when digit smaller than 1', () => {
            let cell = new CellModel(3, 7, 0)
            expect(cell.digit).to.be.undefined
        })
        it('returns undefined digit when digit greater than 9', () => {
            let cell = new CellModel(3, 7, 15)
            expect(cell.digit).to.be.undefined
        })
        it('returns undefined digit when decimal', () => {
            let cell = new CellModel(3, 7, 1.5)
            expect(cell.digit).to.be.undefined
        })
        it('returns the defined digit when greater than 1 and smaller than 9', () => {
            let digit = 5
            let cell = new CellModel(3, 7, digit)
            expect(cell.digit).to.be.equal(digit)
        })
    })
    describe('Digit (edit)', () => {
        it('keeps digit when number under is undefined', () => {
            let digit = 3
            let cell = new CellModel(3,6,digit)
            cell.writeDigit(undefined)
            expect(cell.digit).to.be.equal(digit)
        })
        it('keeps digit when number under is decimal', () => {
            let digit = 3
            let cell = new CellModel(3,6,digit)
            cell.writeDigit(5.9)
            expect(cell.digit).to.be.equal(digit)
        })
        it('keeps digit when number under is smaller than 1', () => {
            let digit = 3
            let cell = new CellModel(3,6,digit)
            cell.writeDigit(-3)
            expect(cell.digit).to.be.equal(digit)
        })
        it('keeps digit when number under is greater than 9', () => {
            let digit = 3
            let cell = new CellModel(3,6,digit)
            cell.writeDigit(99)
            expect(cell.digit).to.be.equal(digit)
        })
        it('keeps digit when the cell is a clue', () => {
            let originalDigit = 3
            let cell = new CellModel(3,6, originalDigit)
            expect(cell.digit).to.be.equal(originalDigit)
            let newDigit = 8
            cell.writeDigit(newDigit)
            expect(cell.digit).to.be.equal(originalDigit)
        })
        it('edits digit when writing a number greater than 1 and smaller than 9 (in a cell that is not a clue)', () => {
            let cell = new CellModel(3,6)
            let originalDigit = 3
            cell.writeDigit(originalDigit)
            expect(cell.digit).to.be.equal(originalDigit)
            let newDigit = 8
            cell.writeDigit(newDigit)
            expect(cell.digit).to.be.equal(newDigit)
        })
    })
    describe('isClue', () => {
        it('undefined digits cannot be clues', () => {
            let cell = new CellModel(2,3,undefined)
            expect(cell.clue).to.be.false
        })
        it('decimal digits cannot be clues', () => {
            let cell = new CellModel(2,3,3.6)
            expect(cell.clue).to.be.false
        })
        it('integer digits smaller than 1 cannot be clues', () => {
            let cell = new CellModel(2,3,0)
            expect(cell.clue).to.be.false
        })
        it('integer digits greater than 9 cannot be clues', () => {
            let cell = new CellModel(2,3,15)
            expect(cell.clue).to.be.false
        })
        it('integer digits between 1 and 9 marked as clue are clues', () => {
            let cell = new CellModel(2,3,8)
            expect(cell.clue).to.be.true
        })
    })
    describe('Marks (Add)', () => {
        it('rejects marks when digit is defined', () => {
            let cell = new CellModel(3,7,3)
            let mark = 6
            cell.writeMark(mark)
            expect(cell.marks).to.be.empty
        })
        it('rejects undefined marks', () => {
            let cell = new CellModel(3,7)
            cell.writeMark(5)
            let mark = undefined
            cell.writeMark(mark)
            expect(cell.marks).to.not.include(mark)
        })
        it('rejects decimal marks', () => {
            let cell = new CellModel(3,7)
            let mark = 6.84
            cell.writeMark(mark)
            expect(cell.marks).to.be.empty
        })
        it('rejects integer marks smaller than 1', () => {
            let cell = new CellModel(3,7)
            let mark = -1
            cell.writeMark(mark)
            expect(cell.marks).to.be.empty
        })
        it('rejects integer marks greater than 9', () => {
            let cell = new CellModel(3,7)
            let mark = 68
            cell.writeMark(mark)
            expect(cell.marks).to.be.empty
        })
        it('rejects integer marks when they were already added', () => {
            let cell = new CellModel(3,7)
            let mark = 4
            cell.writeMark(mark)
            cell.writeMark(mark)
            expect(cell.marks).to.have.length(1).to.include(mark)
        })
        it('accepts integer marks greater than 1 and smaller than 9 when digit is not defined', () => {
            let cell = new CellModel(3,7)
            let mark = 6
            cell.writeMark(mark)
            expect(cell.marks).to.include(mark)
        })
    })
    describe('Marks (Erase)', () => {
        it('does nothing when provided mark is undefined', () => {
            let cell = new CellModel(3,7)
            let marks = [3,6,7]
            marks.forEach(_mark => cell.writeMark(_mark))
            let prevMarks = cell.marks
            let mark = undefined
            cell.eraseMark(mark)
            expect(cell.marks).to.equal(prevMarks)
        })
        it('does nothing when provided mark is decimal', () => {
            let cell = new CellModel(3,7)
            let marks = [3,6,7]
            marks.forEach(_mark => cell.writeMark(_mark))
            let prevMarks = cell.marks
            let mark = 8.9
            cell.eraseMark(mark)
            expect(cell.marks).to.equal(prevMarks)
        })
        it('does nothing when provided mark is integer smaller than 1', () => {
            let cell = new CellModel(3,7)
            let marks = [3,6,7]
            marks.forEach(_mark => cell.writeMark(_mark))
            let prevMarks = cell.marks
            let mark = -12
            cell.eraseMark(mark)
            expect(cell.marks).to.equal(prevMarks)
        })
        it('does nothing when provided mark is integer greater than 9', () => {
            let cell = new CellModel(3,7)
            let marks = [3,6,7]
            marks.forEach(_mark => cell.writeMark(_mark))
            let prevMarks = cell.marks
            let mark = 53
            cell.eraseMark(mark)
            expect(cell.marks).to.equal(prevMarks)
        })
        it('erases mark when provided number is integer greater than 1 and smaller than 9', () => {
            let cell = new CellModel(3,7)
            let mark = 3
            let marks = [mark,6,7]
            marks.forEach(_mark => cell.writeMark(_mark))
            cell.eraseMark(mark)
            expect(cell.marks).to.not.include(mark)
        })
    })
    describe('Marks (Clear)', () => {
        it('erases all marks', () => {
            let cell = new CellModel(3,7)
            let marks = [3,6,7]
            marks.forEach(_mark => cell.writeMark(_mark))
            cell.clearMarks()
            expect(cell.marks).to.be.empty
        })
    })
})
