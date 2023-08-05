/** You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

 */

//? 找出所有陣列值加減為 target 組合的數量

function findTargetSumWays(nums: number[], target: number): number {
    const dp: Map<string, number> = new Map()

    function backtrack(i: number, total: number): number {
        // 當 i 遍歷過所有陣列值後，若當下的 total 等於 target，表示方法有效，返回 1
        if (i === nums.length) {
            if (total === target) return 1
            else return 0
        }

        if (dp.has(`${i}-${total}`)) return dp.get(`${i}-${total}`) as number

        const ways = backtrack(i + 1, total + nums[i]) + backtrack(i + 1, total - nums[i])
        dp.set(`${i}-${total}`, ways)

        return ways
    }

    return backtrack(0, 0)
}

const nums = [1, 1, 1, 1, 1],
    target = 3
console.log(findTargetSumWays(nums, target))

// T.C: O(T*N)
// S.C: O(T*N)
// T === total 可能的範圍，例：[1, 1, 1, 1, 1] total 可能為 -5 到 5 中間的任何值， T === 10。
