import { SudokuModel } from './models'

export { SudokuModel as Sudoku } from './models'

const sudoku = new SudokuModel().generate().solve('all').grid.log()