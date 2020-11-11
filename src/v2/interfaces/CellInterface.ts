export interface CellInterface {
    isBlank(): boolean
    getNumber(): number
    setNumber(number: number): number
    removeNumber(): number
    hasMarks(): boolean
    getMarks(): Array<number>
    setMark(number: number): Array<number>
    removeMark(number: number): Array<number>
    cleanMarks(): Array<number>
}