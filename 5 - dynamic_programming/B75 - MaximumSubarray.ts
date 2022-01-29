/* Q: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array. */

//? Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// function maxSubArray(nums: number[]): number {
//     if (nums.length <= 1) return nums[0]

//     for (let i = 1; i < nums.length; i++) {
//         nums[i] = Math.max(nums[i] + nums[i - 1], nums[i])
//     }

//     return Math.max(...nums)
// }

function maxSubArray(nums: number[]): number {
    let maxSub = nums[0],
        curSum = 0

    for (let i = 0; i < nums.length; i++) {
        // 不斷追蹤每個元素的和，若等於負數，可以解讀為對後續的最大和沒有幫助，
        // ex： [1, 2, -4 ,5]
        // 1 + 2 = 3 目前最大和 3
        // 3 + -4 = -1 目前最大和 3，但 -1 對於後續構成最大和沒有幫助，所以重設 curSum = 0
        // 所以 0 + 5 = 5 ，最大的 contiguous subarray sum 等於 5
        if (curSum < 0) curSum = 0

        curSum += nums[i]
        maxSub = Math.max(maxSub, curSum)
    }

    return maxSub
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
