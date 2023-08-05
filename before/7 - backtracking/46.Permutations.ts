/** Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order. */

// function permute(nums: number[]): number[][] {
//     const result: number[][] = []
//     const cur: number[] = []
//     // 用來記錄目前哪一個 index 的元素被使用過
//     const used = Array.from({ length: nums.length }, () => false)

//     function dfs() {
//         // 長度一樣時抵達 tree 底部
//         if (cur.length === nums.length) return result.push(Array.from(cur))

//         for (let i = 0; i < nums.length; i++) {
//             if (used[i]) continue

//             cur.push(nums[i])
//             // 標記該元素已被使用
//             used[i] = true
//             dfs()
//             // 剛下元素可能性之外的其他可能性
//             cur.pop()
//             used[i] = false
//         }
//     }

//     dfs()

//     return result
// }

function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    if (nums.length === 1) return [[...nums]];

    for (let i = 0; i < nums.length; i++) {
        const n = nums.shift()!;
        const perms = permute(nums);

        for (const perm of perms) {
            perm.push(n);
            result.push([...perm]);
        }

        nums.push(n);
        // perm 跟 nums 是一樣的
        // perm 放進 result => [[3,2],[2,3]] (下一輪 push n=1)
        // nums 為了下一輪
        /**
         * nums:
         * [ 3, 2 ]
         * [ 2, 3 ]
         * [ 2, 3, 1 ]
         * [ 1, 3 ]
         * [ 3, 1 ]
         * [ 3, 1, 2 ]
         * [ 2, 1 ]
         * [ 1, 2 ]
         * [ 1, 2, 3 ]
         */
    }

    return result;
}

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

console.log(permute([1, 2, 3]));
