import { expect } from "chai"
import { CellModel, GroupModel } from "../../models"

describe('GroupModel', () => {
    describe('constructor', () => {
        it('rejects arrays of cells whose length is smaller than 9', () => {
            let group = new GroupModel(cells.slice(1,8))
            expect(group.cells).to.be.empty
        })
        it('rejects arrays of cells whose length is greater than 9', () => {
            let extraCell: CellModel = new CellModel(3,10)
            let group = new GroupModel(cells.concat([extraCell]))
            expect(group.cells).to.be.empty
        })
        it('accepts arrays of cells whose length is equal than 9', () => {
            let group = new GroupModel(cells)
            expect(group.cells).to.equal(cells)
        })
    })
    describe('includesDigit', () => {
        // returns false when provided candidate / digit is undefined
        // returns false when provided candidate / digit is decimal
        // returns false when provided candidate / digit is integer smaller than 1
        // returns false when provided candidate / digit is integer greater than 9
        // returns false when provided candidate / digit is integer greater than 1 and smaller than 9 but it is not on the list
        // returns true when provided candidate / digit is integer greater than 1 and smaller than 9 and it is on the list
    })
    describe('filterCellsByCandidate', () => {
        // returns empty when candidate is undefined
        // returns empty when candidate is decimal
        // returns empty when candidate is integer smaller than 1
        // returns empty when candidate is integer greater than 9
        // returns empty when candidate is integer greater than 1 and smaller than 9 but not in any cell
        // returns cells when candidate is integer greater than 1 and smaller than 9 and it is on at least one cell
    })
})

// Mocks
let cells = [
    new CellModel(3,1,9),
    new CellModel(3,2,6),
    new CellModel(3,3).addCandidate(4).addCandidate(3),
    new CellModel(3,4).addCandidate(1).addCandidate(5).addCandidate(7),
    new CellModel(3,5).addCandidate(4).addCandidate(5),
    new CellModel(3,6,8),
    new CellModel(3,7).addCandidate(4).addCandidate(7),
    new CellModel(3,8,2),
    new CellModel(3,9).addCandidate(4).addCandidate(5).addCandidate(1)
]