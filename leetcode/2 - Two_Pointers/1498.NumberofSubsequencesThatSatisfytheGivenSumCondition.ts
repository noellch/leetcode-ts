/* 
https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
*/

/* ------------------------------------------------------------------------------- */

function numSubseq(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let result = 0;

    let l = 0,
        r = nums.length - 1;
    const mod = Math.pow(10, 9) + 7;

    const powersOfTwo = [1];

    for (let i = 1; i < nums.length; i++) {
        powersOfTwo[i] = (powersOfTwo[i - 1] * 2) % mod;
    }

    while (l <= r) {
        while (l <= r && nums[l] + nums[r] > target) {
            r--;
        }

        if (l <= r) {
            result = (result + powersOfTwo[r - l]) % mod;
        }
        l++;
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
