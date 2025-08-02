/* 
https://leetcode.com/problems/triangle/description/
*/

/* ------------------------------------------------------------------------------- */

// //DFS
// function minimumTotal(triangle: number[][]): number {
//     const dp: Record<string, number> = {};

//     function dfs(row: number, col: number): number {
//         if (row === triangle.length - 1) return triangle[row][col];
//         if (`${row}-${col}` in dp) return dp[`${row}-${col}`];

//         const result = triangle[row][col] + Math.min(dfs(row + 1, col), dfs(row + 1, col + 1));

//         dp[`${row}-${col}`] = result;

//         return result;
//     }

//     return dfs(0, 0);
// }

/*
T.C.: O(N^2)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// Iterative
function minimumTotal(triangle: number[][]): number {
    const dp = Array(triangle[triangle.length - 1].length + 1).fill(0);

    for (let row = triangle.length - 1; row >= 0; row--) {
        triangle[row].forEach((n, i) => {
            dp[i] = n + Math.min(dp[i], dp[i + 1]);
        });
    }

    return dp[0];
}

/*
T.C.: O(N^2)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];

console.log(minimumTotal(triangle));
