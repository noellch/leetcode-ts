/* 
https://leetcode.com/problems/permutations-ii/description/
*/

/* ------------------------------------------------------------------------------- */

function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    const perm: number[] = [];
    const count: { [key: number]: number } = {};

    nums.forEach((n) => {
        count[n] = ++count[n] || 1;
    });

    function dfs() {
        if (perm.length === nums.length) {
            result.push([...perm]);
            return;
        }

        for (const n in count) {
            if (count[n] > 0) {
                perm.push(+n);
                count[n] -= 1;

                dfs();

                count[n] += 1;
                perm.pop();
            }
        }
    }

    dfs();
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

const nums = [1, 1, 2];

console.log(permuteUnique(nums));
