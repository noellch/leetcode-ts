/* 
https://leetcode.com/problems/longest-common-subsequence/description/
*/

//2D-DP bottom-up
/* ------------------------------------------------------------------------------- */

// function longestCommonSubsequence(text1: string, text2: string): number {
//     const dp = Array.from({ length: text1.length + 1 }, () => new Array(text2.length + 1).fill(0));

//     for (let i = dp.length - 2; i >= 0; i--) {
//         for (let j = dp[i].length - 2; j >= 0; j--) {
//             if (text1[i] === text2[j]) {
//                 dp[i][j] = 1 + dp[i + 1][j + 1];
//             } else {
//                 dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
//             }
//         }
//     }

//     return dp[0][0];
// }

/* 
設計一個 2D 矩陣，列為 text2 的各個字母，行為 text1 的各個字母。
最後一行一列為 boundary(0)

若兩個字母相等，則該矩陣位置 dp[i][j] 會等於對角線的數字加 1。
對角線上的數字也就是上一個字母也相等的情況。

若兩個字母不相等，則該矩陣位置 dp[i][j] 會等於右手邊 dp[i][j + 1] 和下方 dp[i + 1][j] 的字母數量的最大值
也就是不相等時的兩種情況的 common subsequence string 數量的最大值

/**
[   a  c  e
a [ 0, 0, 0, 0 ],
b [ 0, 0, 0, 0 ],
c [ 0, 0, 0, 0 ],
d [ 0, 0, 0, 0 ],
e [ 0, 0, 0, 0 ],
  [ 0, 0, 0, 0 ] ]

兩種情況：
1. 兩字母相等，這時題目就會調整為：取兩字串扣掉這兩個字母剩下字串的 common subsequence string 字母數量 + 1。
ex: abcde 與 ace。因為 a 相等，所以題目可調整為取 bcde 與 ce 兩字串的 common subsequence string 字母數量 + 1
2. 兩字串不相等，這時題目可調整為：兩字串個別扣掉這個字母與另個字串的 common subsequence string 字母數量取最大值。
ex: bcde 與 ce。因為 b、c 不相等，所以題目可調整為取 bcde 與 e 或取 cde 與 ce 的 common subsequence string 字母數量最大值。
*/

/*
T.C.: O(M * N)
S.C.: O(M * N)
*/

/* ------------------------------------------------------------------------------- */
function longestCommonSubsequence(text1: string, text2: string): number {
    const memo = new Map<string, number>();

    function dfs(i: number, j: number): number {
        const key = `${i}-${j}`;

        if (memo.has(key)) {
            return memo.get(key)!;
        }

        if (i === 0 || j === 0) {
            return 0;
        }

        if (text1[i - 1] === text2[j - 1]) {
            memo.set(key, 1 + dfs(i - 1, j - 1));
            return 1 + dfs(i - 1, j - 1);
        } else {
            memo.set(key, Math.max(dfs(i - 1, j), dfs(i, j - 1)));
            return Math.max(dfs(i - 1, j), dfs(i, j - 1));
        }
    }

    return dfs(text1.length, text2.length);
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
/* ------------------------------------------------------------------------------- */

const text1 = 'abcde',
    text2 = 'ace';
// const text1 = 'abc',
//     text2 = 'abc';
// const text1 = 'abc',
//     text2 = 'def';

console.log(longestCommonSubsequence(text1, text2));
