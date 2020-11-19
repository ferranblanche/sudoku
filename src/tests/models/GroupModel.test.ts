describe('GroupModel', () => {
    describe('constructor', () => {
        // rejects arrays of cells whose length is smaller than 9
        // rejects arrays of cells whose length is greater than 9
        // accepts arrays of cells whose length is equal than 9
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