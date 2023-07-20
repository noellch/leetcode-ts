/* 
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
*/

/* ------------------------------------------------------------------------------- */

function findDuplicate(nums: number[]): number {
    let fast = 0,
        slow = 0;
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        if (fast === slow) break;
    }

    let slow2 = 0;

    while (true) {
        slow = nums[slow];
        slow2 = nums[slow2];
        if (slow === slow2) break;
    }

    return slow;
}

/**
 *
 * linked-list and Floyd's algorithm
 * 首先要知道這個題目會用到 linked-list 和 Floyd's algorithm
 *
 * 由題目得知 nums 內的元素值範圍固定在 [1, n]
 * [1, 3, 4, 2, 2] 內的值等於 1 ~ 4，可將 array 中的每一個值視為會指向的 index
 * ex: 1 => 3 => 2 => 4 => 2
 * index0 上的值 1 指向 index1，index1 上的值 3 指向 index 3...等。
 * 所以：
 * - 若存在重複值，表示這個 list 一定存在內部迴圈。
 * - index0 一定在內部迴圈之外，因為題目說值的範圍會固定在 [1, n]。（所以不可能有指針指向 index0）
 * - 內部迴圈的起點就是要找的重複值。
 *
 * 設定一快一慢的 pointer，找出兩 pointer 的交會處後，從 list 起始處再設定一個 slow2 pointer，
 * slow pointer 和 slow2 pointer 交會處就會是迴圈的起點，也就是我們要找的重複值。
 * 也就是說『快慢指針的交會處』到迴圈起點，與 『list 開頭』到迴圈起點的距離一樣。
 *
 * 證明：
 * 假設 list 開頭到迴圈起點的距離為 p，
 * 整個迴圈長度為 c，快慢指針交會處距離迴圈起點長度為 x。
 * 故迴圈起點到快慢指針交會處距離為 c - x。
 * 因為 2 * slow = fast，
 * slow 走 p + (c - x) 時，fast 剛好走了 p + (c - x) + c ，然後兩指針相會。（快指針一定會比慢指針多走完一次內部迴圈 c，不然兩者不會相會）
 * 故 2(p + (c - x)) = p + (c - x) + c
 * 故 2p + 2c - 2x = p + 2c - x
 * => 2p - 2x = p - x
 * => p - x = 0
 * => p = x
 * 得証『快慢指針的交會處』到迴圈起點，與 『list 開頭』到迴圈起點的距離一樣。
 *
 */

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 3, 4, 2, 2];
// const nums = [3,1,3,4,2]

console.log(findDuplicate(nums));
