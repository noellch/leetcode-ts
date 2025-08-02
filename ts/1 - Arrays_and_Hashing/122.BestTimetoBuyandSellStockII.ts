/* 
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
*/

/* ------------------------------------------------------------------------------- */

function maxProfit(prices: number[]): number {
    let profit = 0;

    prices.forEach((_price, i, prices) => {
        if (prices[i - 1] !== undefined && prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    });

    return profit;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [2, 1, 2, 0, 1];
// const prices = [1, 2, 3, 4, 5];
// const prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
