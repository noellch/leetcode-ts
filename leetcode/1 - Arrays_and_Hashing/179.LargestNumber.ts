/* 
https://leetcode.com/problems/largest-number/description/
*/

/* ------------------------------------------------------------------------------- */

function largestNumber(nums: number[]): string {
    const numStrs = nums.map((num) => '' + num);
    numStrs.sort((a, b) => Number(`${b}${a}`) - Number(`${a}${b}`));

    return numStrs[0] === '0' ? '0' : numStrs.join('');
}

/* ------------------------------------------------------------------------------- */

const nums = [10, 2];
console.log(largestNumber(nums));
