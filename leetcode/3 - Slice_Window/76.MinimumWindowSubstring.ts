/* 
Given two strings s and t of lengths m and n respectively, 
return the minimum window substring of s such that every character in t (including duplicates) is included in the window. 
If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.
*/

/* ------------------------------------------------------------------------------- */

function minWindow(s: string, t: string): string {
    if (!t) return '';
    const window = {} as { [key: string]: number };
    const countT = {} as { [key: string]: number };
    let result = '';

    for (const c of t) {
        countT[c] = ++countT[c] || 1;
    }

    let l = 0,
        have = 0,
        need = Object.keys(countT).length;

    for (let r = 0; r < s.length; r++) {
        const w = s[r];
        window[w] = ++window[w] || 1;

        if (w in countT && window[w] === countT[w]) have++;
        while (have === need) {
            if (r - l + 1 < result.length || !result.length) result = s.slice(l, r + 1);
            const w = s[l];
            window[w]--;
            l++;
            if (w in countT && window[w] < countT[w]) have--;
        }
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
// const s = "a", t = "aa"

console.log(minWindow(s, t));
