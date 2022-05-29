/* Given an array, rotate the array to the right by k steps, where k is non-negative. */

/* Follow up:
Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space? */

/* 
要求 S.C. 要為 O(1)
只能修改給定的 array（modify in-place）
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate_1(nums: number[], k: number): void {
    const result: number[] = []

    for (let i = 0; i < nums.length; i++) {
        result[(i + k) % nums.length] = nums[i]
    }

    nums = result
}

rotate_1([1, 2, 3, 4, 5, 6, 7], 3)

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate_2(nums: number[], k: number): void {
    function reverse(start: number, end: number, arr: number[]) {
        while (start < end) {
            ;[arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }

    // 因為 k 很有可能大於 nums 的長度
    k = k % nums.length

    reverse(0, nums.length - 1, nums)
    reverse(0, k - 1, nums)
    reverse(k, nums.length - 1, nums)
}

rotate_2([-1], 2)

/**
 * T.C.: O(n)
 * S.C.: O(1)
 */
