/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements
 * of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
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
    let postfix = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = prefix
        prefix *= nums[i]
    }

    for (let j = 0; j < nums.length; j++) {
        result[j] *= postfix
        postfix *= nums[j]
    }

    return result
}

console.log(productExceptSelf([1, 2, 3, 4]))

/**
 *
 *
 * prefix 等於自身之外，左手邊所有元素值的積。
 * pos6fix 等於自身之外，右手邊所有元素值的積。
 * 初始值都為 1，因為 1 乘以自己還是自己。
 * ex: [1, 2, 3, 4]
 * 第一次迴圈計算完 [ 24, 12, 4, 1 ]
 * 再從反向計算左手邊除了自己之外所有元素的積。[1, 1, 2, 6]
 * 在計算的過程中與先前 result 的各項相乘。
 *
 *
 */
