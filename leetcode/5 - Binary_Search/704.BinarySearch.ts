/* 
https://leetcode.com/problems/binary-search/description/
*/

/* ------------------------------------------------------------------------------- */

function search(nums: number[], target: number): number {
    let l = 0,
        r = nums.length - 1;

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (target === nums[mid]) return mid;
        if (target < nums[mid]) r = mid - 1;
        else if (target > nums[mid]) l = mid + 1;
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
