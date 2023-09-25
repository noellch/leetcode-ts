/* 
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

/* ------------------------------------------------------------------------------- */

// DFS
// function wordBreak(s: string, wordDict: string[]): boolean {
//     const dp: Map<string, boolean> = new Map();

//     function check(str: string): boolean {
//         if (!str || !str.length) return true;
//         if (dp.has(str)) return dp.get(str) as boolean;

//         for (const word of wordDict) {
//             const wordLen = word.length;

//             const subStr = str.slice(0, wordLen);

//             if (word === subStr) {
//                 dp.set(word, true);
//                 if (check(str.slice(wordLen))) return true;
//             }
//         }
//         dp.set(str, false);
//         return false;
//     }

//     return check(s);
// }

/*
T.C.: O(N * M)
N 是 s 的長度，M 是 wordDict 的長度。最差的情況下，會需要遍歷所有 s 的字母，所以 T.C. 很有可能是 O(N ^ 2)

S.C.: O(N)
遞迴的深度最多為 s 的長度。
*/

/* ------------------------------------------------------------------------------- */

// DP
function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = Array.from({ length: s.length + 1 }, () => false);
    dp[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        for (const word of wordDict) {
            const wordLen = word.length;
            if (i + wordLen <= s.length && s.slice(i, i + wordLen) === word) {
                dp[i] = dp[i + wordLen];
            }

            if (dp[i]) break;
        }
    }

    return dp[0];
}

/*
T.C.: O(N * M)
其中 N 是 s 的長度，Ｍ 是 wordDict 的長度。

S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */
const s = 'leetcode',
    wordDict = ['leet', 'code'];
// const s = 'applepenapple',
//     wordDict = ['apple', 'pen'];
// const s = 'catsandog',
//     wordDict = ['cats', 'dog', 'sand', 'and', 'cat'];
// const s = 'cars',
//     wordDict = ['car', 'ca', 'rs'];
console.log(wordBreak(s, wordDict));
