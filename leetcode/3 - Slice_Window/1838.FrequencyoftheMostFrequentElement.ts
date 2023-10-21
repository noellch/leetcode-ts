/* 
The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.
*/

/* ------------------------------------------------------------------------------- */

function maxFrequency(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let r = 0,
        l = 0;
    let result = 0,
        currentTotal = 0;

    while (r < nums.length) {
        currentTotal += nums[r];

        while (nums[r] * (r - l + 1) > currentTotal + k) {
            currentTotal -= nums[l];
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

// const nums = [1, 2, 4],
//     k = 5;

const nums = [1, 4, 8, 13],
    k = 5;
// const nums = [3, 9, 6],
//     k = 2;

console.log(maxFrequency(nums, k));
