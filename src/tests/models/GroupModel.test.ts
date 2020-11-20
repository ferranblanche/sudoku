import { expect } from "chai"
import { CellModel, GroupModel } from "../../models"

describe('GroupModel', () => {
    describe('constructor', () => {
        it('rejects arrays of cells whose length is smaller than 9', () => {
            let group = new GroupModel(cells.slice(1, 8))
            expect(group.cells).to.be.empty
        })
        it('rejects arrays of cells whose length is greater than 9', () => {
            let extraCell: CellModel = new CellModel(3, 10)
            let group = new GroupModel(cells.concat([extraCell]))
            expect(group.cells).to.be.empty
        })
        it('rejects arrays of cells whose length is equal than 9 when they contain duplicate digits', () => {
            let group = new GroupModel(cellsWithDuplicate)
            expect(group.cells).to.be.empty
        })
        it('accepts arrays of cells whose length is equal than 9', () => {
            let group = new GroupModel(cells)
            expect(group.cells).to.equal(cells)
        })
    })
    describe('includesDigit', () => {
        it('returns false when provided digit is undefined', () => {
            let group = new GroupModel(cells)
            let digit = undefined
            expect(group.includesDigit(digit)).to.be.false
        })
        it('returns false when provided digit is decimal', () => {
            let group = new GroupModel(cells)
            let digit = 1.89
            expect(group.includesDigit(digit)).to.be.false
        })
        it('returns false when provided digit is integer smaller than 1', () => {
            let group = new GroupModel(cells)
            let digit = 0
            expect(group.includesDigit(digit)).to.be.false
        })
        it('returns false when provided digit is integer greater than 9', () => {
            let group = new GroupModel(cells)
            let digit = 18
            expect(group.includesDigit(digit)).to.be.false
        })
        it('returns false when provided digit is integer greater than 1 and smaller than 9 but it is not on the list', () => {
            let group = new GroupModel(cells)
            let digit = 3
            expect(group.includesDigit(digit)).to.be.false
        })
        it('returns true when provided digit is integer greater than 1 and smaller than 9 and it is on the list', () => {
            let group = new GroupModel(cells)
            let digit = 8
            expect(group.includesDigit(digit)).to.be.true
        })
    })
    describe('filterCellsByCandidate', () => {
        it('returns empty when candidate is undefined', () => {
            let group = new GroupModel(cells)
            let candidate = undefined
            expect(group.filterCellsByCandidate(candidate)).to.be.empty
        })
        it('returns empty when candidate is decimal', () => {
            let group = new GroupModel(cells)
            let candidate = 5.36
            expect(group.filterCellsByCandidate(candidate)).to.be.empty
        })
        it('returns empty when candidate is integer smaller than 1', () => {
            let group = new GroupModel(cells)
            let candidate = -2
            expect(group.filterCellsByCandidate(candidate)).to.be.empty
        })
        it('returns empty when candidate is integer greater than 9', () => {
            let group = new GroupModel(cells)
            let candidate = 12
            expect(group.filterCellsByCandidate(candidate)).to.be.empty
        })
        it('returns empty when candidate is integer greater than 1 and smaller than 9 but not in any cell', () => {
            let group = new GroupModel(cells)
            let candidate = 6
            expect(group.filterCellsByCandidate(candidate)).to.be.empty
        })
        it('returns cells when candidate is integer greater than 1 and smaller than 9 and it is on at least one cell', () => {
            let group = new GroupModel(cells)
            let candidate = 5
            let filteredGroup = cells.filter(cell => cell.candidates.includes(candidate))
            expect(group.filterCellsByCandidate(candidate)).to.deep.equal(filteredGroup)
        })
    })
})

// Mocks
let cells = [
    new CellModel(3, 1, 9),
    new CellModel(3, 2, 6),
    new CellModel(3, 3).addCandidate(4).addCandidate(3),
    new CellModel(3, 4).addCandidate(1).addCandidate(5).addCandidate(7),
    new CellModel(3, 5).addCandidate(4).addCandidate(5),
    new CellModel(3, 6, 8),
    new CellModel(3, 7).addCandidate(4).addCandidate(7),
    new CellModel(3, 8, 2),
    new CellModel(3, 9).addCandidate(4).addCandidate(5).addCandidate(1)
]
let cellsWithDuplicate = [
    new CellModel(3, 1, 9),
    new CellModel(3, 2, 9),
    new CellModel(3, 3).addCandidate(4).addCandidate(3),
    new CellModel(3, 4).addCandidate(1).addCandidate(5).addCandidate(7),
    new CellModel(3, 5).addCandidate(4).addCandidate(5),
    new CellModel(3, 6, 8),
    new CellModel(3, 7).addCandidate(4).addCandidate(7),
    new CellModel(3, 8, 2),
    new CellModel(3, 9).addCandidate(4).addCandidate(5).addCandidate(1)
]