/* 
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/

/* ------------------------------------------------------------------------------- */

// DP
// function coinChange(coins: number[], amount: number): number {
//     const dp = Array.from({ length: amount + 1 }, () => Infinity);
//     dp[0] = 0; // dp's index 表示要達到的的 amount, 值表示達到這個 amount 最小需要的 coins。

//     for (let i = 0; i <= amount; i++) {
//         for (const coin of coins) {
//             if (i - coin >= 0) {
//                 dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
//             }
//         }
//     }

//     return dp[amount] === Infinity ? -1 : dp[amount];
// }

/*
T.C.: O(amount * coin.length)
S.C.: O(amount)
*/

/* ------------------------------------------------------------------------------- */

// Recursion, Memoization
function coinChange(coins: number[], amount: number): number {
    const dp: Map<number, number> = new Map();

    function dfs(remain: number) {
        let min = Infinity;
        if (remain === 0) return 0;
        if (dp.has(remain)) return dp.get(remain) as number;

        for (const coin of coins) {
            if (remain - coin >= 0) {
                min = Math.min(min, 1 + dfs(remain - coin));
            }
        }

        dp.set(remain, min);

        return min;
    }

    return dfs(amount) === Infinity ? -1 : dfs(amount);
}

/*
T.C.: O(K^amount) worst case。其中 K 是硬幣的數量。
S.C.: O(amount)
*/

/* ------------------------------------------------------------------------------- */

const coins = [1, 2, 5],
    amount = 11;

// const coins = [2],
//     amount = 3;

// const coins = [1],
//     amount = 0;

console.log(coinChange(coins, amount));
