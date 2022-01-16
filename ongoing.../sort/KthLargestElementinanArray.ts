/** Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element. */

const qs = (nums: number[], l: number, r: number, k: number): number => {
    const swap = (nums: number[], i: number, j: number) => {
        const temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }

    let pivot = nums[l]
    let swapIdx = l

    for (let i = l + 1; i < nums.length; i++) {
        if (nums[i] < pivot) {
            swapIdx++
            swap(nums, swapIdx, i)
        }
    }

    swap(nums, l, swapIdx)

    console.log(nums)
    console.log(swapIdx)

    if (k > nums.length - swapIdx) {
        return qs(nums, l, swapIdx - 1, k)
    } else if (k < nums.length - swapIdx) {
        return qs(nums, swapIdx + 1, r, k)
    }

    return nums[swapIdx]
}

function findKthLargest(nums: number[], k: number): number {
    return qs(nums, 0, nums.length - 1, k)
}

const nums = [3, 2, 1, 5, 6, 4],
    k = 2

console.log(findKthLargest(nums, k))

/**
 *
 * quick sort
 * 先用 quick sort 找出第一個確定位置的值
 * ex: [3, 2, 1, 5, 6, 4]
 * 第一次跑完會呈現 => [1, 2, "3", 5, 6, 4]
 * 這時 3 會在正確的位置上，也就是左手邊的值都比它小，右手邊的值都比它大
 * 若 k=2 表示要找出陣列中第二大的值。也就是 sort 完後的 array 的倒數第二個 index 的值。
 * 可由 3 在正確的位置上導出 3 所在的 index 就是正確位置的 index（pivot 指向 3）
 * 也就是陣列的長度減去 3 所在的 index 若大於 k ，表示 k 存在 3 右半邊的 sub array。
 * 若陣列的長度減去 3 所在的 index 若小於 k，表示 k 所在的值存在 3 左半邊的 sub array。
 * 以此 subarray 進一步做 quick sort recursion，
 * 第二次跑完後 pivot 會指向 index 4 [1, 2, 3, 4, "5", 6]
 * 而陣列長度減去 pivot 等於 2 剛好等於 k，返回 nums[pivot] 就是 array 中倒數第 k 個大的值
 *
 * time complexity
 * - average case O(n)
 *   每次都將 array 切成一半搜尋那一半，所以 n + 2/n + 2/4 ... = 2n => O(N)
 * - worse case O(n^2)
 *   以上面的例子，每次找到做比較的 pivot 都剛好比其他數還小，也就是每次都要搜尋幾乎都個 array
 *   n + (n - 1) + (n - 2)...跑 n 次（因為有 n 個數）=> O(n^2)
 *
 * space complexity
 * O(1)
 */
