/* 
https://leetcode.com/problems/subarray-sum-equals-k/description/
*/

/* ------------------------------------------------------------------------------- */

function subarraySum(nums: number[], k: number): number {
    const prefixSum: Record<number, number> = { 0: 1 };
    let currentSum = 0;
    let result = 0;

    for (let num of nums) {
        currentSum += num;
        const diff = currentSum - k;
        if (diff in prefixSum) {
            result += prefixSum[diff];
        }
        prefixSum[currentSum] = ++prefixSum[currentSum] || 1;
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 1, 1],
    k = 2;
// const nums = [1, 2, 3],
//     k = 3;

console.log(subarraySum(nums, k));
