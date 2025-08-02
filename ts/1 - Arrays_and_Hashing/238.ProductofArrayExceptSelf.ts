/* 
https://leetcode.com/problems/product-of-array-except-self/description/
*/

/* ------------------------------------------------------------------------------- */
// function productExceptSelf(nums: number[]): number[] {
//     const result: number[] = [];

//     nums.reduceRight<number>((a, c, i) => {
//         result[i] = a;
//         return a * c;
//     }, 1);

//     nums.reduce<number>((a, c, i) => {
//         result[i] *= a;
//         return a * c;
//     }, 1);

//     return result;
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// const nums = [1, 2, 3, 4];
// // const nums = [-1,1,0,-3,3]

// console.log(productExceptSelf(nums));

function productExceptSelf(nums: number[]): number[] {
    const result: number[] = [];

    let current = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = current;
        current *= nums[i];
    }

    current = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] *= current;
        current *= nums[i];
    }

    return result;
}
const nums = [1, 2, 3, 4];
// const nums = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums));
