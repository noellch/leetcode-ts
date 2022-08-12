/* 
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index. 
*/

function jump(nums: number[]): number {
    let l = 0,
        r = 0,
        result = 0;

    while (r < nums.length - 1) {
        let farthest = 0;

        for (let i = l; i <= r; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }

        l = r + 1;
        r = farthest;
        result++;
    }

    return result;
}

/**
 * [2, 3, 1, 1, 4]
 * 可以把跳躍的過程視為 2D decision tree 的 BFS
 *
 * 2 可到 3(i1) 或 1(i2)
 * 3 可到 1(i2)(因為也可從 2(i0) 到達所以不考慮)，1(i3) 或 4(i5)
 * 1 可到 1(i4)
 * 所以其實整個 array 可分為幾個部分 [[2][3, 1][1, 4]]。也就是 [2] 可 1 步到 [3, 1]、[3, 1] 可一步到 [1, 4]。
 * 也就是說不論如何，只要兩步就能從 [2] 的區塊到達 [1, 4] 的區塊。
 *
 * 設定左右 pointer 表示每個部分的最左跟最右
 * loop 這個部分每個元素最遠可以走到哪，然後更新 farthest。像 [3, 1] 的部分最遠就可到 4(i4)。
 * 這樣就可得出下個部分的範圍。
 * 下個部分的 left 會等於這個部分的 right+1，下個部分的 right 會等於這個部分的 farthest。
 * 然後將 result + 1，表示走了一步。
 * 下個部分的 right 超過 array 的倒數第二個 index，代表已經 reach 到 last index
 * 最後返回 result
 */

/* 
T.C.: O(n)
S.C.: O(1)
*/

const nums = [2, 3, 1, 1, 4];

console.log(jump(nums));
