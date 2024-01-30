/* 
Given an integer array nums, return the length of the longest strictly increasing 
subsequence.
*/

/* ------------------------------------------------------------------------------- */

// DFS
function lengthOfLIS(nums: number[]): number {
    const dp: Record<number, number> = {};
    let result = 0;
    const n = nums.length;

    function dfs(i: number): number {
        if (i === n - 1) {
            return 1;
        }
        if (i in dp) return dp[i];

        let result = 1;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] > nums[i]) {
                result = Math.max(result, 1 + dfs(j));
            }
        }
        dp[i] = result;
        return result;
    }

    for (let k = 0; k < n; k++) {
        result = Math.max(result, dfs(k));
    }

    return result;
}

/*
T.C.: O(N ^ 2)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// Iterative
// function lengthOfLIS(nums: number[]): number {
//     const dp = Array.from({ length: nums.length }, () => 1); // 從每個 index 開始最長的連續字串數

//     for (let i = nums.length; i >= 0; i--) {
//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] > nums[i]) {
//                 dp[i] = Math.max(dp[j] + 1, dp[i]);
//             }
//         }
//     }

//     return Math.max(...dp);
// }

/*
T.C.: O(N ^ 2)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
// const nums = [0, 1, 0, 3, 2, 3];
// const nums = [7, 7, 7, 7, 7, 7, 7];

console.log(lengthOfLIS(nums));
