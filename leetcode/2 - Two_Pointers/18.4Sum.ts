/* 
https://leetcode.com/problems/4sum/
*/

/* ------------------------------------------------------------------------------- */

function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);

    const result: number[][] = [],
        sub: number[] = [];

    function kSum(start: number, k: number, target: number) {
        if (k !== 2) {
            for (let i = start; i < nums.length - k + 1; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;
                sub.push(nums[i]);
                kSum(i + 1, k - 1, target - nums[i]);
                sub.pop();
            }
        } else {
            let l = start,
                r = nums.length - 1;
            while (l < r) {
                if (nums[l] + nums[r] > target) r--;
                else if (nums[l] + nums[r] < target) l++;
                else {
                    result.push([...sub, nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    r--;
                    l++;
                }
            }
        }
    }

    kSum(0, 4, target);

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
