/* 
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.
*/

/* ------------------------------------------------------------------------------- */

function checkInclusion(s1: string, s2: string): boolean {
    const countS1 = {} as { [key: string]: number };
    let l = 0,
        r = 0;

    for (const s of s1) {
        countS1[s] = ++countS1[s] || 1;
    }

    let need = Object.keys(countS1).length;

    while (r < s2.length) {
        const w = s2[r];
        if (w in countS1) countS1[w]--;
        if (countS1[w] === 0) need--;
        if (need === 0) return true;
        if (r - l + 1 === s1.length && need !== 0) {
            const w = s2[l];
            if (countS1[w] === 0) need++;
            if (w in countS1) countS1[w]++;
            l++;
        }
        r++;
    }

    return false;
}

/*
T.C.: O(M)
S.C.: O(M + N)
*/

/* ------------------------------------------------------------------------------- */

// const s1 = 'ab',
//     s2 = 'eidbaooo';
// const s1 = 'ab',
//     s2 = 'eidboaoo';
const s1 = 'hello',
    s2 = 'ooolleoooleh';

console.log(checkInclusion(s1, s2));
