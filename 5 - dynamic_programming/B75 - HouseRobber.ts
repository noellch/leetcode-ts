/* Q: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. */

// function rob(nums: number[]): number {
//     const dp: number[] = new Array(nums.length - 1).fill(0)

//     dp[0] = nums[0]
//     dp[1] = Math.max(nums[0], nums[1])

// 從有三間房子的情況開始。三間房子能搶大最大的金額 = max(（目前房子的金額 + 有 i - 2 間房子能搶到最大金額 ）以及（有 i - 1 間房子能搶到最大金額）)
//     for (let i = 2; i < nums.length; i++) {
//         dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
//     }

//     return dp[nums.length - 1]
// }

/**
 * 主要思維：
 * 若房子有一間，那最大金額就是搶那間房子。f(1)
 * 若房子有兩間，那最大金額就是搶這兩間房子擁有金額較大的那間。Math.max(f(1), f(2))
 * 若房子有三間，要決定第三間房子搶或不搶。若搶，等於 f(1) + 當前房屋金額，
 * 若不搶，就跟房子只有兩間的情況是一樣的。所以有三間房子能搶到的最大金額等於 Math.max(f(1) + 當前房屋
 * 若房子有四間，要決定第四間房子搶或不搶。若搶，等於 f(2) + 當前房屋金額，
 * 若不搶，就跟房子只有三間的情況是一樣的。所以有四間房子能搶到的最大金額等於 Math.max(f(2) + 當前房屋
 * 若房子有五間，要決定第五間房子搶或不搶。若搶，等於 f(3) + 當前房屋金額, f(4)，
 * 若不搶，就跟房子只有四間的情況是一樣的。所以有五間房子能搶到的最大金額等於 Math.max(f(3) + 當前房屋
 * 所以建立一個 maxArray，每個 index 儲存有 i 間房子能搶到最大的金額。
 * 譬如，maxArray[0] 儲存只有一間房子能搶大的最大金額，maxArray[1] 儲存只有兩間房子能搶大的最大金額...
 */

function rob(nums: number[]): number {
    if (nums.length === 1) return nums[0]

    let current = 0
    let prev = 0
    let temp = 0

    for (let i = 0; i < nums.length; i++) {
        // 先把有兩間房子的情況暫存
        temp = current
        // 第三間房子開始
        current = Math.max(nums[i] + prev, temp)
        // 第一圈跑完 prev 從有一間房子的情況改為有兩間房子的情況，current 從有兩間房子的情況改為有三間房子的情況
        prev = temp
    }

    return current
}

/**
 * 計算有 n 間房子最大金額只需要 n-1
 * 所以空間複雜度可以從 O(N) 優化成 O(1)
 */

console.log(rob([2]))
