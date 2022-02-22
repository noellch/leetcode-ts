/* Q: Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input. */

//? 給定一個所有數字都唯一的陣列 candidates 和一個 目標數字 target。要找出 candidates 中所有和為 target 的可能性。
//? 同一個數字可以不斷重複被使用，只要相加的組合數字不相同即可。

var combinationSum = function (candidates: number[], target: number) {
    const result: number[][] = []

    function dfs(i: number, cur: number[], total: number) {
        if (total === target) return result.push(Array.from(cur))

        if (i >= candidates.length || total > target) return

        cur.push(candidates[i])
        dfs(i, cur, total + candidates[i])
        console.log(cur)
        cur.pop()
        dfs(i + 1, cur, total)
    }

    dfs(0, [], 0)

    return result
}

console.info(combinationSum([2, 3, 6, 7], 7))

/**
 * 
[ 2, 2, 2, 2 ]
[ 2, 2, 2, 3 ]
[ 2, 2, 2, 6 ]
[ 2, 2, 2, 7 ]
[ 2, 2, 2 ]
[ 2, 2, 3 ]
[ 2, 2, 6 ]
[ 2, 2, 7 ]
[ 2, 2 ]
[ 2, 3, 3 ]
[ 2, 3, 6 ]
[ 2, 3, 7 ]
[ 2, 3 ]
[ 2, 6 ]
[ 2, 7 ]
[ 2 ]
[ 3, 3, 3 ]
[ 3, 3, 6 ]
[ 3, 3, 7 ]
[ 3, 3 ]
[ 3, 6 ]
[ 3, 7 ]
[ 3 ]
[ 6, 6 ]
[ 6, 7 ]
[ 6 ]
[ 7 ]
 */
