/* 
https://leetcode.com/problems/longest-palindromic-subsequence/description/
*/

/* ------------------------------------------------------------------------------- */

// function longestPalindromeSubseq(s: string): number {
//     const t = s.split('').reverse().join('');
//     const dp = Array.from({ length: s.length + 1 }, () => new Array(t.length + 1).fill(0));

//     for (let i = s.length - 1; i >= 0; i--) {
//         for (let j = t.length - 1; j >= 0; j--) {
//             if (s[i] === t[j]) {
//                 dp[i][j] = 1 + dp[i + 1][j + 1];
//             } else {
//                 dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
//             }
//         }
//     }

//     return dp[0][0];
// }

/* ------------------------------------------------------------------------------- */

function longestPalindromeSubseq(s: string): number {
    const memo: Record<string, number> = {};

    function dfs(i: number, j: number) {
        if (i < 0 || j === s.length) return 0;
        if (`${i}-${j}` in memo) return memo[`${i}-${j}`];

        if (s[i] === s[j]) {
            let length = 1;
            if (i !== j) length = 2;
            memo[`${i}-${j}`] = length + dfs(i - 1, j + 1);
        } else {
            memo[`${i}-${j}`] = Math.max(dfs(i - 1, j), dfs(i, j + 1));
        }

        return memo[`${i}-${j}`];
    }

    for (let i = 0; i < s.length; i++) {
        dfs(i, i);
        dfs(i, i + 1);
    }

    return Math.max(...Object.values(memo));
}

/* ------------------------------------------------------------------------------- */
const s = 'bbbab';

console.log(longestPalindromeSubseq(s));
