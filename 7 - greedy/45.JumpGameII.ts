/* Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index. */

function jump(nums: number[]): number {
    let l = 0,
        r = 0,
        result = 0;

    while (r < nums.length - 1) {
        let farthest = 0;

        // 遍歷該部分的每個元素並找出這部分最遠可到哪
        for (let i = l; i < r + 1; i++) {
            farthest = Math.max(farthest, nums[i] + i);
        }

        l = r + 1;
        r = farthest;
        result++;
    }

    return result;
}

/**
 * [2, 3, 1, 1, 4]
 * 2 可到 3(index1) 或 1(index2)
 * 3 可到 1(index2)(因為也可從 2(index0) 到達所以不考慮)，1(index3) 或 4(index5) , 1 可到 1(index4)
 * 所以其實整個 array 可分為幾個部分 [2][3, 1][1, 4]。也就是 [2] 最少 1 步到 [3, 1]，[3, 1] 最少一步到 [1, 4]
 *
 * 設定左右 pointer 分別指向每個部分的最左跟最右
 * for loop 這個部分每個元素最遠可以走到哪，然後更新 farthest。
 * 這樣可以得出下個部分的範圍跟這個部分最遠可以到哪
 * 下個部分的 left 會等於這個部分的 right+1，下個部分的 right 會等於 farthest
 * 然後將 result + 1，表示走了一步
 * 下個部分的 right 超過 array 的倒數第二個 index，代表已經 reach 到 last index
 * 最後返回 result
 *
 *
 */

console.log(jump([2, 3, 1, 1, 4]));
