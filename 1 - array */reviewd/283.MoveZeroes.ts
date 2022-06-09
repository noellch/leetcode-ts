/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array. */

/**
 * Follow up: Could you minimize the total number of operations done?
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let p = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            ;[nums[i], nums[p]] = [nums[p], nums[i]]
            p++
        }
    }
}

moveZeroes([0, 1, 0, 3, 0, 5, 0, 12])

/**
 * T.C: O(n)
 * S.C: O(1)
 */
