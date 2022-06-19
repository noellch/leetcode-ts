/* Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.
 */

// function containsDuplicate(nums: number[]): boolean {
//     const set: Set<number> = new Set(nums)

//     return set.size !== nums.length
// }

function containsDuplicate(nums: number[]): boolean {
    // value: the number of presence
    const table: Map<number, number> = new Map()

    for (const num of nums) {
        if (table.has(num)) return true

        table.set(num, 1)
    }

    return false
}

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */
