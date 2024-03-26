/* 
https://leetcode.com/problems/permutation-in-string/description/
*/

/* ------------------------------------------------------------------------------- */

function checkInclusion(s1: string, s2: string): boolean {
    const map: Record<string, number> = {};
    let l = 0,
        r = 0;

    for (const s of s1) {
        map[s] = ++map[s] || 1;
    }
    let need = Object.keys(map).length;

    while (r < s2.length) {
        if (s2[r] in map) map[s2[r]]--;
        if (map[s2[r]] === 0) need--;
        if (need === 0) return true;
        if (r - l + 1 === s1.length && need !== 0) {
            if (s2[l] in map) {
                if (map[s2[l]] === 0) need++;
                map[s2[l]]++;
            }
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

const s1 = 'ab',
    s2 = 'eidbaooo';
// const s1 = 'ab',
//     s2 = 'eidboaoo';
// const s1 = 'hello',
//     s2 = 'ooolleoooleh';

console.log(checkInclusion(s1, s2));
