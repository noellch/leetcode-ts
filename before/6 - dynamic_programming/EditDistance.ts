/**
 * Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character

 */

function minDistance(word1: string, word2: string): number {
    const dp = Array.from({ length: word1.length + 1 }, () => new Array(word2.length + 1).fill(0));

    for (let i = word1.length; i >= 0; i--) {
        dp[i][word2.length] = word1.length - i;
    }

    for (let j = word2.length; j >= 0; j--) {
        dp[word1.length][j] = word2.length - j;
    }

    for (let k = word1.length - 1; k >= 0; k--) {
        for (let l = word2.length - 1; l >= 0; l--) {
            // 當下字母是否相等
            if (word1[k] === word2[l]) {
                dp[k][l] = dp[k + 1][l + 1];
            } else {
                dp[k][l] = 1 + Math.min(dp[k + 1][l], dp[k][l + 1], dp[k + 1][l + 1]);
            }
        }
    }

    return dp[0][0];
}

const word1 = 'horse',
    word2 = 'ros';
console.log(minDistance(word1, word2));

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
