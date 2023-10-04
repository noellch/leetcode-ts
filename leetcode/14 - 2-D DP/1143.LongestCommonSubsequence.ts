/* 
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.
*/

//2D-DP bottom-up
/* ------------------------------------------------------------------------------- */

function longestCommonSubsequence(text1: string, text2: string): number {
    const dp = Array.from({ length: text1.length + 1 }, () => new Array(text2.length + 1).fill(0));

    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = dp[i].length - 2; j >= 0; j--) {
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    return dp[0][0];
}

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

const text1 = 'abcde',
    text2 = 'ace';
// const text1 = 'abc',
//     text2 = 'abc';
// const text1 = 'abc',
//     text2 = 'def';

console.log(longestCommonSubsequence(text1, text2));
