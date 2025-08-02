/* 
https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
*/

/* ------------------------------------------------------------------------------- */

function findAnagrams(s: string, p: string): number[] {
    if (!p.length || p.length > s.length) return [];
    const table: Record<string, number> = {};
    const result: number[] = [];

    for (const c of p) {
        table[c] = ++table[c] || 1;
    }

    let l = 0,
        r = 0;

    while (r < s.length) {
        if (table[s[r]] > 0) {
            table[s[r]]--;
            if (r - l + 1 === p.length) result.push(l);
            r++;
        } else {
            if (table[s[l]] >= 0) table[s[l]]++;
            if (l === r) r++;
            l++;
        }
    }

    return result;
}
/*
T.C.: O(s.length)
S.C.: O(1)
因為 table 的大小最多為 26（字母種類），與字串長度無關。
*/

/* ------------------------------------------------------------------------------- */

const s = 'cbaebabacd',
    p = 'abc';
// const s = 'abab',
//     p = 'ab';

console.log(findAnagrams(s, p));
