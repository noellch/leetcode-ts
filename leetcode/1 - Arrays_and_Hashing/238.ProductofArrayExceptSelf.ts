/* 
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

/* ------------------------------------------------------------------------------- */
function productExceptSelf(nums: number[]): number[] {
    const result: number[] = [];

    nums.reduceRight((a, c, i) => {
        result[i] = a;
        return a * c;
    }, 1);

    nums.reduce((a, c, i) => {
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
