/* Q: You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 */

var canJump = function (nums) {
    // 需要到達的距離。一開始是 nums 最後一個元素的 index。等於走多少步會到達這個元素。
    let index = nums.length - 1

    // 從最後一個元素開始
    for (let i = nums.length - 1; i >= 0; i--) {
        // 如果當下已到達的距離(i) 加上可走的距離(nums[i]) 大於或等於需到達的距離
        if (i + nums[i] >= index) {
            // 讓需到達的距離位置調整為前一個元素
            index = i
        }
    }

    // 最後判斷需到達的距離有沒有等於 0。
    return index === 0
}

//* 只需要判斷 n - 1 + nums[n - 1] 會不會大於或等於 n。
//* ex: [2, 3, 1, 1, 4]，需考慮 4(index 4) 能不能從 1(index 3) 到達。
//* 也就是距離 4 能不能從 距離 3 加可走 1 步到達。
//* 接著考慮 1(index 3) 能不能從 1(index 2) 到達，以此類推。

//* greedy solution
//* wikipedia: greedy algorithm，又稱貪心演算法，是一種在每一步選擇中都採取在當前狀態下最好或最佳（即最有利）的選擇，從而希望導致結果是最好或最佳的演算法。
var canJump = function (nums) {
    // 每一個元素能到達的最遠距離的最大值
    // ex: [2, 1, 1, 2, 3]
    // 2 最遠可以到 2 + 0(index 0) = 2 farthest = 2
    // 1 最遠可以到 1 + 1(index 1) = 2 farthest = 2
    // 1 最遠可以到 1 + 2(index 2) = 3 farthest = 3
    // 2 最遠可以到 2 + 3(index 3) = 5 farthest = 5
    let farthest = 0
    // edge case，只有一個元素的情狀，永遠是 true。
    if (nums.length === 1) return true

    // 遍例 nums 直到倒數第二個元素。
    // i (當前的距離) 不能超過現階段最遠可達的距離。
    for (let i = 0; i < nums.length - 1 && i <= farthest; i++) {
        farthest = Math.max(i + nums[i], farthest)
    }

    // 驗證最後 farthest 會不會到達 nums 最後一位 index。
    return farthest >= nums.length - 1
}
