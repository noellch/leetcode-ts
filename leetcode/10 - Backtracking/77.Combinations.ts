/* 
https://leetcode.com/problems/combinations/description/
*/

/* ------------------------------------------------------------------------------- */

function combine(n: number, k: number): number[][] {
    const result: number[][] = [];
    function backtrack(start: number, comb: number[]) {
        if (comb.length === k) {
            result.push([...comb]);
            return;
        }

        for (let i = start; i <= n; i++) {
            comb.push(i);
            backtrack(i + 1, comb);
            comb.pop();
        }
    }
    backtrack(1, []);
    return result;
}

/*
T.C.: O(C(n, k))
S.C.: O(C(n, k))
在最壞的情況下，我們可能需要存儲所有 C(n, k) 個組合，因此空間複雜度是 O(C(n, k))。
*/

/* ------------------------------------------------------------------------------- */

const n = 4,
    k = 2;

console.log(combine(n, k));
