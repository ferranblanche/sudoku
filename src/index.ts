import { SudokuModel } from './models'

export { SudokuModel as Sudoku } from './models'

const sudoku = new SudokuModel().solve('all').grid.log()