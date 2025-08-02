/* 
https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/
*/

/* ------------------------------------------------------------------------------- */

function maxFrequency(nums: number[], k: number): number {
    let result = 0,
        currentSum = 0;
    let l = 0,
        r = 0;
    nums.sort((a, b) => a - b);

    while (r < nums.length) {
        currentSum += nums[r];

        while (nums[r] * (r - l + 1) > k + currentSum) {
            currentSum -= nums[l];
            l++;
        }

        result = Math.max(result, r - l + 1);
        r++;
    }

    return result;
}

/*
T.C.: O(N * log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 2, 4],
    k = 5;

// const nums = [1, 4, 8, 13],
//     k = 5;
// const nums = [3, 9, 6],
//     k = 2;

console.log(maxFrequency(nums, k));
