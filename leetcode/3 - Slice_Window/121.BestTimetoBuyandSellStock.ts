/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

/* ------------------------------------------------------------------------------- */

// function maxProfit(prices: number[]): number {
//     let maxProfit = 0,
//         min = Infinity;

//     for (let i = 0; i < prices.length; i++) {
//         min = Math.min(min, prices[i]);
//         maxProfit = Math.max(maxProfit, prices[i] - min);
//     }

//     return maxProfit;
// }

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let r = 0,
        l = 0;
    while (r < prices.length) {
        r++;
        if (prices[r] > prices[l]) {
            maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
        } else l = r;
    }

    return maxProfit;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7,6,4,3,1]

console.log(maxProfit(prices));
