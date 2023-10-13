/* 
Given a string s, return the number of unique palindromes of length three that are a subsequence of s.

Note that even if there are multiple ways to obtain the same subsequence, it is still only counted once.

A palindrome is a string that reads the same forwards and backwards.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
*/

/* ------------------------------------------------------------------------------- */

// function countPalindromicSubsequence(s: string): number {
//     let result = 0;
//     let chars = new Set(s);
//     for (const char of chars) {
//         let first = s.indexOf(char),
//             last = s.lastIndexOf(char);
//         if (first !== last) {
//             result += new Set(s.slice(first + 1, last)).size;
//         }
//     }

//     return result;
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

function countPalindromicSubsequence(s: string): number {
    const result: Set<string> = new Set();
    const left: Set<string> = new Set();
    const right: Map<string, number> = new Map();

    for (const c of s) {
        right.set(c, right.has(c) ? (right.get(c) as number) + 1 : 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (right.has(s[i])) {
            right.set(s[i], (right.get(s[i]) as number) - 1);
            if (right.get(s[i]) === 0) right.delete(s[i]);
        }

        for (let j = 97; j < 123; j++) {
            const c = String.fromCharCode(j);
            if (left.has(c) && right.has(c)) {
                result.add(`${s[i]}-${c}`);
            }
        }

        left.add(s[i]);
    }

    return result.size;
}

/*
T.C.: O(26 * N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const s = 'bcacb';
// const s = 'adc';
// const s = 'bbcbaba';

console.log(countPalindromicSubsequence(s));
