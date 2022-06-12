/* Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element. */

function findTarget(arr: number[], left: number, right: number, k: number): number {
    function swap(arr: number[], l: number, r: number) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
    }

    let pivot = arr[left],
        swapIdx = left;

    for (let i = left + 1; i <= right; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, swapIdx, left);

    if (k > arr.length - swapIdx) {
        return findTarget(arr, 0, swapIdx - 1, k);
    } else if (k < arr.length - swapIdx) {
        return findTarget(arr, swapIdx + 1, right, k);
    }

    return arr[swapIdx];
}

function findKthLargest(nums: number[], k: number): number {
    return findTarget(nums, 0, nums.length - 1, k);
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

/**
 * quick sort
 * 先用 quick sort 找出第一個確定位置的值
 * ex: [3, 2, 1, 5, 6, 4]
 * 第一次跑完會呈現 => [1, 2, "3", 5, 6, 4]
 * 這時 3 會在正確的位置上，也就是左手邊的值都比它小，右手邊的值都比它大
 * 若 k=2 表示要找出陣列中第二大的值。也就是 sort 完後的 array 的倒數第二個 index 的值。
 * 可由 3 在正確的位置上導出 3 所在的 index(2) 就是正確位置的 index（pivot 指向 3）
 * 也就是陣列的長度減去 3 所在的 index 若大於 k ，表示 k 存在 3 右半邊的 sub array。
 * 若陣列的長度減去 3 所在的 index 若小於 k，表示 k 所在的值存在 3 左半邊的 sub array。
 * 以此 subarray 進一步做 quick sort recursion，
 * 第二次跑完後 pivot 會指向 index 4 [1, 2, 3, 4, "5", 6]
 * 而陣列長度減去 pivot 等於 2 剛好等於 k，返回 nums[pivot] 就是 array 中倒數第 k 個大的值
 *
 *
 * T.C.: O(nlogn)
 * average case O(n): n + n/2 + n/4 ... (共 logn 次) := O(nlogn)
 * worse case O(n^2): 每次找到做比較的 pivot 都剛好比其他數還小，也就是每次都要搜尋幾乎都個 array
 * n + (n - 1) + (n - 2)...跑 n 次（因為有 n 個數）=> O(n^2)
 * S.C.: O(1)
 */
