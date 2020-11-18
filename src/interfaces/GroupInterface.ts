import { CellModel } from "../models";

export interface GroupInterface {
    isValid(candidate: number): boolean
    filterByCandidate(candidate: number): CellModel[]
    print(): void
}