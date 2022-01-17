/* Q: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

// var twoSum = function (nums: number[], target: number): number[] {
//     let map: { [key: number]: number } = {}
//     let result: number[] = []
//     for (let i = 0; i < nums.length; i++) {
//         if (map[nums[i]] >= 0) {
//             result = [map[nums[i]], i]
//         }

//         map[target - nums[i]] = i
//     }
//     return result
// }

var twoSum = function (nums: number[], target: number): number[] {
    const table: Map<number, number> = new Map()
    let result: number[] = []

    nums.forEach((num, i) => {
        if (table.has(num)) {
            result = [table.get(num) as number, i]
        } else {
            table.set(target - num, i)
        }
    })

    return result
}

console.log(twoSum([2, 7, 11, 15], 9))
