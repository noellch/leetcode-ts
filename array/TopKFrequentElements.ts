/** Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 */

// function topKFrequent(nums: number[], k: number): number[] {
//     let hash: { [key: string]: number } = {}
//     //hash table (數字：出現頻率)
//     for (let i = 0; i < nums.length; i++) {
//         hash[nums[i]] = (hash[nums[i]] ?? 0) + 1
//     }

//     let keys = Object.keys(hash)
//     keys.sort((a, b) => {
//         return hash[b] - hash[a]
//     })

//     const result = keys.slice(0, k).map((s) => +s)

//     return result
// }

// function topKFrequent(nums: number[], k: number): number[] {
//     const freqMap = new Map()
//     const bucket: Set<number>[] = []
//     const result = []

//     // hash table (數字：出現頻率)
//     for (let num of nums) {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1)
//     }

//     // 相同頻率的數字放進同一個 bucket 中，bucket 的 index 等於出現的頻率。
//     for (let [num, freq] of freqMap) {
//         bucket[freq] = (bucket[freq] ?? new Set()).add(num)
//     }

//     // 因為 bucket 的 index 等於數字出現的頻率，所以由 index 大的開始向下找 k 個數字放進 result 中。
//     // result 長度等於 k 時結束迴圈。
//     for (let i = bucket.length - 1; i >= 0; i--) {
//         if (bucket[i]) result.push(...bucket[i])
//         if (result.length === k) break
//     }
//     return result
// }

function topKFrequent(nums: number[], k: number): number[] {
    type FreqMap = {
        [key: number]: number
    }
    const freqMap: FreqMap = {}
    const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => [])
    const result: number[] = []

    for (const num of nums) {
        freqMap[num] = (freqMap[num] ?? 0) + 1
    }

    for (const num in freqMap) {
        bucket[freqMap[num]].push(+num)
    }

    for (let i = bucket.length - 1; i > 0; i--) {
        if (bucket[i].length > 0) result.push(...bucket[i])
        if (result.length === k) break
    }

    return result
}

const nums = [1, 1, 1, 2, 2, 2, 3],
    k = 2

console.log(topKFrequent(nums, 2))

/**
 * bucket sort
 * 創建一個以出現頻率為 index，出現元素值為值的 bucket。
 *
 * index => [出現元素值]
 *   3          1(1 出現 3 次)
 */
