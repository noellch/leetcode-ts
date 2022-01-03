/**
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

// solution1
//  function productExceptSelf(nums: number[]): number[] {
//     const result = nums.map((n, i, arr) => {
//         const a = [...arr]
//         a.splice(i, 1)
//         const p = a.reduce((c, a) => {
//             return c * a
//         }, 1)
//         return p
//     })
//     return result
// }
// console.log(productExceptSelf([1, 2, 3, 4]))

// solution2
function productExceptSelf(nums: number[]): number[] {
    const result: Array<number> = []

    nums.reduceRight((c, acc, i) => {
        result[i] = c
        return acc * c
    }, 1)

    nums.reduce((c, acc, i) => {
        result[i] *= c
        return acc * c
    }, 1)

    return result
}

/**
 *
 * 首先讓 result 的每個元素等於除了自己之外，右手邊目前已經過所有元素的積。
 * ex: nums = [1, 2, 3, 4]
 * 經過 reduceRight 後，result 為 [ 24, 12, 4, 1 ]
 * 再從反向計算另一邊除了自己之外，左手邊已經過所有元素的積。[1, 1, 2, 6]
 * 在計算的過程中與先前的 result 各項相乘。
 * 第一次的計算是除了自身之外左手邊所有元素的積。
 * 第二次是計算是除了自身之外右手邊所有元素的積。
 * 再將兩兩相乘得出自身之外左右兩邊所有元素的積。
 *
 */
