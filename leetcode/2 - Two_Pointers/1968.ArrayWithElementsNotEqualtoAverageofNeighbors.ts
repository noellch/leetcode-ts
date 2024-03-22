/* 
https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/description/
*/

/* ------------------------------------------------------------------------------- */

function rearrangeArray(nums: number[]): number[] {
    nums.sort((a, b) => a - b);

    const result: number[] = [];
    let l = 0,
        r = nums.length - 1;

    while (l <= r) {
        result.push(nums[l]);
        l++;
        if (nums[l] < nums[r]) {
            result.push(nums[r]);
            r--;
        }
    }

    return result;
}

/*
T.C.: O(Nlog(N))
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 2, 3, 4, 5];
console.log(rearrangeArray(nums));
