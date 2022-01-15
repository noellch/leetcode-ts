/* Q: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array. */

//? Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

var maxSubArray = function (nums) {
    if (nums.length < 2) {
        return nums
    }

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1])
    }

    return Math.max(...nums)
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//* 主要思維：比較 nums[i] 跟 nums[i] + nums[i - 1]，若 nums[i] + nums[i-1] 較大則將 nums[i] = nums[i] + nums[i - 1]
//* 也就是說，nums[i] 每次都是跟目前和最大的 subarray + 自己相比。
//* loop 結束後，array 內的值都會是當下加到自己時的 subarray 和的最大值。最後比較 nums 內所有的值，得出 subarray 和的最大值。
