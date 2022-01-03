/** Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7]. */

var lengthOfLIS = function (nums: number[]): number {
    if (nums.length === 1) return 1

    const bs = (list: number[], target: number): number => {
        let left = 0
        let right = list.length - 1
        let mid = 0

        while (left < right) {
            mid = ~~((left + right) / 2)

            if (list[mid] === target) {
                return mid
            }

            if (list[mid] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }

        return left
    }

    const list = []

    for (let i = 0; i < nums.length; i++) {
        if (list[0] === undefined || nums[i] > list[list.length - 1]) {
            list.push(nums[i])
        } else {
            let position = bs(list, nums[i])
            list[position] = nums[i]
        }
    }

    return list.length
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 6, 18]))
