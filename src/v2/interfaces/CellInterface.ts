export interface CellInterface {
    getNumber(): number
    setNumber(number: number): number
    removeNumber(): number
    getMarks(): Array<number>
    setMark(number: number): Array<number>
    removeMark(number: number): Array<number>
    cleanMarks(): Array<number>
}