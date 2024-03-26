/* 
https://leetcode.com/problems/minimum-size-subarray-sum/description/
*/

/* ------------------------------------------------------------------------------- */

function minSubArrayLen(target: number, nums: number[]): number {
    let l = 0,
        r = 0,
        currentSum = 0,
        result = Infinity;

    while (r < nums.length) {
        currentSum += nums[r];

        while (currentSum >= target) {
            result = Math.min(result, r - l + 1);
            currentSum -= nums[l];
            l++;
        }
        r++;
    }

    return result === Infinity ? 0 : result;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const target = 7,
//     nums = [2, 3, 1, 2, 4, 3];
// const target = 4,
//     nums = [1, 4, 4];
const target = 11,
    nums = [1, 1, 1, 1, 1, 1, 1, 1];
// const target = 11,
//     nums = [1, 2, 3, 4, 5];
console.log(minSubArrayLen(target, nums));
