/** Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

  */

/**
 *
 * 題目求是否能將 nums 陣列分割成兩個 subset，其中的元素和剛好相等。
 * 若 nums 和為奇數表示不可能分割成兩個剛好和相等的 subsets。
 * 而 nums 總元素的和除以 2 的 target，剛好會是分割成兩個 subsets array 各自的和。
 * 也就是說題目求的是 nums 中能不能找出若干元素和剛好為 target。
 *
 */

// function canPartition(nums: number[]): boolean {
//     let sum = nums.reduce((a, c) => a + c, 0)

//     if (sum % 2) return false
//     let set: Set<number> = new Set()
//     const target = sum / 2

//     set.add(0)

//     for (let i = 0; i < nums.length; i++) {
//         const nextSet: Set<number> = new Set()
//         for (let t of set) {
//             nextSet.add(t + nums[i])
//             nextSet.add(t)
//         }
//         set = nextSet
//     }

//     return set.has(target) ? true : false
// }

/**
 *
 *
 * 建立一個 set 存放所有 nums 元素相加的各種可能。
 * 最後檢查 set 內有沒有存在 target 就可以了。
 *
 *
 */

// var canPartition = function (nums: number[]): boolean {
//     let sum = nums.reduce((acc, cur) => acc + cur)
//     if (sum % 2) return false

//     const target = sum / 2
//     let map = new Map()

//     const dfs = (idx: number, target: number): boolean => {
//         if (target === 0) return true
//         if (target < 0 || idx === nums.length) return false
//         if (map.has(`${idx}-${target}`)) return map.get(`${idx}-${target}`)

//         const sum = dfs(idx + 1, target - nums[idx]) || dfs(idx + 1, target)
//         map.set(`${idx}-${target}`, sum)
//         return sum
//     }

//     return dfs(0, target)
// }

var canPartition = function (nums: number[]): boolean {
    let sum = nums.reduce((a, c) => a + c, 0)

    if (sum % 2) return false
    const target = sum / 2

    const dp = []
    dp[0] = true

    for (let i = 1; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j - nums[i]]
        }
    }

    return dp[target] || false
}

/**
 *
 * 定義 dp:boolean[] 陣列，陣列中的第 i 位表示是否可以從 nums 中取若干元素的和為 i。
 * 所以最後的答案會是返回 dp[target]。
 * 遍歷 nums。於 nums[i] 可能組合出 [nums[i], target] 中間的任何數 j。
 * 遍歷 target 到 nums[i] ，取得每一個中間數 j，減去 nums[i]，來判斷 j-nums[i] 在 dp 中是否為 true。
 * dp[j - nums[i]] 為 true，表示在這之前已經有其他元素的和為 j 了。所以 dp[j] 也是 true。
 * 例如 dp[5 - 2] 為 true，表示有若干元素的和為 3，那因為 nums[i] 這時為 2，所以表示一定有若干元素的和為 5，故 dp[5] 也會是 true
 * 那如果原本 dp[j] 就是 true 那就不會改變。
 * 結合以上邏輯，可導出 dp[j] = dp[j] || dp[j-nums[i]]
 * 需要特別注意：內層的 for 迴圈需要從 target 到 nums[i] 往下遍歷。
 * 因為如果是由 0 向上 遍歷。若是 nums[i] = 1，這樣 [1, target] 的範圍都會變成 true，因為 j 若等於 1，減 nums[i] 也等於 1，
 * 那原本 dp[0] 就是 true，所以 dp[1] = true，因為 dp[1] = true，所以 dp[2] 也是 true，dp 的策略就會失靈。
 *

 */

const nums = [1, 11, 5, 5]
console.log(canPartition(nums))
