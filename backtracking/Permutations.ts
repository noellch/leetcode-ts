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

console.log(permute([1, 2, 3]))
