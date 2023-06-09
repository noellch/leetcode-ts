/* Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

 */

function subarraySum(nums: number[], k: number): number {
    let result = 0,
        curSum = 0,
        // 讓 prefixSum = { 0: 1 } 預設 pre-subarray 和為 0 的組合為 1
        prefixSum: { [key: string]: number } = { 0: 1 }

    for (const num of nums) {
        curSum += num

        const diff = curSum - k

        // prefixSum 中存在 curSum - k，表示截至目前為止可組合成 k 的 subarray 數量為 prefixSum[curSum - k]
        // 加到 result 上，若不存在則加 0
        result = result + (prefixSum[diff] ?? 0)
        // 每加上新的 num 都把 curSum 放進 prefixSum 做紀錄，表示這個和的組合曾出現過
        prefixSum[curSum] = 1 + (prefixSum[curSum] ?? 0)
    }

    return result
}

/**
 * 為了使這題有 T.C.=O(n) 的解答，我們只能遍歷這個 array 一次。
 * 但要如何在遍歷一次 array 後，得到所有和等於 ｋ 的 subarray 數量？？
 *
 * let array = [a0,a2,a3,a4, ...., a10]，假設 sum[a0~a10] = 10
 * 若 sum[a0~a4] = 6，則 sum[a5~a10] = 10 - 6 = 4
 * 題目要我們找出 subarray 的和等於 k，也就是要我們找出所有 sum[加到目前所有數的總和] - sum[之前曾加過的總和] = k
 * sum[之前曾加過的總和] 的組合數量，可推斷 sum[加到目前所有數的總和] - sum[之前曾加過的總和] = k 能有多少種組合。
 * 讓 curSum = 目前遍歷過元素的和，並在每次加上新的 nums[i] 後都將之放到 prefixSum 的 map 中做紀錄。
 * 這樣我們就可以很方便的得到 sum[之前曾加過的總和] 的組合數量。
 *
 * 每次 curSum 加上新的 nums[i] 時，用 curSum(目前) - k 的值來檢查 prefixSum 中有沒有存在這個 key
 * 這個 key 對應的就是過往計算過的 curSum(prev)， key 若存在表示可得 curSum(current) - curSum(prev) = k
 * curSum(prev) 對應到的值就是先前有多少次 curSum(prev) 曾出現過。
 * 所以 curSum(prev) 出現過多少次就等於有多少種 curSum(current) - curSum(prev) = k 的組合
 */

const nums = [1, -1, 1, 1, 1],
    k = 3

console.log(subarraySum(nums, k))
