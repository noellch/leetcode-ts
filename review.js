var rob = function (nums) {
    if (!nums.length) return 0
    if (nums.length === 1) return nums[0]

    let prev = nums[0]
    let current = Math.max(nums[0], nums[1])
    let temp

    for (let i = 2; i < nums.length; i++) {
        temp = current
        current = Math.max(current, nums[i] + prev)
        prev = temp
    }

    return current
}

console.log(rob([2, 7, 9, 3, 1]))
