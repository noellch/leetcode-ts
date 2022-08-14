/* Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. */

/**
 * nums is sorted in non-decreasing order.
 * must do this by modifying the input array in-place with O(1) extra memory.
 */

function removeDuplicates(nums: number[]): number {
    // p 同時代表著目前有多少個不重複的數字
    let p = 1

    // nums[0] 一定是第一次出現且不重複的，所以從 nums[1]開始判斷。
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[p] = nums[i]
            p++
        }
    }

    return p
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 5, 5, 5, 6]))

/**
 * 因為 nums 是 non-decreasing order。
 * 每一次遇到指向的值不同時，i 會是指向下一組不同值數組的第一個。
 * p 指向可以被取代的位置。
 * 整個 array 跑完後，前半部會是完全不重複的值。 ex: [1, 2, 3, 4, 5, 6, 5, 5, 5, 6]
 * 返回 p 指向的 index。就是最後整個陣列所有不同值的數量。
 */

/**
 * T.C.: O(n)
 * S.C.: O(1)
 */
