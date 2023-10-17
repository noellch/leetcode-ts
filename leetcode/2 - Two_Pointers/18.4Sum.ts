/* 
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
*/

/* ------------------------------------------------------------------------------- */

function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);

    const result: number[][] = [],
        quad: number[] = [];

    function kSum(k: number, start: number, target: number) {
        if (k !== 2) {
            for (let i = start; i <= nums.length - k; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;
                quad.push(nums[i]);
                kSum(k - 1, i + 1, target - nums[i]);
                quad.pop();
            }
        } else {
            let l = start,
                r = nums.length - 1;
            while (l < r) {
                if (nums[l] + nums[r] > target) r--;
                else if (nums[l] + nums[r] < target) l++;
                else {
                    result.push([...quad, nums[l], nums[r]]);
                    l++;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }
    }

    kSum(4, 0, target);

    return result;
}

/*
T.C.: O(N^(k-1)) = O(N^3)

S.C.: O(k)
遞迴深度
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 0, -1, 0, -2, 2],
    target = 0;
// const nums = [2, 2, 2, 2, 2],
//     target = 8;

console.log(fourSum(nums, target));
