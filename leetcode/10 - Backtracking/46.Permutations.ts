/* 
https://leetcode.com/problems/permutations/

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

/* ------------------------------------------------------------------------------- */

function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    if (nums.length === 1) return [[...nums]];

    for (let i = 0; i < nums.length; i++) {
        const n = nums.shift() as number;
        const perms = permute(nums);

        for (const perm of perms) {
            perm.push(n);
            result.push(perm);
        }

        nums.push(n);
    }

    return result;
}

/*
T.C.: O(N * N!)
- 在最壞的情況下，N 個不同元素可能有 N! 個排列。對於第一個元素有 N 種選擇，對於第二個元素有 (N-1) 種選擇，
對於第三個元素有 (N-2) 種選擇，依此類推，直到對於最後一個元素只有 1 種選擇。導致 N * (N-1) * (N-2) * ... * 1 = N!個排列。
- 對於 N! 個排列中的每一個需要 O(N) 的時間來複製排列（因為要複製 N 個元素）。

S.C.: O(N)
- 透過遞迴呼叫交換陣列中的元素來生成排列。在這種情況下，空間複雜度由遞迴堆疊的最大深度所決定。
- 每個遞迴層級對應於將一個元素交換到正確位置。因此，遞迴樹的最大深度將等於輸入陣列的長度 N。
*/

/* ------------------------------------------------------------------------------- */

// function permute(nums: number[]): number[][] {
//     const result: number[][] = [];
//     const current: number[] = [];
//     const used = Array.from({ length: nums.length }, () => false);

//     function dfs() {
//         console.log(current);
//         if (current.length === nums.length) return result.push([...current]);

//         for (let i = 0; i < nums.length; i++) {
//             if (used[i]) continue;
//             current.push(nums[i]);
//             used[i] = true;
//             dfs();
//             current.pop();
//             used[i] = false;
//         }
//     }

//     dfs();

//     return result;
// }

/* ------------------------------------------------------------------------------- */

const nums = [1, 2, 3];
// const nums = [0, 1];
// const nums = [1];

console.log(permute(nums));
