export function calculateBlock(row: number, column: number): number {
    let band = Math.floor((row - 1) / 3) + 1
    let stack = Math.floor((column - 1) / 3) + 1
    let block = stack + ((band - 1) * 3)
    return block
}