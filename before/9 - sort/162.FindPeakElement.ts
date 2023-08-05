/* A peak element is an element that is strictly greater than its neighbors.

Given an integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.

You must write an algorithm that runs in O(log n) time. */

/**
 * You must write an algorithm that runs in O(log n) time.
 * nums[i] != nums[i + 1] for all valid i.
 */

var findPeakElement = function (nums: number[]): number {
    let l = 0,
        r = nums.length - 1,
        mid = ~~((l + r) / 2);

    while (l < r) {
        // nums[mid+1]>nums[mid] 表示 peak 會存在 mid 到 r 這個區間
        if (nums[mid] < nums[mid + 1]) l = mid + 1;
        // 相反情況
        else r = mid;
        mid = ~~((l + r) / 2);
    }

    // return l 或 r 都可以
    return r;
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
