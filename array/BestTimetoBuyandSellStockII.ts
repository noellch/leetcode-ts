/* Q: You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve. */

var maxProfit = function (prices: number[]): number {
    let profit = 0

    for (let i = 1; i < prices.length; i += 1) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1]
        }
    }

    return profit
}

console.log(maxProfit([1, 3, 2, 6, 9, 12]))

/**
 *
 * 因為可以在同一天買賣，為求最大利益，一定是在 n 比 n - 1 價格高時賣出。
 * 題目不考慮購入成本，只考慮利潤。故儘管最後一天買入而未賣出也不影響已經發生的利潤。
 * ex: [1, 3, 5, 6, 9]。
 * 若錯過一天高峰，欲求之後天數更高的價格，只會錯過利潤空間。
 * 如第一天購入 (price 1)，第二天 (price 3) 未賣出，而第 5 天賣出(profit: 9 - 1 = 8)，
 * 利潤永遠不會比一高(賣)一低(買)((3 - 1) + (5 - 3) + (6 - 5) + (9 - 6) = 8) 還要大。
 */
