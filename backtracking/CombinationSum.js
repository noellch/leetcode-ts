/* Q: Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input. */

//? 給定一個所有數字都唯一的陣列 candidates 和一個 目標數字 target。要找出 candidates 中所有和為 target 的可能性。
//? 同一個數字可以不斷重複被使用，只要相加的組合數字不相同即可。

var combinationSum = function (candidates, target, pointer = 0, cur = [], combination = []) {
    // 這題使用了 backtracking 的概念。

    // pointer 為當下處理的 candidates 中項目的 index。
    // target 每判斷一個數字後就等於自己減掉那個數字。一直到 target 等於或小於 0，碰到 base case 後 return。
    // cur 為當下處理過的數組，在 target 還未碰到 base case 時繼續把判斷過的數字 push 進去。
    // combination 為 base case 剛好等於 0 時 cur 內的數組。

    // base case
    if (target <= 0) {
        // target 剛好等於 0 時，將 cur 內的數組放進 combination 中。
        if (target === 0) combination.push([...cur])
        return
    }

    if (pointer < candidates.length) {
        // 每一次的 recursion 將當下的值放進 cur。
        const value = candidates[pointer]
        cur.push(value)
        // 進行 recursion 直到 target 小於等於 0。
        // ex: candidates = [2, 3, 6, 7]，會將 2 不斷 push 進 cur，直到 cur = [2, 2, 2, 2] 時 target = -1 後 return 當下的 context。
        // 這時將 [2, 2, 2, 2].pop()，進行下一次的 recursion。這時 cur = [2, 2, 2, 3]。 target = -2 return。再將 [2, 2, 2, 3].pop()。
        // 直到 pointer 超過 candidates.length。再次 return 當下的 context，將[2, 2, 2].pop()。
        combinationSum(candidates, target - value, pointer, cur, combination)
        // 拿掉 cur 數組中最後一個項目，改為 candidates 中的下一位。
        cur.pop()
        combinationSum(candidates, target, pointer + 1, cur, combination)
    }

    return combination
}

console.info(combinationSum([2, 3, 6, 7], 7))

//* backtracking...
