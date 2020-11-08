import { CellInterface } from '../interfaces/CellInterface'

export class CellModel implements CellInterface {
    private number: number
    private marks: Array<number>
    constructor(number: number) {
        if(!this.validateNumber(number)) {
            this.number = 0
        }
        this.number = number
    }
    public readNumber(): number { return this.number }
    public writeNumber(number: number): number {
        if(!this.validateNumber(number)) {
            this.number = 0
        }
        this.number = number
        return this.number
    }
    public readMarks(): Array<number> { return this.marks }
    public writeMark (mark: number): Array<number> {
        this.ereaseMark(mark).push(mark)
        return this.marks
    }
    public ereaseMark(mark: number): Array<number> {
        this.marks = this.marks.filter((existingMark) => mark != existingMark)
        return this.marks
    }
    private validateNumber(number: number): boolean {
        return number && number >= 1 && number <= 9
    }
}