/**
 * A peak element is an element that is strictly greater than its neighbors.

Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.

You must write an algorithm that runs in O(log n) time.
 */

var findPeakElement = function (nums: number[]): number {
    let l = 0,
        r = nums.length - 1,
        mid = 0

    while (l < r) {
        mid = ~~((l + r) / 2)

        if (nums[mid] < nums[mid + 1]) {
            l = mid + 1
        } else {
            r = mid
        }
    }

    return l
}

const nums = [1, 2, 1, 3, 5, 6, 4]

console.log(findPeakElement(nums))
