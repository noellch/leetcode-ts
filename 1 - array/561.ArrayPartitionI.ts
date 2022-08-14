/* Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ...,
 (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum. */

function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b)

    // 求 index 奇數位值的和
    return nums.reduce((sum, num, i) => {
        return i % 2 === 0 ? (sum += num) : sum
    }, 0)
}

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]))

/**
 * T.C.: O(nlogn) + O(n) => O(n)
 * S.C.: O(1)
 */

/**
 * 要取兩兩一對中的最小值，先將 array 由小而大排序。
 * ex: [6, 2, 6, 5, 1, 2] 排序 => [1, 2, 2, 5, 6, 6]。以 (1, 2)、(2, 5)、(6, 6) 分組取最小值再相加。
 * 最小值的最大和排法一定是排序後 2 的倍數兩兩一組，取最小值後再相加。
 */
