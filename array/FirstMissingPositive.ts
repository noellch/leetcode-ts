/* Q: Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space. */

//? 找到連續整數中，遺失的最小整數。
//? 如都是連續整數則返回 1。如數組是從 1 開始的連續整數，則返回數組最後一個數字的後一位數。

// var firstMissingPositive = function (nums: number[]): number {
//     const set = new Set(nums)

//     let p = 1
//     if (!set.has(p)) return 1

//     while (set.has(p)) p++

//     return p
// }

// time complexity: O(1)
// space complexity: O(n)

var firstMissingPositive = function (nums: number[]): number {
    let i = 0
    while (i < nums.length) {
        // 改變原始的 array。如果 nums[i] 小於 1 或 大於 nums.length，nums[i] 就不動。
        // 反之則將 nums[i] 放到屬於他的位置，如 3 就跟 index 2 的元素交換，4 就跟 index 3 的元素交換。
        if (nums[i] > 0 && nums[i] <= nums.length && nums[nums[i] - 1] !== nums[i])
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
        else i++
    }

    // 再次遍歷 nums，看是不是所有元素的值都符合 idex i + 1 的位置。
    // 若遇到不是的 i + 1 就是連續正整數中缺失的數。
    for (i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1
    }
    return i + 1
}
