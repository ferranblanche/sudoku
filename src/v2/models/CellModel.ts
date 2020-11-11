import { CellInterface } from '../interfaces/CellInterface'
import { isIntegerBetween1and9, isArrayOfIntegersBetween1and9 } from '../utilities/NumberUtilities'

export class CellModel implements CellInterface {
    private number: number = undefined
    private marks: Array<number> = []

    constructor(number: number = undefined, marks: Array<number> = []) {
        if (isIntegerBetween1and9(number)) { this.number = number }
        if (isArrayOfIntegersBetween1and9(marks)) { this.marks = marks }
    }

    isBlank(): boolean {
        return !this.number
    }
    getNumber(): number {
        return this.number
    }
    setNumber(number: number): number {
        if (isIntegerBetween1and9(number)) {
            this.number = number
        }
        this.cleanMarks()
        return this.number
    }
    removeNumber(): number {
        let removedNumber = this.number
        this.number = undefined
        return removedNumber
    }
    hasMarks(): boolean {
        return !!this.marks.length
    }
    getMarks(): Array<number> {
        return this.marks
    }
    setMark(mark: number): Array<number> {
        if (this.number || this.marks.includes(mark) || !isIntegerBetween1and9(mark)) {
            return this.marks
        }
        this.marks.push(mark)
        this.marks.sort()
        return this.marks
    }
    removeMark(mark: number): Array<number> {
        if (this.marks.includes(mark)) {
            this.marks = this.marks.filter(storedMark => storedMark !== mark)
        }
        return this.marks
    }
    cleanMarks(): Array<number> {
        this.marks = []
        return this.marks
    }
}