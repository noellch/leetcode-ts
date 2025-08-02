/* 
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
*/

/* ------------------------------------------------------------------------------- */

function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let min = prices[0];

    prices.forEach((price) => {
        min = Math.min(min, price);
        maxProfit = Math.max(maxProfit, price - min);
    });

    return maxProfit;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// function maxProfit(prices: number[]): number {
//     let maxProfit = 0;

//     let l = 0,
//         r = 1;

//     while (r < prices.length) {
//         if (prices[r] - prices[l] > 0) {
//             maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
//         } else {
//             l = r;
//         }
//         r++;
//     }

//     return maxProfit;
// }

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
