/* 
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.
*/

/* ------------------------------------------------------------------------------- */

function singleNonDuplicate(nums: number[]) {
    let l = 0,
        r = nums.length - 1;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if ((mid - 1 < 0 || nums[mid] !== nums[mid - 1]) && (mid + 1 === nums.length || nums[mid] !== nums[mid + 1])) {
            return nums[mid];
        }

        let leftSize = nums[mid] === nums[mid - 1] ? mid - 1 : mid;

        if (leftSize % 2) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
}

/*
T.C.: O(log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
// const nums = [3, 3, 7, 7, 10, 11, 11];

console.log(singleNonDuplicate(nums));
