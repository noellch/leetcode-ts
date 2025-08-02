/* 
https://leetcode.com/problems/unique-length-3-palindromic-subsequences/description/
*/

/* ------------------------------------------------------------------------------- */

// function countPalindromicSubsequence(s: string): number {
//     const chars = new Set(s);

//     let result = 0;

//     for (let char of chars) {
//         const firstIndex = s.indexOf(char);
//         const lastIndex = s.lastIndexOf(char);
//         if (firstIndex !== lastIndex) {
//             result += new Set(s.slice(firstIndex + 1, lastIndex)).size;
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
    const letSet: Set<string> = new Set();
    const rightMap: Map<string, number> = new Map();
    const result: Set<string> = new Set();

    for (let c of s) {
        rightMap.has(c) ? rightMap.set(c, (rightMap.get(c) as number) + 1) : rightMap.set(c, 1);
    }

    for (let i = 0; i < s.length; i++) {
        const mid = s[i];

        if (rightMap.has(mid)) {
            rightMap.set(mid, (rightMap.get(mid) as number) - 1);
            if (rightMap.get(mid) === 0) rightMap.delete(mid);
        }

        for (let j = 97; j < 123; j++) {
            const char = String.fromCharCode(j);
            if (letSet.has(char) && rightMap.has(char)) {
                result.add(`${char}${mid}${char}`);
            }
        }
        letSet.add(mid);
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
