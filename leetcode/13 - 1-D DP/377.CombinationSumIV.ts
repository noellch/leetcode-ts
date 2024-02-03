/* 
https://leetcode.com/problems/combination-sum-iv/
*/

/* ------------------------------------------------------------------------------- */

// Iterative
// function combinationSum4(nums: number[], target: number): number {
//     const dp = Array(target + 1).fill(0);
//     dp[0] = 1;

//     for (let i = 1; i <= target; i++) {
//         for (const num of nums) {
//             dp[i] += dp[i - num] || 0;
//         }
//     }

//     return dp[target];
// }

/* 
組成 target(4) 的方式等於組成 4-1, 4-2, 4-3 的方式的加總
*/

/* ------------------------------------------------------------------------------- */

// DFS
function combinationSum4(nums: number[], target: number): number {
    const dp: Record<number, number> = {};

    function dfs(remain: number) {
        if (remain === target) return 1;
        if (remain in dp) return dp[remain];

        let count = 0;
        for (const num of nums) {
            if (remain + num <= target) {
                count += dfs(remain + num);
            }
        }

        dp[remain] = count;

        return count;
    }

    return dfs(0);
}

/* ------------------------------------------------------------------------------- */

const nums = [1, 2, 3],
    target = 4;
console.log(combinationSum4(nums, target));
