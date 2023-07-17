/* 
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
*/

/* ------------------------------------------------------------------------------- */

function search(nums: number[], target: number): number {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (target === nums[mid]) return mid;

        if (nums[mid] >= nums[l]) {
            if (target > nums[mid] || target < nums[l]) l = mid + 1;
            else r = mid - 1;
        } else {
            if (target < nums[mid] || target > nums[r]) r = mid - 1;
            else l = mid + 1;
        }
    }

    return -1;
}

/* 
有兩種情況：
#case1: array 旋轉後最小值超過 array 中位。[2, 3, 4, 5, 6, *0, 1]
#case2: array 旋轉後最小值不超過 array 中位。[5, 6, *0, 1, 2, 3, 4]
*/

/*
T.C.: O(log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const nums = [4, 5, 6, 7, 0, 1, 2],
//     target = 0;
const nums = [3, 1],
    target = 1;
// const nums = [4, 5, 6, 7, 0, 1, 2],
//     target = 3;
// const nums = [1],
//     target = 0;

console.log(search(nums, target));
