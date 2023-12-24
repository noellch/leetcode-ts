/* 
https://leetcode.com/problems/combination-sum-ii/description/
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
            const popped = current.pop();
            prev = popped as number;
        }
    }
    dfs(0, target);
    return result;
}

/*
T.C.: O(2^N)
- sort 的時間複雜度 O(N * log(⁡N))。
- 在最壞的情況下，我們需要遍歷所有可能的組合。
每一層的遞迴都需要嘗試所有的數組元素，但由於每個數字只能使用一次，所以下一層的遞迴需要排除已經使用過的數字。
總的時間複雜度是指數級的 O(2^N)。

S.C.: O(N)
- 在遞迴的過程中，我們需要使用額外的數據結構來保存當前的組合，以及記錄哪些數字已經被選擇過。
這個數據結構的大小取決於遞迴的深度和選擇的數字數量。最壞情況下，所有數組元素都被選中，所以空間複雜度是 O(N)。

*/

/* ------------------------------------------------------------------------------- */

const candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8;
// const candidates = [2,5,2,1,2], target = 5

console.log(combinationSum2(candidates, target));
