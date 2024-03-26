/* 
https://leetcode.com/problems/minimum-window-substring/description/
*/

/* ------------------------------------------------------------------------------- */

function minWindow(s: string, t: string): string {
    let result = '';

    if (!s || !s.length) return result;

    const TTable: Record<string, number> = {};
    const STable: Record<string, number> = {};

    for (const w of t) {
        TTable[w] = ++TTable[w] || 1;
    }

    let l = 0,
        r = 0,
        have = 0,
        need = Object.keys(TTable).length;

    while (r < s.length) {
        STable[s[r]] = ++STable[s[r]] || 1;

        if (s[r] in TTable && TTable[s[r]] === STable[s[r]]) {
            have++;
            while (have === need) {
                const str = s.substring(l, r + 1);
                if (!result.length || str.length < result.length) result = str;
                STable[s[l]]--;
                if (s[l] in TTable && STable[s[l]] < TTable[s[l]]) have--;
                l++;
            }
        }

        r++;
    }

    return result;
}

/*
T.C.: O(N + M)
S.C.: O(N + M)
- N stands fro the length of s, meanwhile M stands for the length of t
*/

/* ------------------------------------------------------------------------------- */

const s = 'ADOBECODEBANC',
    t = 'ABC';
// const s = "a", t = "a"
// const s = 'aa',
//     t = 'aa';

console.log(minWindow(s, t));
