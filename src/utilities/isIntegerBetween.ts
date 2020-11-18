export function isIntegerBetween(num: number, min: number = 1, max: number = 9): boolean {
    return Number.isInteger(num) && num >= min && num <= max
}