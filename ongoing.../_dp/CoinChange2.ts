/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.
 */

// function change(amount: number, coins: number[]): number {
//     const dp: Map<string, number> = new Map()

//     function dfs(idx: number, a: number): number {
//         if (a === 0) return 1
//         else if (a < 0) return 0

//         if (idx === coins.length) return 0
//         if (dp.has(`${idx}-${a}`)) return dp.get(`${idx}-${a}`) as number

//         const ways = dfs(idx, a - coins[idx]) + dfs(idx + 1, a)

//         dp.set(`${idx}-${a}`, ways)
//         return ways
//     }

//     return dfs(0, amount)
// }

/**
 * 每次都有使不使用當前的硬幣兩種選擇
 * ex: [1,2,5] 5
 * 先判斷使不使用硬幣 1。若不使用，則等於 [2,5] 兩種硬幣要組成 5 的方法。
 * 若使用，則等於[1,2,5] 要組成 4 的方法
 * 這兩種情況的方法相加就是 [1,2,5] 要組成 5 的總方法數。
 */

var change = function (amount: number, coins: number[]): number {
    let dp = new Array(coins.length + 1).fill(0).map(() => new Array(amount + 1).fill(0))

    dp[0][0] = 1
    // 用 1、2、5 換成 0 情況，都各是一種方法
    for (let i = 0; i < dp.length; i++) dp[i][0] = 1
    for (let id = 1; id < dp.length; id++) {
        for (let amount = 1; amount < dp[0].length; amount++) {
            dp[id][amount] = dp[id - 1][amount]

            if (coins[id - 1] <= amount) {
                dp[id][amount] += dp[id][amount - coins[id - 1]]
            }
        }
    }

    return dp[coins.length][amount]
}

/**
 * [1,2] 組合 5 若不使用 2 單純使用 1
 * 方法數為 1，等於 [1] 要組成 5 的方法數
 * 加上若使用 2，等於 [1,2] 要組成 3 的方法數，也就是 1
 * 所以 [1,2] 要組成 5 的總方法數為 2
 * 延伸至 [1,2,5]
 * 設定一個 2-D 矩陣，
 * 行代表 0 到 K ，k 為要組成的目標值
 * 列代表 每個硬幣值
 *
 * [   0  1  2  3  4  5
 *   [ 1, 0, 0, 0, 0, 0 ], // 沒有硬幣被使用的狀況
 * 1 [ 1, 1, 1, 1, 1, 1 ], // 只用 1 的狀況
 * 2 [ 1, 1, 2, 2, 3, 3 ], // 用了 1、2 的狀況
 * 5 [ 1, 1, 2, 2, 3, 4 ] ] // 用了 1、2、5 的狀況
 *
 */

// var change = function (amount: number, coins: number[]): number {
//     let dp = new Array(amount + 1).fill(0)
//     dp[0] = 1

//     for (let i = 0; i < coins.length; i++) {
//         for (let j = 1; j <= amount; j++) {
//             if (j >= coins[i]) {
//                 dp[j] = dp[j] + dp[j - coins[i]]
//             }
//         }
//     }

//     return dp[amount]
// }

/**
 *
 * [ 1, 1, 1, 1, 1, 1 ]
 * [ 1, 1, 2, 2, 3, 3 ]
 * [ 1, 1, 2, 2, 3, 4 ]
 */

const amount = 5,
    coins = [1, 2, 5]

console.log(change(amount, coins))
