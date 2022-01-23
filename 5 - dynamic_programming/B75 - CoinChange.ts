/** You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin. */

// DP
function coinChange(coins: number[], amount: number): number {
    // dp[0] 用不到，所以需要 amount + 1 個 items。
    const dp = Array.from({ length: amount + 1 }, () => Infinity)

    dp[0] = 0
    // dp[i] 表示滿足 i 的最少硬幣量。
    // dp[1] 表示 coins 可換成 1 的最小硬幣量，dp[2] 表示 coins 可換成 2 的最小硬幣量...dp[11] 等於 可換成 dp[6] 的最小硬幣量加上 5。
    for (let i = 0; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                // dp[i - coin] + 1 表示 dp[i] 會由 dp[i - coin] 再加上一步達到。
                // 假設目前 coin = 2，須滿足的 amount = 5。dp[5 - 2] 也就是滿足 dp[3] 最小量的 coins 加上目前的 coin (2) 的總數量。
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount]
}

// T.C: O(k * N), k = number of coins, N = amount
// S.C: O(N)

// Recursion, Memoization
function coinChange(coins: number[], amount: number): number {
    const table: Map<number, number> = new Map()

    function dfs(remain: number): number {
        if (remain === 0) return 0
        if (table.has(remain)) return table.get(remain) as number
        let min = Infinity

        for (const coin of coins) {
            if (remain - coin >= 0) {
                min = Math.min(min, 1 + dfs(remain - coin))
            }
        }

        table.set(remain, min)

        return min
    }

    const count = dfs(amount)

    return count === Infinity ? -1 : count
}

// T.C: O(k * N), k = number of coins, N = amount
// S.C: O(N)

const coins = [186, 419, 83, 408],
    amount = 6249

console.log(coinChange(coins, amount))
