const minSubArrayLen = (arr, num) => {
    let start = 0
    let end = 0
    let total = 0
    let minLen = Infinity
    while (start < arr.length) {
        if (total < num && end < arr.length) {
            total += arr[end]
            end++
        } else if (total >= num) {
            minLen = Math.min(minLen, end - start)
            total -= arr[start]
            start++
        } else {
            break
        }
    }
    return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([1, 3, 5, 6, 7, 8, 10, 14, 30, 67], 44))
