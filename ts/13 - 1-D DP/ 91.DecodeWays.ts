/* 
https://leetcode.com/problems/decode-ways/
*/

/* ------------------------------------------------------------------------------- */

// DFS
// function numDecodings(s: string): number {
//     const dp = { [s.length]: 1 };
//     let result = 0;

//     function dfs(i: number) {
//         if (i in dp) return dp[i];
//         if (s[i] === '0') return 0;

//         result = dfs(i + 1);

//         if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && +s[i + 1] >= 0 && +s[i + 1] <= 6))) {
//             result += dfs(i + 2);
//         }

//         dp[i] = result;

//         return result;
//     }

//     return dfs(0);
// }

/*
T.C.: O(2^N) worst case，N 是 s 的長度，同時也是 recursion tree 的深度（在最差的情況下）。
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// DP
function numDecodings(s: string): number {
    const dp = { [s.length]: 1 };

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') dp[i] = 0;
        else dp[i] = dp[i + 1];

        if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && +s[i + 1] >= 0 && +s[i + 1] <= 6))) {
            dp[i] += dp[i + 2];
        }
    }

    return dp[0];
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const s = '126';

console.log(numDecodings(s));
