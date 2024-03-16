/* 
https://leetcode.com/problems/sum-of-two-integers/description/
*/

/* ------------------------------------------------------------------------------- */

function getSum(a: number, b: number): number {
    while (b) {
        const temp = (a & b) << 1;
        a = a ^ b;
        b = temp;
    }
    return a;
}

/* ------------------------------------------------------------------------------- */
const a = -9,
    b = 11;
console.log(getSum(a, b));
