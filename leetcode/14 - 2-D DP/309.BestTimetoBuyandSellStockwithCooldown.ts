/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/

/* ------------------------------------------------------------------------------- */
// 2D-DP
// function maxProfit(prices: number[]): number {
//     const dp = Array.from({ length: prices.length }, () => [0, 0]);
//     dp[0][1] = -prices[0];

//     for (let i = 1; i < prices.length; i++) {
//         dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
//         dp[i][1] = Math.max(dp[i - 1][1], (i - 2 < 0 ? 0 : dp[i - 2][0]) - prices[i]);
//     }

//     return Math.max(...dp[prices.length - 1]);
// }

/* 
dp[i][0] 表示第 i 天結束時不持有股票的最大利潤，dp[i][1] 表示第 i 天結束時持有股票的最大利潤。
初始條件是 dp[0][0] = 0（第一天不持有股票的利潤為 0）和 dp[0][1] = -prices[0]（第一天持有股票，成本為 prices[0]）。

接下來，我們遍歷每一天的價格，並根據狀態轉移方程更新 dp 陣列：
dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i])（今天不持有股票的最大利潤取決於昨天不持有股票或昨天持有股票但今天賣出）。
dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices[i])（今天持有股票的最大利潤取決於昨天持有股票或前天不持有股票但今天購買）。
*/

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

function maxProfit(prices: number[]): number {
    const map: Map<string, number> = new Map(); // `index-buying` : max profit of that day

    function dfs(idx: number, buying: boolean): number {
        if (idx >= prices.length) return 0;
        if (map.has(`${idx}-${buying}`)) return map.get(`${idx}-${buying}`) as number;

        const coolDown = dfs(idx + 1, buying);
        if (buying) {
            const buy = dfs(idx + 1, !buying) - prices[idx];
            map.set(`${idx}-${buying}`, Math.max(buy, coolDown));
        } else {
            const sell = dfs(idx + 2, !buying) + prices[idx];
            map.set(`${idx}-${buying}`, Math.max(sell, coolDown));
        }

        return map.get(`${idx}-${buying}`) as number;
    }

    return dfs(0, true);
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const prices = [1, 2, 3, 0, 2];
// const prices = [1];

console.log(maxProfit(prices));
