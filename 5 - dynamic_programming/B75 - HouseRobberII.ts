/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place
 * are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected
 * and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without
 * alerting the police.
 */

function rob(nums: number[]): number | null {
    function helper(subnums: number[]): number {
        let current = 0,
            prev = 0,
            temp = 0

        for (let i = 0; i < subnums.length; i++) {
            temp = current
            current = Math.max(subnums[i] + prev, current)
            prev = temp
        }

        return current
    }

    return Math.max(nums[0], helper(nums.slice(0, nums.length - 1)), helper(nums.slice(1, nums.length)))
}

console.log(rob([1]))

/**
 * 等於從第一間到倒數第二間和第二間到倒數最後一間的兩種情況的 subproblem
 * 也就是這兩種情況的 House Robber 題目
 * 計算出這兩種情況的金額後取較大值
 * 別忘了取最大值時要把第一間的金額也一起比較，做為房子只有一間時的案例
 */
