/* 
https://leetcode.com/problems/sort-colors/description/
*/

/* ------------------------------------------------------------------------------- */

/**
 Do not return anything, modify nums in-place instead.
 */

const swap = (i: number, j: number, nums: number[]) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

function sortColors(nums: number[]): void {
    let l = 0,
        r = nums.length - 1,
        i = 0;
    while (i <= r) {
        if (nums[i] === 0) {
            swap(i, l, nums);
            i++;
            l++;
        } else if (nums[i] === 2) {
            swap(i, r, nums);
            r--;
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
