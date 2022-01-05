var threeSum = function (nums: number[]): number[][] {
    const result = []
    let lp = 0
    let rp = 0

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 2; i++) {
        lp = i + 1
        rp = nums.length - 1

        if (nums[i] > 0 || nums[rp] < 0) break
        if (i > 0 && nums[i + 1] === nums[i]) continue

        while (lp < rp) {
            if (nums[i] + nums[lp] + nums[rp] < 0) lp++
            else if (nums[i] + nums[lp] + nums[rp] > 0) rp--
            else {
                result.push([nums[i], nums[lp], nums[rp]])

                while (lp < rp && nums[lp + 1] === nums[lp]) lp++
                while (lp < rp && nums[rp - 1] === nums[rp]) rp--

                rp--
                lp++
            }
        }
    }

    return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))
