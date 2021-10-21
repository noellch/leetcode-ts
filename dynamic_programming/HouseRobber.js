/* Q: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police. */

//? 一個搶匪能搶不連續房子最大的金額。也就是求 array 內不連續值的最大和。
//* 這題真的難，卡關好久...

var rob = function (nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]

    // 先設定到第一間跟第二間房子的狀況能搶到的最大金額
    const maxArray = [nums[0], Math.max(nums[0], nums[1])]

    for (let i = 2; i < nums.length; i++) {
        // 從有三間房子的情況開始。三間房子能搶大最大的金額 = max(（目前房子的金額 + 有 i - 2 間房子能搶到最大金額 ）以及（有 i - 1 間房子能搶到最大金額）)
        maxArray[i] = Math.max(nums[i] + maxArray[i - 2], maxArray[i - 1])
    }

    // 返回最後一項。也就是有 n 間房子能搶到最大的金額
    return maxArray[maxArray.length - 1]
}

//* 主要思維：
//* 若房子有一間，那最大金額就是搶那間房子。f(1)
//* 若房子有兩間，那最大金額就是搶這兩間房子擁有金額較大的那間。Math.max(f(1), f(2))
//* 若房子有三間，要決定第三間房子搶或不搶。若搶，等於 f(1) + 當前房屋金額，
//* 若不搶，就跟房子只有兩間的情況是一樣的。所以有三間房子能搶到的最大金額等於 Math.max(f(1) + 當前房屋金額, f(2))。
//* 若房子有四間，要決定第四間房子搶或不搶。若搶，等於 f(2) + 當前房屋金額，
//* 若不搶，就跟房子只有三間的情況是一樣的。所以有四間房子能搶到的最大金額等於 Math.max(f(2) + 當前房屋金額, f(3)))。
//* 若房子有五間，要決定第五間房子搶或不搶。若搶，等於 f(3) + 當前房屋金額, f(4)，
//* 若不搶，就跟房子只有四間的情況是一樣的。所以有五間房子能搶到的最大金額等於 Math.max(f(3) + 當前房屋金額, f(4))。

//* 所以建立一個 maxArray，每個 index 儲存有 i 間房子能搶到最大的金額。
//* 譬如，maxArray[0] 儲存只有一間房子能搶大的最大金額，maxArray[1] 儲存只有兩間房子能搶大的最大金額...

//* 其實計算有 n 間房子最大金額只需要 n-1 跟 n-2 間房子的情況。
//* 所以空間複雜度可以從 O(N) 優化成 O(1)
var rob = function (nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]

    // 先設定到第一間跟第二間房子的狀況能搶到的最大金額
    // const maxArray = [nums[0], Math.max(nums[0], nums[1])]
    let prev = nums[0],
        current = Math.max(nums[0], nums[1]),
        temp

    for (let i = 2; i < nums.length; ++i) {
        // 先把有兩間房子的情況暫存
        temp = current
        // 有三間房子的情況
        current = Math.max(nums[i] + prev, current)
        // prev 從有一間房子的情況改為有兩間房子的情況
        prev = temp
        // 第一圈跑完 prev 從有一間房子的情況改為有兩間房子的情況，current 從有兩間房子的情況改為有三間房子的情況
    }

    return current
}

console.log(rob([2, 7, 9, 3, 1]))
