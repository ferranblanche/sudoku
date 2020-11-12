import { CoordinatesType } from "../types/CoordinatesType"
import { CellType } from "../types/CellType";

export interface GroupInterface {
    isValid(): boolean
    getBlanks(): Array<CoordinatesType>
    getNumbers(): Array<number>
    setNumber(position: CoordinatesType, number: number): Array<CellType>
    removeNumber(): Array<CellType>
    getMarks(): Array<Array<number>>
    setMark(number: number): Array<CellType>
    removeMark(number: number): Array<CellType>
    cleanMarks(): Array<CellType>
}