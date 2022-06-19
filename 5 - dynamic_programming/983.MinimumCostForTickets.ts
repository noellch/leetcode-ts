/**
 *
 * dp[i] 表示到第 i 天為止最小的花費
 * 一開始先假設所有日子都是以買 1 日票計算
 * 再計算第 i 天時再重新以 j 到 i 逐一判斷是不是有買 7 日票時更便宜的選擇
 * 有的話更新 dp[i]
 *  30 天的票也是一樣的邏輯
 */

/** You have planned some train traveling one year in advance. The days of the year in which you will travel are given as an integer array days. Each day is an integer from 1 to 365.

Train tickets are sold in three different ways:

a 1-day pass is sold for costs[0] dollars,
a 7-day pass is sold for costs[1] dollars, and
a 30-day pass is sold for costs[2] dollars.
The passes allow that many days of consecutive travel.

For example, if we get a 7-day pass on day 2, then we can travel for 7 days: 2, 3, 4, 5, 6, 7, and 8.
Return the minimum number of dollars you need to travel every day in the given list of days. */

// function mincostTickets(days: number[], costs: number[]): number {
//     // dp[i] = 到第 i 天為止最小的買票費用
//     const dp = new Array(days.length + 1).fill(Infinity)

//     dp[0] = 0

//     for (let i = 1; i <= days.length; i++) {
//         dp[i] = Math.min(dp[i], dp[i - 1] + costs[0])

//         for (let j = 1; j <= i; j++) {
//             if (days[j - 1] + 7 > days[i - 1]) {
//                 dp[i] = Math.min(dp[i], dp[j - 1] + costs[1])
//             }

//             if (days[j - 1] + 30 > days[i - 1]) {
//                 dp[i] = Math.min(dp[i], dp[j - 1] + costs[2])
//             }
//         }
//     }

//     return dp.pop()!
// }

var mincostTickets = function (days: number[], costs: number[]): number {
    // 總共有多少天
    // 若 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31]，dp 就會有 32 個 items
    let dp = new Array(days[days.length - 1] + 1)
    dp[0] = 0
    for (let i = 1; i < dp.length; i++) {
        // day 裡面沒有這天，表示這天不用坐車，所以總花費就等於前一天的
        if (!days.includes(i)) {
            dp[i] = dp[i - 1]
        } else {
            dp[i] = Math.min(
                //  dp[Math.max(0, ...]  是避免 i - ? 小於 0
                dp[Math.max(0, i - 1)] + costs[0],
                dp[Math.max(0, i - 7)] + costs[1],
                dp[Math.max(0, i - 30)] + costs[2]
            )
        }
    }
    // last element of dp will be our answer
    return dp[dp.length - 1]
}
const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31],
    costs = [2, 7, 15]

console.log(mincostTickets(days, costs))
