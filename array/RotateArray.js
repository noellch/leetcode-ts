/* Q: Given an array, rotate the array to the right by k steps, where k is non-negative. */

/* Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4] */

/* Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100] */

/* Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space? */

//? 將一個 array 旋轉 k 步。

var rotate = function (nums, k) {
    // 建立一個可以將 array reverse 的 function。參數為目標 array，頭跟尾的 index。
    const reverse = (nums, s, e) => {
        while (s < e) {
            let temp = nums[s]
            nums[s] = nums[e]
            nums[e] = temp
            s++
            e--
        }
    }
    // 取 k 除以 array 長度的餘數。因為如果 k 等於 nums.length，旋轉後會跟原本的 array 一樣，也就是根本不用動作。
    k = k % nums.length

    // 關鍵是將 array 從 index k 的地方切成兩半。
    // 第一步先旋轉整個 array，第二步再將兩半部的 subarray 各自旋轉。
    // 這樣原本的 array 就會成為旋轉 k 步後的狀態。
    // ex: original array => [1,2,3,4,5,6,7]，旋轉 3 步。
    // 先整個旋轉 => [7,6,5,4,3,2,1]
    // 旋轉 index 0 - 2，[5,6,7,4,3,2,1]
    // 旋轉 index 3 - 6 [5,6,7,1,2,3,4]
    // 旋轉 3 步的 array get。
    // do it in-place with space complexity O(1)
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)

    return nums
}

const input = [1, 2, 3, 4, 5, 6, 7],
    k = 3

console.log(rotate(input, k))
