/* Q: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array. */

/**
 * Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums: number[]): void {
    let p = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            ;[nums[p], nums[i]] = [nums[i], nums[p]]
            p++
        }
    }
    console.log(nums)
}

moveZeroes([0, 1, 0, 3, 0, 5, 0, 12])

/**
 *
 * 把所有非 0 的元素都移到 nums 的左邊，等於把所有 0 都移到 nums 的右邊。
 *
 */
