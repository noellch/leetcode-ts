/** Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. */

// function missingNumber(nums: number[]) {
//     type Table = {
//         [key: number]: number
//     }

//     const len = nums.length
//     const table: Table = {}

//     for (const num of nums) {
//         table[num] = 1
//     }

//     for (let i = 0; i <= len; i++) {
//         if (!table[i]) {
//             return i
//         }
//     }
// }

// function missingNumber(nums: number[]) {
//     return (nums.length * (nums.length + 1)) / 2 - nums.reduce((c, a) => c + a, 0)
// }

function missingNumber(nums: number[]) {
    let missing = 0
    for (let i = 0; i <= nums.length; i++) {
        missing ^= i ^ nums[i]
    }

    return missing
}

const nums = [3, 0, 1]
console.log(missingNumber(nums))
