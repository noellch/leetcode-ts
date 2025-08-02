/* 
https://leetcode.com/problems/jump-game-ii/
*/

/* ------------------------------------------------------------------------------- */

// function jump(nums: number[]): number {
//     let right = 0,
//         left = 0;
//     let result = 0,
//         farthest = 0;

//     while (right < nums.length - 1) {
//         for (let i = left; i <= right; i++) {
//             farthest = Math.max(farthest, nums[i] + i);
//         }

//         left = right + 1;
//         right = farthest;
//         result++;
//     }

//     return result;
// }

function jump(nums: number[]): number {
    let result = 0,
        farthest = 0,
        currentEnd = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentEnd) {
            result += 1;
            currentEnd = farthest;
        }
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [2, 3, 1, 1, 4];
// const nums = [2, 3, 0, 1, 4];

console.log(jump(nums));
