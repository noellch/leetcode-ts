/* 
https://leetcode.com/problems/find-peak-element/description/
*/

/* ------------------------------------------------------------------------------- */

function findPeakElement(nums: number[]) {
    let l = 0,
        r = nums.length - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if (mid > 0 && nums[mid] < nums[mid - 1]) {
            r = mid - 1;
        } else if (mid < nums.length - 1 && nums[mid] < nums[mid + 1]) {
            l = mid + 1;
        } else {
            return mid;
        }
    }
}

/*
T.C.: O(log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 2, 3, 1];
// const nums = [1, 2, 1, 3, 5, 6, 4];

console.log(findPeakElement(nums));
