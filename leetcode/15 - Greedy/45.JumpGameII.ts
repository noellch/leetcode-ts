/* 
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
*/

/* ------------------------------------------------------------------------------- */

function jump(nums: number[]): number {
    let right = 0,
        left = 0;
    let result = 0,
        farthest = 0;

    while (right < nums.length - 1) {
        for (let i = left; i <= right; i++) {
            farthest = Math.max(farthest, nums[i] + i);
        }

        left = right + 1;
        right = farthest;
        result++;
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [2, 3, 1, 1, 4];
// const nums = [2, 3, 0, 1, 4];

console.log(jump(nums));
