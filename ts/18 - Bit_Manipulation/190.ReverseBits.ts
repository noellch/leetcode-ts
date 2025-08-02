/* 
https://leetcode.com/problems/reverse-bits/description/
*/

/* ------------------------------------------------------------------------------- */

function reverseBits(n: number): number {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        const bit = n & 1;

        result = result | (bit << (31 - i));

        n = n >> 1;
    }

    return result >>> 0;
}

/**
 * T.C.: O(N)
 * S.C.: O(1)
 */

/* ------------------------------------------------------------------------------- */

console.log(reverseBits(11111111111111111111111111111101));
