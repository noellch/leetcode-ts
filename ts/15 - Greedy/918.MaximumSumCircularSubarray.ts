/* 
https://leetcode.com/problems/maximum-sum-circular-subarray/description/
*/

/* ------------------------------------------------------------------------------- */

function maxSubarraySumCircular(nums: number[]): number {
    let currentMax = 0,
        currentMin = 0,
        globalMax = nums[0],
        globalMin = nums[0],
        total = 0;

    for (const num of nums) {
        currentMax = Math.max(currentMax + num, num);
        globalMax = Math.max(currentMax, globalMax);
        currentMin = Math.min(currentMin + num, num);
        globalMin = Math.min(currentMin, globalMin);
        total += num;
    }

    return globalMax > 0 ? Math.max(globalMax, total - globalMin) : globalMax;
}

/* 
Kadane's 演算法原用於求最大子數組和，但循環數組的情況較特殊。主要思路：

求一般最大子數組和 (case 1) 使用 Kadane's 演算法。
求一般最小子數組和 (case 2)，並用 總和減掉最小和 即為最大循環子數組和的可能結果。

比較 case 1 與 case 2 的結果，取較大的即是答案。
edge case：若 nums 全為負數，則最大子數組和與最大循環子數組和的結果都是其中最大元素（最小負數）。
*/

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
