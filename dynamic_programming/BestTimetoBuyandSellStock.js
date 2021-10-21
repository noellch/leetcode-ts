/* Q: You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. */

//? 其中一天買，另一天賣。求利益最大值。

var maxProfit = function (prices) {
    // 先定義最大利益為 0
    let maxProfit = 0
    // edge case: prices = 空陣列
    if (!prices.length) return maxProfit

    // 先假設最小值為第一個
    let minPrice = prices[0]

    for (let i = 1; i < prices.length; i++) {
        // 若迴圈跑道的該項比當下的最小值小，讓最小值調整為該項。
        minPrice = Math.min(minPrice, prices[i])
        // maxProfit 動態調整成，當下該項去減去當下的最小值，跟當下被儲存在 maxProfit 的值，比較的最大值。
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }

    return maxProfit
}

console.log(maxProfit([5, 2, 3, 4, 5]))

//* 有點搞不懂這題跟 dynamic programming 有什麼關係...但邏輯不難理解
