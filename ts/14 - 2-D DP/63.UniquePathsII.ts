/* 
https://leetcode.com/problems/unique-paths-ii/description/
*/

/* ------------------------------------------------------------------------------- */

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length,
        n = obstacleGrid[0].length;
    const memo: Record<string, number> = { [`${m - 1}-${n - 1}`]: 1 };

    function dfs(r: number, c: number) {
        if (r >= m || c >= n || obstacleGrid[r][c] === 1) return 0;
        if (`${r}-${c}` in memo) return memo[`${r}-${c}`];

        memo[`${r}-${c}`] = dfs(r + 1, c) + dfs(r, c + 1);

        return memo[`${r}-${c}`];
    }

    return dfs(0, 0);
}

/*
T.C.: O(M * N)
S.C.: O(M * N)
*/
/* ------------------------------------------------------------------------------- */

// DP
// function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
//     const m = obstacleGrid.length,
//         n = obstacleGrid[0].length;

//     let dp = new Array(n).fill(0);
//     dp[n - 1] = 1;

//     for (let r = m - 1; r >= 0; r--) {
//         for (let c = n - 1; c >= 0; c--) {
//             if (obstacleGrid[r][c] === 1) {
//                 dp[c] = 0;
//             } else if (c < n - 1) {
//                 dp[c] = dp[c + 1] + dp[c];
//             }
//         }
//     }

//     return dp[0];
// }

/*
T.C.: O(M * N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */
const obstacleGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
];
// const obstacleGrid = [
//     [0, 1],
//     [0, 0],
// ];
console.log(uniquePathsWithObstacles(obstacleGrid));
