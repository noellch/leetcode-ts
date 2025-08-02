/* 
https://leetcode.com/problems/sliding-window-maximum/description/
*/

/* ------------------------------------------------------------------------------- */

// monotonically decreasing queue problem
function maxSlidingWindow(nums: number[], k: number): number[] {
    const queue: number[] = [];
    const result: number[] = [];

    let l = 0,
        r = 0;

    while (r < nums.length) {
        while (queue.length && nums[queue[queue.length - 1]] < nums[r]) {
            queue.pop();
        }
        queue.push(r);

        if (l > queue[0]) {
            queue.shift();
        }

        if (r - l + 1 === k) {
            result.push(nums[queue[0]]);
            l++;
        }
        r++;
    }

    return result;
}

/*
monotonically decreasing queue problem
monotonic queue 可以用來找尋區間的最大或最小值

T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const nums = [1, 3, -1, -3, 5, 3, 6, 7],
    k = 3;
// const nums = [1], k = 1

console.log(maxSlidingWindow(nums, k));
