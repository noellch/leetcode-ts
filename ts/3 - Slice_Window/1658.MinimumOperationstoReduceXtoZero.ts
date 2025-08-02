/* 
https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/description/
*/

/* ------------------------------------------------------------------------------- */

function minOperations(nums: number[], x: number): number {
    const sum = nums.reduce((a, c) => a + c, 0);
    const target = sum - x;
    let result = -1;

    let l = 0,
        r = 0,
        currentSum = 0;

    while (r < nums.length) {
        currentSum += nums[r];

        while (currentSum > target) {
            currentSum -= nums[l];
            l++;
        }

        if (currentSum === target) {
            result = Math.max(result, r - l + 1);
        }

        r++;
    }

    return result === -1 ? -1 : nums.length - result;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 1, 4, 2, 3],
    x = 5;
console.log(minOperations(nums, x));
