/* 
https://leetcode.com/problems/3sum/description/
*/

/* ------------------------------------------------------------------------------- */

function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    const set: Set<string> = new Set();

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1,
            r = nums.length - 1;

        if (i > 0 && nums[i] === nums[i - 1]) continue;
        if (nums[r] < 0 || nums[i] > 0) break;

        while (l < r) {
            if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            } else if (nums[i] + nums[l] + nums[r] < 0) {
                l++;
            } else {
                if (!set.has(`${nums[i]}/${nums[l]}/${nums[r]}`)) {
                    result.push([nums[i], nums[l], nums[r]]);
                    set.add(`${nums[i]}/${nums[l]}/${nums[r]}`);
                }
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

// const nums = [-1, 0, 1, 2, -1, -4];
const nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4];
// const nums = [0, 1, 1];
// const nums = [0, 0, 0];

console.log(threeSum(nums));
