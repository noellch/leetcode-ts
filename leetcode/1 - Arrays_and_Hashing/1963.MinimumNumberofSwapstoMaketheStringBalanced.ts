/* 
https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/description/
*/

/* ------------------------------------------------------------------------------- */

function minSwaps(s: string): number {
    let needToSwap = 0,
        close = 0;

    for (let b of s) {
        if (b === ']') close++;
        else close--;
        needToSwap = Math.max(needToSwap, close);
    }

    return Math.ceil(needToSwap / 2);
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
// const s = '][][';
const s = ']]][[[';
// const s = '[]';

console.log(minSwaps(s));
