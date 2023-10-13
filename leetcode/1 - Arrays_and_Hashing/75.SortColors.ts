/* 
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
*/

/* ------------------------------------------------------------------------------- */

/**
 Do not return anything, modify nums in-place instead.
 */

function swap(i: number, j: number, nums: number[]) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function sortColors(nums: number[]): void {
    let r = nums.length - 1,
        l = 0,
        i = 0;

    while (i <= r) {
        if (nums[i] === 0) {
            swap(i, l, nums);
            i++;
            l++;
        } else if (nums[i] === 2) {
            swap(i, r, nums);
            r--;
        } else i++;
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
