/* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

/* ------------------------------------------------------------------------------- */

function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];

    if (nums.length < 3) return result;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1,
            r = nums.length - 1;

        if (i > 0 && nums[i - 1] === nums[i]) continue;
        if (nums[i] > 0 || nums[r] < 0) break;

        while (l < r) {
            if (l < r && nums[i] + nums[l] + nums[r] > 0) r--;
            else if (l < r && nums[i] + nums[l] + nums[r] < 0) l++;
            else {
                result.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l + 1] === nums[l]) l++;
                while (l < r && nums[r - 1] === nums[r]) r--;
                r--;
                l++;
            }
        }
    }

    return result;
}

/*
T.C.: O(N^2) + O(N * log(N))
S.C.: O(N) or O(1) // depends on how sorting implements
*/

/* ------------------------------------------------------------------------------- */

const nums = [-1, 0, 1, 2, -1, -4];
// const nums = [0, 1, 1];
// const nums = [0, 0, 0];

console.log(threeSum(nums));
