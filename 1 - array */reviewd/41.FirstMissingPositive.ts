/* Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses constant extra space. */

/**
 * must T.C. O(n) and S.C. O(1)
 */

function firstMissingPositive_1(nums: number[]): number {
    let p = 0

    // 調整給定的 array，才能有 S.C. O(1)。
    // 調整目的是要讓每個元素的值，放到這個值 -1 的 index 上。
    // 譬如說 1 就放到 index 0，2 就放到 index 1...所以調整後的 nums 可能為 [1,2,3,4,5...]
    // 但遇到小於等於 0 的值不管，大於 nums 長度的不管，原本所在 index + 1 就等於自己值得也不管。
    while (p < nums.length) {
        //將 nums[i] 放到屬於他的位置，如 3 就跟 index 2 的元素交換，4 就跟 index 3 的元素交換。
        if (nums[p] > 0 && nums[p] <= nums.length && nums[nums[p] - 1] !== nums[p]) {
            ;[nums[nums[p] - 1], nums[p]] = [nums[p], nums[nums[p] - 1]]
        } else p++
    }
    // [3, 4, -1, 1] => [1, -1, 3, 4]
    // 這時只要看哪一個 index 不是連續的，再返回 index + 1 就是缺失的那個值了。

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) return i + 1
    }

    // 調整後的 nums 內的值都是連續的，返回最後那個值的下一位。
    return p + 1
}

console.log(firstMissingPositive_1([3, 4, -1, 1]))

/**
 * T.C.: O(n)
 * S.C.: O(1)
 */

function firstMissingPositive_2(nums: number[]): number {
    const set: Set<number> = new Set(nums)

    let p = 1

    if (!set.has(1)) return 1

    while (set.has(p)) {
        p++
    }

    return p
}

console.log(firstMissingPositive_2([3, 4, -1, 1]))

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */
