/* 
https://leetcode.com/problems/delete-and-earn/description/
*/

/* ------------------------------------------------------------------------------- */

// Iterative
// function deleteAndEarn(nums: number[]): number {
//     const count: Record<number, number> = {};

//     nums.forEach((num) => {
//         count[num] = ++count[num] || 1;
//     });

//     nums = Array.from(new Set(nums.sort((a, b) => a - b)));
//     const dp = Array(nums.length).fill(0);

//     for (const [i, num] of nums.entries()) {
//         const currentEarn = num * count[num];

//         if (i > 0 && num - 1=== nums[i - 1]) {
//             dp[i] = Math.max(currentEarn + (dp[i - 2] || 0), dp[i - 1]);
//         } else {
//             dp[i] = currentEarn + (dp[i - 1] || 0);
//         }
//     }

//     return dp[nums.length - 1];
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// Iterative
// function deleteAndEarn(nums: number[]): number {
//     const count: Record<number, number> = {};

//     nums.forEach((num) => {
//         count[num] = ++count[num] || 1;
//     });

//     nums = Array.from(new Set(nums.sort((a, b) => a - b)));
//     let earn1 = 0,
//         earn2 = 0;

//     for (const [i, num] of nums.entries()) {
//         const currentEarn = num * count[num];

//         if (i > 0 && num - 1 === nums[i - 1]) {
//             const temp = earn2;
//             earn2 = Math.max(currentEarn + earn1, earn2);
//             earn1 = temp;
//         } else {
//             const temp = earn2;
//             earn2 = currentEarn + earn2;
//             earn1 = temp;
//         }
//     }

//     return earn2;
// }

/* ------------------------------------------------------------------------------- */

// Iterative
// function deleteAndEarn(nums: number[]): number {
//     if (nums.length === 0) {
//         return 0;
//     }

//     const maxNum = Math.max(...nums);

//     const sums = new Array(maxNum + 1).fill(0);
//     for (const num of nums) {
//         sums[num] += num;
//     }

//     const dp: number[] = new Array(maxNum + 1).fill(0);
//     dp[1] = sums[1];
//     for (let i = 2; i <= maxNum; i++) {
//         dp[i] = Math.max(dp[i - 1], dp[i - 2] + sums[i]);
//     }

//     return Math.max(dp[maxNum], dp[maxNum - 1]);
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// DFS
function deleteAndEarn(nums: number[]): number {
    const dp: Record<string, number> = {};
    const maxNum = Math.max(...nums);

    const sums = Array(maxNum + 1).fill(0);
    for (const num of nums) {
        sums[num] += num;
    }

    function dfs(i: number): number {
        if (i > maxNum) return 0;

        if (i in dp) return dp[i];

        const result = Math.max(dfs(i + 1), sums[i] + dfs(i + 2));

        dp[i] = result;

        return result;
    }

    return dfs(1);
}

/* ------------------------------------------------------------------------------- */

const nums = [8, 10, 4, 9, 1, 3, 5, 9, 4, 10];
console.log(deleteAndEarn(nums));
