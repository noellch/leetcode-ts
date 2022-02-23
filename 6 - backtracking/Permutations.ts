/** Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order. */

function permute(nums: number[]): number[][] {
    const result: number[][] = []

    // 用來記錄目前哪一個 index 的元素被使用過
    const used = Array.from({ length: nums.length }, () => false)

    function helper(n: number[], sub: number[], used: boolean[]) {
        // sub[] 長度達到跟 nums[] 一樣時抵達 tree 底部
        if (sub.length === nums.length) {
            // 因為我們操縱的是同一個 array (sub)，所以在 push 進 result[] 時可使用 Array.from 複製一份，才不會不斷重複修改同一個 array。
            // result.push([...sub])
            result.push(Array.from(sub))
            return
        }

        for (let i = 0; i < n.length; i++) {
            // 剛元素在這迴圈之前被使用過，略過這輪
            if (used[i]) continue

            sub.push(n[i])
            // 標記該元素已被使用
            used[i] = true
            // backtrack
            helper(n, sub, used)
            // 另一個分支的可能性
            // 假設 sub[a ,b ,c] , n[d, e]
            // 已繼續放入 helper 做 recursion，所以 pop 掉 c，並將 c 標誌成未使用
            // 下一輪會變成 sub[a ,b ,d] 放入 helper 做 recursion
            sub.pop()
            used[i] = false
        }
    }

    helper(nums, [], used)

    return result
}

// function permute(nums: number[]): number[][] {
//     const result: number[][] = []

//     // base case
//     if (nums.length === 1) return [Array.from(nums)]

//     for (let i = 0; i < nums.length; i++) {
//         let n = nums.shift()!
//         const perms = permute(nums)

//         for (const perm of perms) {
//             perm.push(n)
//             result.push([...perm])
//         }

//         nums.push(n)
//     }

//     return result
// }

console.log(permute([1, 2, 3]))

/**
 *
 * 每一層都 shift 掉最前方的值，直到 nums.length 等於 1 從 base case 返回。
 * 在返回後的每一層 將 shift 掉的值 push 回去。
 * ex: [1,   2, 3]
 *   [2, 3]
 * [3]   [2]
 *
 * 最底層 [3] 遇到 base case 返回後 push 2 => [3, 2]
 * 再 shift 掉 3 往下到底層 [2] 遇到 base case 返回後 push 3 => [2, 3]
 * 再返回頂層 push 1 得到 [3, 2, 1], [2, 3, 1]
 * 另外兩個分支概念一樣。
 */
