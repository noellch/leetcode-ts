/* Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time. */

/**
 * write an algorithm that runs in O(log n) time
 */

function findMin_1(nums: number[]): number {
    let left = 0,
        right = nums.length - 1
    let mid: number

    while (left < right) {
        mid = ~~((left + right) / 2)

        if (nums[mid] > nums[right]) left = mid + 1
        else right = mid
    }

    return nums[left]
}

console.log(findMin_1([4, 5, 6, 7, 8, 9, 1, 2, 3]))

/**
 * T.C.: O(logn)
 * S.C.: O(1)
 */

function findMin_2(nums: number[]): number {
    let res = nums[0]
    let left = 0,
        right = nums.length - 1
    let mid: number

    while (left <= right) {
        if (nums[left] <= nums[right]) {
            res = Math.min(nums[left], res)
            break
        }

        mid = ~~((left + right) / 2)
        res = Math.min(nums[mid], res)

        if (nums[mid] >= nums[left]) left = mid + 1
        else right = mid - 1
    }

    return res
}

console.log(findMin_2([4, 5, 6, 7, 8, 9, 1, 2, 3]))

/**
 * T.C.: O(logn)
 * S.C.: O(1)
 */
