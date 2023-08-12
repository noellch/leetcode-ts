/* 
https://leetcode.com/problems/subsets/

Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

/* ------------------------------------------------------------------------------- */

function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    const subset: number[] = [];

    function dfs(idx: number) {
        result.push([...subset]);

        for (let i = idx; i < nums.length; i++) {
            subset.push(nums[i]);
            dfs(i + 1);
            subset.pop();
        }
    }

    dfs(0);
    return result;
}

/* ------------------------------------------------------------------------------- */

// function subsets(nums: number[]): number[][] {
//     const result: number[][] = [];
//     const subset: number[] = [];

//     function dfs(idx: number) {
//         if (idx > nums.length - 1) return result.push([...subset]);

//         subset.push(nums[idx]);
//         dfs(idx + 1);
//         subset.pop();
//         dfs(idx + 1);
//     }

//     dfs(0);

//     return result;
// }

/* ------------------------------------------------------------------------------- */

/**
 *  每一個數字都有兩種選擇，放進 subset 或不放進 subset
 *                  [1]                      []
 *          [1,2]          [1]        [2]         []
 *      [1,2,3]  [1,2] [1,3]  [1]  [2,3]  [2]   [3]  []
 */

/*
T.C.: O(N * 2^N)
- 每個數字的兩種選擇共 2^N 種可能。
- 在每個回溯步驟中，將元素添加到 subset 中，這需要 O(N) 時間。

S.C.: O(N)
- 除了輸入和輸出，額外的空間主要用於遞迴呼叫的 call stack 和 subset，最壞情況下，call stack 的深度是 N。
- subset 的隨著遞迴的進行而變化，最大大小不會超過輸入的陣列長度 N。
*/

const nums = [1, 2, 3];
console.log(subsets(nums));
