export interface CellInterface {
    readNumber(): number
    writeNumber(number: number): number
    readMarks(): Array<number>
    writeMark(mark: number): Array<number> 
    ereaseMark(mark: number): Array<number> 
}