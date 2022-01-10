/* Q: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 */

var longestConsecutive = function (nums: number[]): number {
    let longest = 0
    const set: Set<number> = new Set(nums)

    for (let num of set) {
        // 每次找到開頭從新計算數組長度。
        let length = 0

        // 找到開頭開始判斷下一位是否存在。有的話將 length 跟自身 + 1（不然會一直困在 while 裏。）。
        if (!set.has(num - 1)) {
            length = 0
            while (set.has(num)) {
                length++
                num++
            }
            longest = Math.max(longest, length)
        }
    }

    return longest
}
const nums = [100, 4, 200, 1, 3, 2]
console.log(longestConsecutive(nums))

/**
 *
 * 找到每一組連續序列的開頭，沒有前一位鄰近的數字者。
 * ex: 1234 5678 100/ 找到 1、5、100。
 *
 */
