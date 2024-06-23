function maxSubarraySum(arr, num) {
    if (num > arr.length) return null

    let maxSum = 0

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }

    let tempSum = maxSum

    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum + arr[j] - arr[j - num]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}
console.log(maxSubarraySum([1, 4, 3, 6, 4, 8, 2, 5, 7, 6, 3, 5, 1, 1, 5, 6, 7], 4))
