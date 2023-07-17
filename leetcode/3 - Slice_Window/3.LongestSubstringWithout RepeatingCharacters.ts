/* 
Given a string s, find the length of the longest substring without repeating characters.
*/

/* ------------------------------------------------------------------------------- */

// function lengthOfLongestSubstring(s: string): number {
//     if (!s.length) return 0;
//     if (s.length === 1) return 1;

//     const arr: string[] = [];
//     let longest = -Infinity;

//     for (let i = 0; i < s.length; i++) {
//         const idx = arr.indexOf(s[i]);

//         if (idx !== -1) {
//             arr.splice(0, idx + 1);
//         }

//         arr.push(s[i]);
//         longest = Math.max(longest, arr.length);
//     }

//     return longest;
// }

/*
T.C.: O(N) // best O(N) / worst O(N^2)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

function lengthOfLongestSubstring(s: string): number {
    if (!s.length) return 0;
    if (s.length === 1) return 1;

    const set = new Set<string>();

    let longest = 0;
    let l = 0,
        r = 0;

    while (r < s.length) {
        while (set.has(s[r])) {
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        r++;
        longest = Math.max(longest, r - l);
    }

    return longest;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const s = 'dvdf';
// const s = 'abcabcbb';
// const s = 'bbbbb';
// const s = 'pwwkew';

console.log(lengthOfLongestSubstring(s));
