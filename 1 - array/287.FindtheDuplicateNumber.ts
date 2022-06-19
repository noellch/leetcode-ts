/* Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

  */

function findDuplicate(nums: number[]): number {
    let slow = 0,
        fast = 0

    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]

        if (slow === fast) break
    }

    let slow2 = 0

    while (true) {
        slow = nums[slow]
        slow2 = nums[slow2]

        if (slow === slow2) break
    }

    return slow
}

/**
 *
 * linked-list and Floyd's algorithm
 * 由題目得知 nums 內的元素值範圍固定在 [1, n]
 * [1, 3, 4, 2, 2] 內的值等於 1~4
 * 可以將上面的 array 中的每一個 index 上的值視為指向的 index
 * ex: 1 => 3 => 2 => 4 => 2
 * index0 上的值 1 指向 index1，index1 上的值 3 指向 index 3...等
 * 所以若存在重複值，表示這個 list 一定存在內部迴圈
 *
 * 設定一快一慢的 pointer ，找出兩 pointer 的交會處後，從 list 起始處再設定一個 slow2 pointer，
 * slow pointer 和 slow2 pointer 交會處就會是迴圈的起點，也就是我們要找的重複值
 *
 *  [1, 3, 4, 2, 2]
 * fast pointer 3 => 4 => 4 => 4
 * slow pointer 1 => 3 => 2 => 4
 * 交會處處的值是 4，目標是要找到迴圈的開頭。
 *
 * #
 * 從開頭設定一個 slow2
 * slow  2 => 4 => 2 => 2
 * slow2 1 => 3 => 2
 * 迴圈的開頭就是 2
 * 所以重複值是 2
 *
 * # 的的證明，為什麼要再設定一個 slow2 可以找出迴圈的開頭？
 * 設定 list 到 迴圈的開頭為 p，整個迴圈距離為 c，slow 跟 fast 交會處距離迴圈開頭為 x
 * 所以迴圈開頭到 slow 跟 fast 交會處距離為 c - x
 * slow = fast 時，slow 走了 p + c - x，fast 走了 p + c - x + c - x
 * 2*slow=fast
 * 故 2(p+c-x) = p+c-x+c => 2(p+c-x) = p+2c-x => 2p+2c-2x = p+2c-x => p-x = 0
 * 得 p = x
 * 所以得知 list 到迴圈的開頭 === slow 跟 fast 交會處距離迴圈的開頭
 * 也就是 slow pointer 跟 slow2 pointer 的交會處
 *
 */

const nums = [1, 3, 4, 2, 2]

console.log(findDuplicate(nums))
