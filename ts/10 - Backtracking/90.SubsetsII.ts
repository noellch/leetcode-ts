/* 
https://leetcode.com/problems/subsets-ii/description/
*/

/* ------------------------------------------------------------------------------- */

function subsetsWithDup(nums: number[]): number[][] {
    const result: number[][] = [];
    const subset: number[] = [];

    nums.sort((a, b) => a - b);

    function dfs(idx: number) {
        if (idx > nums.length - 1) return result.push([...subset]);

        subset.push(nums[idx]);
        dfs(idx + 1);

        subset.pop();
        while (idx + 1 < nums.length && nums[idx] === nums[idx + 1]) {
            idx++;
        }
        dfs(idx + 1);
    }

    dfs(0);
    return result;
}

/*
T.C.: O(N * 2^N)
- 對於每個元素，都有兩種可能：選擇或不選擇。所以總共有 2^N 個可能的子集。
- 在每個回溯步驟中，都會將元素添加到 subset 中，這需要 O(N) 時間。
- T.C. 為 O(N * 2^N)，其中 N 是輸入陣列的長度。

S.C.: O(N)
- 除了輸入和輸出，額外的空間主要用於遞迴呼叫的 call stack 和 subset。
- 最壞情況下，call stack 的深度是 N。
- subset 的隨著遞迴的進行而變化，最大大小不會超過輸入的陣列長度 N。
*/

/* ------------------------------------------------------------------------------- */

const nums = [2, 1, 2];
// const nums = [0]

console.log(subsetsWithDup(nums));
