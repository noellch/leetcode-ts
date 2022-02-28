/** Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. */

// solution 1
// function missingNumber(nums: number[]) {
//     const map: { [key: number]: number } = {}

//     for (const num of nums) {
//         map[num] = 1
//     }

//     for (let i = 0; i <= nums.length; i++) {
//         if (!map[i]) return i
//     }
// }

// solution 2
// function missingNumber(nums: number[]) {
//     const sum = nums.reduce((a, c) => a + c, 0)
//     const sum1 = ((nums.length + 1) * nums.length) / 2
//     return sum1 - sum
// }

// solution 3
function missingNumber(nums: number[]) {
    let missing = 0

    for (let i = 0; i <= nums.length; i++) {
        const temp = i ^ nums[i]
        missing ^= temp
        // or do this =>  missing ^= i ^ nums[i]
    }

    return missing
}

const nums = [3, 0, 1]
console.log(missingNumber(nums))
