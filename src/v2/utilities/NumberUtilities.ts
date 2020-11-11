export function isIntegerBetween1and9(num: number): boolean {
    return Number.isInteger(num) && num >= 1 && num <= 9
}

export function isArrayOfIntegersBetween1and9(array: Array<number>): boolean {
    for(let num of array) {
        if (!isIntegerBetween1and9(num)) {
            return false
        }
    }
    return true
}