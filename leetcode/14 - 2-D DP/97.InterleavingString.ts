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

/**
 *
 * [   a  c  e  ''
 * a [ 0, 0, 0, 1 ],
 * b [ 0, 0, 0, 2 ],
 * c [ 0, 0, 0, 3 ],
 * ''[ 1, 2, 3, 0 ] ]
 *
 * 假設 word1 = '', word2 = 'abc'
 * 將 word1 轉成 word2 共需要 3 步驟。
 * 假設 word1 = 'ace', word2 = ''
 * 將 word1 轉成 word2 也總共需要 3 步驟。
 *
 * 假設 word1 = 'ace', word2 = 'abc' 以矩陣分析
 * 第四行列可視為空字串跟另一個字串比較的步驟數。
 * 情況一：
 * ‘a’ 相等，題目可簡化為 word1 = 'ce', word2 = 'bc' 的情況
 * 兩字母剛好相等時，其為首的字串轉為另一字串的步驟為對角線右下的數字。
 * 情況二：
 * ‘c’ 'b' 不相等，這時有三種動作可選擇
 * Insert => 插入 ‘b’ 題目簡化為  word1 = 'ce', word2 = 'c' 加一
 * Delete => 刪除 ‘c’ 題目簡化為  word1 = 'e', word2 = 'bc' 加一
 * Replace => 題目簡化為  word1 = 'e', word2 = 'c' 加一
 * 三種選項選擇一種，也因為題目要求最小步驟數，所以取三種中步驟數最少的。
 * 上述三種方法正好是矩陣中當下位置的右方數字、下方數字及右下對角線數字
 * bottom-up 計算後，取 2D 矩陣 [0][0] 位置的數字
 *
 */

/*
T.C.: O(M * N)
S.C.: O(M * N)
*/

/* ------------------------------------------------------------------------------- */

const s1 = 'aabcc',
    s2 = 'dbbca',
    s3 = 'aadbbcbcac';

console.log(isInterleave(s1, s2, s3));
