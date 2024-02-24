/* 
Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
*/

/* ------------------------------------------------------------------------------- */

function minDistance(word1: string, word2: string): number {
    const dp = new Array(word1.length + 1).fill([]).map(() => new Array(word2.length + 1).fill(0));

    for (let i = word1.length; i >= 0; i--) {
        dp[i][word2.length] = word1.length - i;
        for (let j = word2.length; j >= 0; j--) {
            dp[word1.length][j] = word2.length - j;
        }
    }

    for (let i = word1.length - 1; i >= 0; i--) {
        for (let j = word2.length - 1; j >= 0; j--) {
            if (word1[i] === word2[j]) dp[i][j] = dp[i + 1][j + 1];
            else {
                dp[i][j] = 1 + Math.min(dp[i + 1][j + 1], dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    return dp[0][0];
}

/*
T.C.: O(M * N)
S.C.: O(M * N)
*/

/* ------------------------------------------------------------------------------- */

// function minDistance(word1: string, word2: string): number {
//     const memo: Record<string, number> = {};

//     function dfs(i: number, j: number): number {
//         const key = `${i}-${j}`;
//         if (key in memo) return memo[key];
//         if (i === 0) return j;
//         if (j === 0) return i;

//         if (word1[i - 1] === word2[j - 1]) return dfs(i - 1, j - 1);
//         else {
//             const result = 1 + Math.min(dfs(i - 1, j - 1), dfs(i, j - 1), dfs(i - 1, j));
//             memo[key] = result;
//             return result;
//         }
//     }

//     return dfs(word1.length, word2.length);
// }

/* ------------------------------------------------------------------------------- */

const word1 = 'horse',
    word2 = 'ros';
// const word1 = 'intention',
//     word2 = 'execution';

console.log(minDistance(word1, word2));
