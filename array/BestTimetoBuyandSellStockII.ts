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
