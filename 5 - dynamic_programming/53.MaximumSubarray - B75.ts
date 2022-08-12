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
        curSum = 0;

    for (let i = 0; i < nums.length; i++) {
        //
        //
        //
        //
        //
        if (curSum < 0) curSum = 0;

        curSum += nums[i];
        maxSub = Math.max(maxSub, curSum);
    }

    return maxSub;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
