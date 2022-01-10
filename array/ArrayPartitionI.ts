/* Q: Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum. */

//? 給定一個包含 2n 個值、兩兩一對共 n 對的 array。求每一對裡最小值的最大和。

var arrayPairSum = function (nums: number[]): number {
    let result = 0

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i += 2) {
        result += nums[i]
    }

    return result
}

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]))

/**
 *
 * 要取兩兩一對中的最小值，首先想到的就是先將 array 的值由小而大排序。
 * ex: [6, 2, 6, 5, 1, 2] 排序 => [1, 2, 2, 5, 6, 6]。以 (1, 2)、(2, 5)、(6, 6) 分組取最小值在相加。
 * 最小值的最大和排法一定是排序後 2 的倍數兩兩一組，取最小值後再相加。
 */
