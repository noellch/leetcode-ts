/* A: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. */

// var containsDuplicate = function (nums) {
//     return new Set(nums).size < nums.length
// }

var containsDuplicate = function (nums: number[]): boolean {
    const table: Map<number, number> = new Map()

    for (const num of nums) {
        if (table.has(num)) return true

        table.set(num, 1)
    }

    return false
}

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

console.log(containsDuplicate(nums))
