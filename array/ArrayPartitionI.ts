var arrayPairSum = function (nums: number[]): number {
    let result = 0

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i += 2) {
        result += nums[i]
    }

    return result
}

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]))
