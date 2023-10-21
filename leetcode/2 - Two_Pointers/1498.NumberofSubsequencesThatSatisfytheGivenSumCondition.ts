/* 
You are given an array of integers nums and an integer target.

Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.
*/

/* ------------------------------------------------------------------------------- */

function numSubseq(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    const mod = 10 ** 9 + 7;

    let result = 0;
    let r = nums.length - 1;
    let l = 0;

    while (l <= r) {
        if (nums[l] + nums[r] > target) {
            r--;
        } else {
            result = (result + Math.pow(2, r - l)) % mod;
            l++;
        }
    }

    return result;
}

/*
T.C.: O(N * Nlog(N))
S.C.: O(1)
*/
/* ------------------------------------------------------------------------------- */

// const nums = [3, 5, 6, 7],
//     target = 9;
const nums = [
        14, 4, 6, 6, 20, 8, 5, 6, 8, 12, 6, 10, 14, 9, 17, 16, 9, 7, 14, 11, 14, 15, 13, 11, 10, 18, 13, 17, 17, 14, 17,
        7, 9, 5, 10, 13, 8, 5, 18, 20, 7, 5, 5, 15, 19, 14,
    ],
    target = 22;
// const nums = [3, 3, 6, 8],
//     target = 10;
// const nums = [2, 3, 3, 4, 6, 7],
//     target = 12;

console.log(numSubseq(nums, target));
