/* 
https://leetcode.com/problems/min-cost-climbing-stairs/description/
*/

/* ------------------------------------------------------------------------------- */

// function minCostClimbingStairs(cost: number[]): number {
//     for (let i = cost.length - 3; i >= 0; i--) {
//         cost[i] = Math.min(cost[i] + cost[i + 1], cost[i] + cost[i + 2]);
//     }

//     return Math.min(cost[0], cost[1]);
// }

/* ------------------------------------------------------------------------------- */

// iterative
function minCostClimbingStairs(cost: number[]): number {
    const dp = [cost[0], cost[1]];

    for (let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}

/* ------------------------------------------------------------------------------- */

// DFS
// function minCostClimbingStairs(cost: number[]): number {
//     const dp: { [key: number]: number } = {
//         0: cost[0],
//         1: cost[1],
//     };

//     function dfs(i: number): number {
//         if (i in dp) return dp[i];
//         const result = cost[i] + Math.min(dfs(i - 1), dfs(i - 2));
//         dp[i] = result;

//         return result;
//     }

//     return Math.min(dfs(cost.length - 1), dfs(cost.length - 2));
// }

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const cost = [10, 15, 20];

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

console.log(minCostClimbingStairs(cost));
