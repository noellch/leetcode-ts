/** Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

  */

// function canPartition(nums: number[]): boolean {
//     let sum = nums.reduce((a, c) => a + c, 0)

//     if (sum % 2) return false
//     let set: Set<number> = new Set()
//     const target = sum / 2

//     set.add(0)

//     for (let i = 0; i < nums.length; i++) {
//         const nextSet: Set<number> = new Set()
//         for (let t of set) {
//             nextSet.add(t + nums[i])
//             nextSet.add(t)
//         }
//         set = nextSet
//     }

//     return set.has(target) ? true : false
// }

// var canPartition = function (nums: number[]): boolean {
//     let sum = nums.reduce((acc, cur) => acc + cur)
//     if (sum % 2) return false

//     const target = sum / 2
//     let map = new Map()

//     const dfs = (idx: number, target: number): boolean => {
//         if (target === 0) return true
//         if (target < 0 || idx === nums.length) return false
//         if (map.has(`${idx}-${target}`)) return map.get(`${idx}-${target}`)

//         const sum = dfs(idx + 1, target - nums[idx]) || dfs(idx + 1, target)
//         map.set(`${idx}-${target}`, sum)
//         return sum
//     }

//     return dfs(0, target)
// }

var canPartition = function (nums: number[]): boolean {
    let sum = nums.reduce((a, c) => a + c, 0)

    if (sum % 2) return false
    const target = sum / 2

    const dp = []
    dp[0] = true

    for (let i = 1; i < nums.length; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = dp[j] || dp[j - nums[i]]
        }
    }

    return dp[target] || false
}

const nums = [1, 11, 5, 5]
console.log(canPartition(nums))
