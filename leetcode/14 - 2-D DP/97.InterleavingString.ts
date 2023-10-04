/* 
Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s and t is a configuration where s and t are divided into n and m 
substrings
 respectively, such that:

s = s1 + s2 + ... + sn
t = t1 + t2 + ... + tm
|n - m| <= 1
The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
Note: a + b is the concatenation of strings a and b.
*/

/* ------------------------------------------------------------------------------- */

//DFS
// function isInterleave(s1: string, s2: string, s3: string): boolean {
//     if (s1.length + s2.length !== s3.length) return false;
//     const map: Map<string, boolean> = new Map();

//     function dfs(i: number, j: number): boolean {
//         if (i === s1.length && j === s2.length) return true;

//         if (map.has(`${i}-${j}`)) return map.get(`${i}-${j}`) as boolean;

//         if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) return true;
//         if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) return true;

//         map.set(`${i}-${j}`, false);

//         return false;
//     }

//     return dfs(0, 0);
// }

/*
T.C.: O(2^(M+N))
S.C.: O(M+N)
遞迴樹的深度可能為 M+N
*/

/* ------------------------------------------------------------------------------- */

//DP
function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s1.length + s2.length !== s3.length) return false;
    const dp = new Array(s1.length + 1).fill([]).map(() => new Array(s2.length + 1).fill(false));

    dp[s1.length][s2.length] = true;

    for (let i = s1.length; i >= 0; i--) {
        for (let j = s2.length; j >= 0; j--) {
            if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) dp[i][j] = true;
            if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) dp[i][j] = true;
        }
    }

    return dp[0][0];
}

/*
T.C.: O(M * N)
S.C.: O(M * N)
*/

/* ------------------------------------------------------------------------------- */

const s1 = 'aabcc',
    s2 = 'dbbca',
    s3 = 'aadbbcbcac';

console.log(isInterleave(s1, s2, s3));
