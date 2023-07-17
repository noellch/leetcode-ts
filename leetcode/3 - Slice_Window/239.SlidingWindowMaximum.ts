/* 
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.
*/

/* ------------------------------------------------------------------------------- */

function maxSlidingWindow(nums: number[], k: number): number[] {
    const queue = [] as number[];
    const result = [] as number[];
    let r = 0,
        l = 0;

    while (r < nums.length) {
        while (queue.length && nums[queue[queue.length - 1]] < nums[r]) {
            queue.pop();
        }
        queue.push(r);

        // 最左的指標已超過 queue 中保存的 index，表示 queue 中最大的值已經是 window 最左指針之外了。所以要放棄這個值。
        if (l > queue[0]) {
            queue.shift();
        }

        // 因為 r 是從 0 開始的，所以要到 k 以上才開始將最大值放進 result 中。
        if (r + 1 >= k) {
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
