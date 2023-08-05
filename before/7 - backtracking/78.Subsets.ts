/** Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order. */

// function subsets(nums: number[]): number[][] {
//     const result: number[][] = []
//     const subset: number[] = []

//     function dfs(idx: number) {
//         result.push([...subset])

//         for (let i = idx; i < nums.length; i++) {
//             subset.push(nums[i])
//             dfs(i + 1)
//             subset.pop()
//         }
//     }

//     dfs(0)
//     return result
// }

function subsets(nums: number[]): number[][] {
    const result: number[][] = []
    const subset: number[] = []

    function dfs(idx: number) {
        if (idx === nums.length) return result.push([...subset])

        // 該數字放進 subset 的情況
        subset.push(nums[idx])
        dfs(idx + 1)

        // 該數字不放進 subset 的情況
        subset.pop()
        dfs(idx + 1)
    }

    dfs(0)
    return result
}

/**
 *  所以會有兩種支線同時進行
 *  每一個數字都有兩種選擇，包含他放進 subset 或不放進 subset
 *                  [1]                      []
 *          [1,2]          [1]        [2]         []
 *      [1,2,3]  [1,2] [1,3]  [1]  [2,3]  [2]   [3]  []
 */

console.log(subsets([1, 2, 3]))
