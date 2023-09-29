/* 
Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.
*/

/* ------------------------------------------------------------------------------- */

function canPartition(nums: number[]): boolean {
    const total = nums.reduce((sum, num) => sum + num, 0);

    if (total % 2 !== 0) return false;

    const target = total / 2;
    const memo: Map<string, boolean> = new Map();

    function dfs(idx: number, currentSum: number): boolean {
        if (currentSum === target) return true;
        if (idx === nums.length || currentSum > target) return false;
        const key = `${idx}-${currentSum}`;
        if (memo.has(key)) return memo.get(key) as boolean;

        const result = dfs(idx + 1, currentSum + nums[idx]) || dfs(idx + 1, currentSum);
        memo.set(key, result);

        return result;
    }

    return dfs(0, 0);
}

/* ------------------------------------------------------------------------------- */

// function canPartition(nums: number[]): boolean {
//     const total = nums.reduce((sum, num) => sum + num, 0);

//     if (total % 2 !== 0) return false;

//     const target = total / 2;

//     const dp = new Array(target + 1).fill(false);
//     dp[0] = true;

//     for (const num of nums) {
//         for (let i = target; i >= num; i--) {
//             dp[i] = dp[i] || dp[i - num];
//         }
//     }

//     return dp[target];
// }

/* ------------------------------------------------------------------------------- */

// function canPartition(nums: number[]): boolean {
//     const total = nums.reduce((sum, num) => sum + num, 0);

//     if (total % 2 !== 0) return false;

//     const target = total / 2;

//     let set: Set<number> = new Set();
//     set.add(0);

//     for (const num of nums) {
//         const newSet: Set<number> = new Set();

//         for (const t of set) {
//             newSet.add(num + t);
//             newSet.add(t);
//         }

//         set = newSet;
//     }

//     return set.has(target);
// }

/* ------------------------------------------------------------------------------- */

const nums = [1, 5, 11, 5];
// const nums = [1, 2, 3, 5];
// const nums = [1, 2, 5];
console.log(canPartition(nums));
