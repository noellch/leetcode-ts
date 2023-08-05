/* 
https://leetcode.com/problems/combination-sum-ii/

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
*/

/* ------------------------------------------------------------------------------- */

// function combinationSum2(candidates: number[], target: number): number[][] {
//     candidates.sort((a, b) => a - b);

//     const result: number[][] = [];
//     const current: number[] = [];

//     function dfs(idx: number, total: number) {
//         if (total === target) return result.push([...current]);
//         if (total > target || idx > candidates.length - 1) return;

//         current.push(candidates[idx]);
//         dfs(idx + 1, total + candidates[idx]);
//         current.pop();
//         while (candidates[idx] === candidates[idx + 1] && idx + 1 < candidates.length) {
//             idx++;
//         }
//         dfs(idx + 1, total);
//     }

//     dfs(0, 0);

//     return result;
// }

/* ------------------------------------------------------------------------------- */

function combinationSum2(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const result: number[][] = [];
    const current: number[] = [];

    function dfs(idx: number, total: number) {
        if (total === 0) return result.push([...current]);
        if (total < 0) return;

        let prev = -Infinity;

        for (let i = idx; i < candidates.length; i++) {
            if (candidates[i] === prev) continue;
            current.push(candidates[i]);
            dfs(i + 1, total - candidates[i]);
            current.pop();
            prev = candidates[i];
        }
    }
    dfs(0, target);
    return result;
}

/*
T.C.: O(2^N)
- 在最壞的情況下，每個數字都被考慮選擇或不選擇，這會產生一棵高度為 N 的遞迴樹。

S.C.: O(N)
- current 最大可能長度為 N。
- 遞迴樹深度最差且最大為 N。(一般情況可忽略，因為會跳過重複數字)
*/

/* ------------------------------------------------------------------------------- */

const candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8;
// const candidates = [2,5,2,1,2], target = 5

console.log(combinationSum2(candidates, target));
