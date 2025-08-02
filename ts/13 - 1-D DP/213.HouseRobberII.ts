/* 
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

/* ------------------------------------------------------------------------------- */

function rob(nums: number[]): number {
    function helper(subNums: number[]) {
        let prev = 0,
            prevPrev = 0,
            current = 0;

        for (const num of subNums) {
            current = Math.max(num + prevPrev, prev);
            prevPrev = prev;
            prev = current;
        }

        return current;
    }

    return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
}

/**
 * 等於從第一間到倒數第二間和第二間到倒數最後一間的兩種情況的 subproblem
 * 也就是這兩種情況的 House Robber 題目
 * 計算出這兩種情況的金額後取較大值
 * 只有一間房子時的情況會在不算第一間或不算最後一間時被忽略掉，所以要連同 nums[0] 一起考慮進去。
 */

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [2, 3, 2];
// const nums = [1, 2, 3, 1];
// const nums = [1, 2, 3];

console.log(rob(nums));
