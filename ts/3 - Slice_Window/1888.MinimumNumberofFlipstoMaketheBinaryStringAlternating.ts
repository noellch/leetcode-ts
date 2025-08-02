/* 
https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/description/
*/

/* ------------------------------------------------------------------------------- */

function minFlips(s: string): number {
    // type-1 operation
    const n = s.length;
    s = s + s;
    let result = s.length;

    let alt1 = '',
        alt2 = '';

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            alt1 += '0';
            alt2 += '1';
        } else {
            alt1 += '1';
            alt2 += '0';
        }
    }

    let l = 0,
        r = 0;
    let diff1 = 0,
        diff2 = 0;
    while (r < s.length) {
        if (s[r] !== alt1[r]) {
            diff1++;
        }
        if (s[r] !== alt2[r]) {
            diff2++;
        }

        if (r - l + 1 > n) {
            if (s[l] !== alt1[l]) {
                diff1--;
            }
            if (s[l] !== alt2[l]) {
                diff2--;
            }
            l++;
        }

        if (r - l + 1 === n) {
            result = Math.min(result, diff1, diff2);
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

const s = '111000';

console.log(minFlips(s));
