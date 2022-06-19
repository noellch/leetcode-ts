/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation. */

/**
 * write an algorithm that runs in O(n)
 * without using the division operation
 * Follow up:
 * Can you solve the problem in O(1) extra space complexity?
 * (The output array does not count as extra space for space complexity analysis.)
 */

// function productExceptSelf(nums: number[]): number[] {
//     const result: Array<number> = []

//     nums.reduceRight((acc, cur, i) => {
//         result[i] = acc
//         return cur * acc
//     }, 1)

//     nums.reduce((acc, cur, i) => {
//         result[i] *= acc
//         return cur * acc
//     }, 1)

//     return result
// }

function productExceptSelf(nums: number[]): number[] {
    const result: number[] = []
    let prefix = 1
    let suffix = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = prefix
        prefix *= nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] *= suffix
        suffix *= nums[i]
    }

    return result
}

console.log(productExceptSelf([1, 2, 3, 4]))

// [24, 12, 8, 6] expected result

// [24, 12, 4, 1] right reduce
// times
// [1,  1 , 2, 6] left reduce

/**
 * T.C: O(n)
 * S.C: O(1)
 */
