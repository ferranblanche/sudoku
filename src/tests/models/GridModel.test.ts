describe('GridModel', () => {
    describe('constructor and cells', () => {
        // it('rejects matrix with less than 9 rows', () => { })
        // it('rejects matrix with more than 9 rows', () => { })
        // it('rejects matrix with less than 9 columns', () => { })
        // it('rejects matrix with more than 9 columns', () => { })
        // it('rejects matrix with decimals', () => { })
        // it('rejects matrix with integers smaller than 1', () => { })
        // it('rejects matrix with integers greater than 9', () => { })
        // it('rejects matrix with duplicated digits in a row', () => { })
        // it('rejects matrix with duplicated digits in a column', () => { })
        // it('rejects matrix with duplicated digits in a block', () => { })
        // it('rejects matrix without a solution', () => { })
        // it('each cell in the grid contains the specified digit when the matrix is valid and solvable', () => { })
    })
    // rows
    // columns
    // blocks
    // blanks
    // getCell
    // calculateCanidates
    // log
})

// Mocks
let validMatrix: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
let matrixWith5Rows: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1]
];
let matrixWith11Rows: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [0, 6, 0, 0, 0, 0, 2, 8, 0]
];
let matrixWith8Columns: number[][] = [
    [5, 3, 0, 0, 7, 0, 0],
    [6, 0, 0, 1, 9, 5, 0],
    [0, 9, 8, 0, 0, 0, 0],
    [8, 0, 0, 0, 6, 0, 0],
    [4, 0, 0, 8, 0, 3, 0],
    [7, 0, 0, 0, 2, 0, 0],
    [0, 6, 0, 0, 0, 0, 2],
    [0, 0, 0, 4, 1, 9, 0],
    [0, 0, 0, 0, 8, 0, 0]
];
let matrixWith10Columns: number[][] = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3, 0],
    [4, 0, 0, 8, 0, 3, 0, 0, 1, 0],
    [7, 0, 0, 0, 2, 0, 0, 0, 6, 0],
    [0, 6, 0, 0, 0, 0, 2, 8, 0, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5, 0],
    [0, 0, 0, 0, 8, 0, 0, 7, 9, 0]
];