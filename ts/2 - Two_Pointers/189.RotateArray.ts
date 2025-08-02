/* 
https://leetcode.com/problems/rotate-array/description/
*/

/* ------------------------------------------------------------------------------- */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k = k % nums.length;

    let l = 0,
        r = nums.length - 1;
    nums = reverseArray(nums, l, r);
    nums = reverseArray(nums, 0, k - 1);
    nums = reverseArray(nums, k, nums.length - 1);

    console.log(nums);
}

function reverseArray(arr: number[], l: number, r: number): number[] {
    while (l < r) {
        const temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }

    return arr;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 2, 3, 4, 5, 6, 7],
    k = 3;
rotate(nums, k);
