/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 */

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // nums1 的最後一個 index
    let last = m + n - 1

    // m 跟 n 都大於 0 表示兩個 array 都還沒被判斷完
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[last] = nums1[m - 1]
            m--
        } else {
            nums1[last] = nums2[n - 1]
            n--
        }
        last--
    }

    // 這邊是若 nums1 所有元素已經被判斷結束，但 nums2 還存在元素
    // 若是 nums2 所有元素都判斷完，就不需要經過這邊，因為 nums1 本來就是 sorted array
    while (n > 0) {
        nums1[last] = nums2[n - 1]
        n--
        last--
    }
}

const nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3

console.log(merge(nums1, m, nums2, n))

/**
 * 從 num1 的最後一個 index 'last' 開始判斷
 * 若 num2 的最後一個值大於 num1 的第 m-1 個值，last = nums2[n-1]，反之 last = nums1[m-1]
 * 到最後若 m 已經小於 0，表示 num1 已經沒有元素可以比較，把 nums2 剩下的全部放到 num1 的最前面。
 *
 */
