/* 
https://leetcode.com/problems/sort-colors/description/
*/

/* ------------------------------------------------------------------------------- */

/**
 Do not return anything, modify nums in-place instead.
 */

function sortColors(nums: number[]): void {
    let left = 0,
        right = nums.length - 1,
        i = 0;

    while (i <= right) {
        if (nums[i] === 0) {
            [nums[i], nums[left]] = [nums[left], nums[i]];
            left++;
            i++;
        } else if (nums[i] === 2) {
            [nums[i], nums[right]] = [nums[right], nums[i]];
            right--;
        } else {
            i++;
        }
    }
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [2, 0, 2, 1, 1, 0];
// const nums = [2, 0, 1];

console.log(sortColors(nums));
