/* 
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

/* ------------------------------------------------------------------------------- */

// function canJump(nums: number[]): boolean {
//     let farthest = 0;

//     for (let i = 0; i < nums.length && i <= farthest; i++) {
//         farthest = Math.max(farthest, i + nums[i]);
//     }

//     return farthest >= nums.length - 1;
// }

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// function canJump(nums: number[]): boolean {
//     let p = nums.length - 1;

//     for (let i = nums.length - 2; i >= 0; i--) {
//         if (nums[i] >= p - i) p = i;
//     }

//     return p === 0;
// }

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

function canJump(nums: number[]): boolean {
    const dp = new Array(nums.length).fill(false);
    dp[0] = true;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && j + nums[j] >= i) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[nums.length - 1];
}

/* ------------------------------------------------------------------------------- */

// const nums = [2, 3, 1, 1, 4];
const nums = [3, 2, 1, 0, 4];

console.log(canJump(nums));
