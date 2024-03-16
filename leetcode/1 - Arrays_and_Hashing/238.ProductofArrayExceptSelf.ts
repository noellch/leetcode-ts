/* 
https://leetcode.com/problems/product-of-array-except-self/description/
*/

/* ------------------------------------------------------------------------------- */
function productExceptSelf(nums: number[]): number[] {
    const result: number[] = [];

    nums.reduceRight<number>((a, c, i) => {
        result[i] = a;
        return a * c;
    }, 1);

    nums.reduce<number>((a, c, i) => {
        result[i] *= a;
        return a * c;
    }, 1);

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 2, 3, 4];
// const nums = [-1,1,0,-3,3]

console.log(productExceptSelf(nums));
