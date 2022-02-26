/** Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 */

function increasingTriplet(nums: number[]): boolean {
    if (nums.length < 3) return false
    // 假設 nums 內最小的值
    let min = nums[0],
        // 假設 nums 內第二小的值
        middle = Infinity

    for (const num of nums) {
        // 只要出現比 min 更小的值就更新 min
        if (num <= min) min = num
        // 比 min 大 但小於等於 middle
        else if (num <= middle) middle = num
        // 出現比 min 大也比 middle 大的值
        else return true
    }

    return false
}

console.log(increasingTriplet([1, 2, 2, 1]))
