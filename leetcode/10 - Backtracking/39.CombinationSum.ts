/* 
https://leetcode.com/problems/combination-sum/description/
*/

/* ------------------------------------------------------------------------------- */

function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];
    const current: number[] = [];

    function dfs(idx: number, total: number) {
        if (total === target) return result.push([...current]);
        if (total > target || idx > candidates.length - 1) return;

        current.push(candidates[idx]);
        dfs(idx, total + candidates[idx]);
        current.pop();
        dfs(idx + 1, total);
    }
    dfs(0, 0);

    return result;
}

/*
T.C.: O(N * (N^H))
- H 是遞迴樹可能的高度（target / MIN(candidates)）。
- N 是 candidates 的長度，在遞迴樹的每個層級中，我們有 N 個選擇來減少目標，然後遞迴進行。
- 每個節點上的操作涉及構建一個組合，並檢查其總和是否等於目標值。
組合的構建需要 O(N) 的時間，檢查總和是否相等也需要 O(N) 的時間。每個節點的操作成本為 O(N)。
- 
S.C.: O(N * H)
- 遞迴樹最大深度為 H。
- 每一層暫存的陣列最大的長度為 N。
*/

/* ------------------------------------------------------------------------------- */

const candidates = [2, 3, 6, 7],
    target = 7;
// const candidates = [2, 3, 5],
//     target = 8;
// const candidates = [2],
//     target = 1;

console.log(combinationSum(candidates, target));
