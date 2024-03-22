/* 
https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
*/

/* ------------------------------------------------------------------------------- */

// function removeDuplicates(nums: number[]): number {
//     let k = 2;

//     for (let r = 2; r < nums.length; r++) {
//         if (nums[r] !== nums[k - 2]) {
//             nums[k] = nums[r];
//             k++;
//         }
//     }

//     return k;
// }

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

function removeDuplicates(nums: number[]): number {
    let l = 0,
        r = 0;

    while (r < nums.length) {
        let count = 1;
        while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
            count++;
            r++;
        }

        for (let i = 0; i < Math.min(2, count); i++) {
            nums[l] = nums[r];
            l++;
        }

        r++;
    }

    return l;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const nums = [1, 1, 1, 2, 2, 3];

const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

console.log(removeDuplicates(nums));
