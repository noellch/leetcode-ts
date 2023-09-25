/* 
Given an integer array nums, return the length of the longest strictly increasing 
subsequence.
*/

/* ------------------------------------------------------------------------------- */

function lengthOfLIS(nums: number[]): number {
    const dp = Array.from({ length: nums.length }, () => 1);

    for (let i = nums.length; i >= 0; i--) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
    }

    return Math.max(...dp);
}

/*
T.C.: O(N ^ 2)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
// const nums = [0, 1, 0, 3, 2, 3];
// const nums = [7, 7, 7, 7, 7, 7, 7];

console.log(lengthOfLIS(nums));
