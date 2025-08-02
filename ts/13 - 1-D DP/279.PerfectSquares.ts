/* 
https://leetcode.com/problems/perfect-squares/description/
*/

/* ------------------------------------------------------------------------------- */

// function numSquares(n: number): number {
//     const dp = Array(n + 1).fill(Infinity);
//     dp[0] = 0;

//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j ** 2 <= i; j++) {
//             dp[i] = Math.min(dp[i], 1 + dp[i - j ** 2]);
//         }
//     }

//     return dp[n];
// }

/*
T.C.: O(N * sqrt(N))
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

function numSquares(n: number): number {
    const memo: Record<number, number> = {};

    function dfs(i: number): number {
        if (i === 0) return 0;
        if (i in memo) return memo[i];
        let minSquareCount = Infinity;

        for (let j = 1; j ** 2 <= i; j++) {
            minSquareCount = Math.min(minSquareCount, 1 + dfs(i - j ** 2));
        }

        memo[i] = minSquareCount;

        return minSquareCount;
    }

    return dfs(n);
}

/*
T.C.: O(N * sqrt(N))
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const n = 12;

console.log(numSquares(n));
