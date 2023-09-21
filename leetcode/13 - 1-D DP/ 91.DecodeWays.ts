/* 
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.
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
