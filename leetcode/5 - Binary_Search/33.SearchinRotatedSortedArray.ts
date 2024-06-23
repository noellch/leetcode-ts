/* 
https://leetcode.com/problems/search-in-rotated-sorted-array/description/
*/

/* ------------------------------------------------------------------------------- */

function search(nums: number[], target: number): number {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

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

const nums = [4, 5, 6, 7, 0, 1, 2],
    target = 0;
// const nums = [3, 1],
//     target = 1;
// const nums = [4, 5, 6, 7, 0, 1, 2],
//     target = 3;
// const nums = [1],
//     target = 0;

console.log(search(nums, target));
