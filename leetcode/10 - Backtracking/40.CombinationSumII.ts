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
- In the worst case, our algorithm will exhaust all possible combinations from the input array, 
which in total amounts to 2^N as we discussed before.
-The sorting will take O(N * log(⁡N))
To sum up, the overall time complexity of the algorithm is dominated by the backtracking process,
 which is O(2^N)

S.C.: O(N)
- We use the variable comb to keep track of the current combination we build, which requires O(N) space.
- In addition, we apply recursion in the algorithm, which will incur additional memory consumption in the function call stack.
In the worst case, the stack will pile up to O(N) space.
- To sum up, the overall space complexity of the algorithm is O(N)+O(N)=O(N).

Note: we did not take into account the space needed to hold the final results of combination in the above analysis.
*/

/* ------------------------------------------------------------------------------- */

const candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8;
// const candidates = [2,5,2,1,2], target = 5

console.log(combinationSum2(candidates, target));
