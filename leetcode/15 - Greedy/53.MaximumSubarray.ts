/* 
https://leetcode.com/problems/maximum-subarray/description/
*/

/* 
Kadane's Algorithm
*/

/* ------------------------------------------------------------------------------- */

function maxSubArray(nums: number[]): number {
    let maxSum = nums[0];
    let currentSum = 0;

    for (const num of nums) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// const nums = [1];
// const nums = [5, 4, -1, 7, 8];

console.log(maxSubArray(nums));
