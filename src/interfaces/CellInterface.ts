export interface CellInterface {
    row: number
    column: number
    block: number
    digit?: number
    candidates?: number[]
    clue: boolean
    addCandidate(candidate: number): void
    eraseCandidate(candidate: number): void
    clearCandidates(): void
}