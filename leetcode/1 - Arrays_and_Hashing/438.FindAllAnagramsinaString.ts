/* 
Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/* ------------------------------------------------------------------------------- */

function findAnagrams(s: string, p: string): number[] {
    if (p.length > s.length) return [];

    const pMap: { [key: string]: number } = {};

    for (const c of p) {
        pMap[c] = ++pMap[c] || 1;
    }

    const result = [] as number[];
    let l = 0,
        r = 0;
    while (r < s.length) {
        if (pMap[s[r]] > 0) {
            pMap[s[r]]--;
            if (r - l + 1 === p.length) result.push(l);
            r++;
        } else {
            if (pMap[s[l]] >= 0) pMap[s[l]]++;
            if (l === r) {
                r++;
            }
            l++;
        }
    }

    return result;
}

/*
T.C.: O(s.length)
S.C.: O(p.length)
*/

/* ------------------------------------------------------------------------------- */

const s = 'cbaebabacd',
    p = 'abc';
// const s = 'abab',
//     p = 'ab';

console.log(findAnagrams(s, p));
