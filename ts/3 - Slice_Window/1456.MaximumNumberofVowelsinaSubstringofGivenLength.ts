/* 
https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/
*/

/* ------------------------------------------------------------------------------- */

const vowels = ['a', 'e', 'i', 'o', 'u'];

function maxVowels(s: string, k: number): number {
    let l = 0,
        r = 0;
    let have = 0,
        result = 0;

    while (r < s.length) {
        if (vowels.includes(s[r])) {
            have++;
        }

        if (r - l + 1 === k) {
            result = Math.max(result, have);
            if (vowels.includes(s[l])) {
                have--;
            }
            l++;
        }
        r++;
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const s = 'abciiidef',
    k = 3;
// const s = 'novowels',
//     k = 1;
console.log(maxVowels(s, k));
