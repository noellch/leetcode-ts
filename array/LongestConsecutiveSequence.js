/* Q: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 */

var longestConsecutive = function (nums) {
    if (nums.length <= 0) return 0

    let maxLen = 0,
        temp = 0

    const n = new Set(nums)
    nums = [...n]

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] - nums[i] === 1) {
            ++temp
        } else {
            maxLen = Math.max(temp, maxLen)
            temp = 0
        }
    }

    return maxLen + 1
}

var longestConsecutive = function (nums) {
    if (nums.length <= 0) return 0

    let maxLen = 0,
        temp = 0

    const set = new Set(nums)

    for (let num of set) {
        // 如果當下的 num -1 存在，先不管他，直到找到沒有前個數字的 num 當作連續數字的開頭。
        if (set.has(num - 1)) continue

        // 找到開頭後開始判斷有沒有存在下一位。有的話將 temp 跟自身 + 1。不然會一直困在 while 裏。
        while (set.has(num + 1)) {
            temp++
            num++
        }

        maxLen = Math.max(maxLen, temp)
        // 找到目前的最長數組後，要將 temp 歸零。
        temp = 0
    }

    return maxLen + 1
}
const nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]

console.log(longestConsecutive(nums))
