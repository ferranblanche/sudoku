import { CellInterface } from "../interfaces"
import { isIntegerBetween } from "../utilities"

export class CellModel implements CellInterface {
    private _row: number
    private _column: number
    private _band: number
    private _stack: number
    private _digit?: number
    private _clue: boolean
    private _candidates?: number[]

    constructor(row: number, column: number, digit?: number, isClue?: boolean) {
        if (isIntegerBetween(row) && isIntegerBetween(column)) {
            this._row = row
            this._column = column
            this._band = Math.floor((row - 1) / 3) + 1
            this._stack = Math.floor((column - 1) / 3) + 1
            this.digit = isIntegerBetween(digit) ? digit : undefined
            this._clue = isIntegerBetween(digit) ? isClue : false
            this._candidates = []
        }
    }

    public get row(): number {
        return this._row
    }
    public get column(): number {
        return this._column
    }
    public get band(): number {
        return this._band
    }
    public get stack(): number {
        return this._stack
    }
    public get block(): number {
        return this._stack + ((this._band - 1) * 3)
    }
    public get digit(): number {
        return this._digit
    }
    public set digit(digit: number) {
        if (isIntegerBetween(digit) && !this._clue) {
            this._digit = digit
            this._candidates = []
        }
    }
    public get candidates(): number[] {
        return this._candidates
    }
    public get clue(): boolean {
        return this._clue
    }
    public addCandidate(candidate: number): CellModel {
        if (!this._digit && !this._candidates.includes(candidate) && isIntegerBetween(candidate)) { this._candidates.push(candidate) }
        return this
    }
    public eraseCandidate(candidate: number): CellModel {
        if (isIntegerBetween(candidate) && this._candidates.includes(candidate)) { this._candidates = this._candidates.filter(_cand => _cand !== candidate) }
        return this
    }
    public clearCandidates(): CellModel {
        this._candidates = []
        return this
    }
}