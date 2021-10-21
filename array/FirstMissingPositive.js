/* Q: Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space. */

//? 找到連續整數中，遺失的最小整數。
//? 如都是連續整數則返回 1。如數組是從 1 開始的連續整數，則返回數組最後一個數字的後一位數。

var firstMissingPositive = function (nums) {
    // 去重
    const s = new Set(nums)

    let p = 1

    // 若 set 內沒有 1，直接返回 1
    if (!s.has(1)) {
        return 1
    }

    // 遍歷整個 set
    while (p <= s.size) {
        // 從 p = 1 開始對照
        if (!s.has(p)) {
            // 因為 p 會連續往上加，若 set 內不存在這個值，則表示原本的數組內遺失 p 這個數。
            return p
        }

        p++
    }
    // set 遍歷完，如果存在 1，也都是連續整數...則返回連續整數後的那個數
    return p
}

console.log(firstMissingPositive([1]))
