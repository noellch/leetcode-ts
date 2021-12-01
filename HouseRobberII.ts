/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place
 * are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected
 * and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without
 * alerting the police.
 */

import * as cowsay from 'cowsay'
console.log(
    cowsay.say({
        text: "I'm a moooodule",
        e: 'oO',
        T: 'U ',
    })
)

function rob(nums: number[]): number | null {
    if (nums.length === 0) return null
    if (nums.length === 1) return nums[0]

    const rob1: number[] = [nums[0]]
    const rob2: number[] = [0, nums[1]]

    // 搶第一間，最後一間不搶
    for (let i = 1; i < nums.length - 1; i++) {
        rob1[i] = Math.max(nums[i] + (rob1[i - 2] || 0), rob1[i - 1])
    }

    // 第一間不搶，搶最後一間
    for (let i = 2; i < nums.length; i++) {
        rob2[i] = Math.max(nums[i] + rob2[i - 2], rob2[i - 1])
    }

    // 兩個方法取最大值
    return Math.max(rob1[rob1.length - 1], rob2[rob2.length - 1])
}

console.log(rob([1, 2, 3, 1]))
