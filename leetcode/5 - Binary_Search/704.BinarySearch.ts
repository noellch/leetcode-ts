/* 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

/* ------------------------------------------------------------------------------- */

function search(nums: number[], target: number): number {
    let l = 0,
        r = nums.length - 1;
    let mid = Math.floor((r + l) / 2);

    while (l <= r) {
        if (target < nums[mid]) r = mid - 1;
        else if (target > nums[mid]) l = mid + 1;
        else return mid;

        mid = Math.floor((r + l) / 2);
    }

    return -1;
}

/*
T.C.: O(1)
S.C.: O(log(N))
*/

/* ------------------------------------------------------------------------------- */

const nums = [-1, 0, 3, 5, 9, 12],
    target = 9;
// const nums = [-1, 0, 3, 5, 9, 12],
//     target = 2;

console.log(search(nums, target));
