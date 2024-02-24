/* 
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.
*/

/* ------------------------------------------------------------------------------- */
// DFS
// function change(amount: number, coins: number[]): number {
//     const map: Map<string, number> = new Map();

//     function dfs(idx: number, remain: number): number {
//         if (remain === 0) return 1;

//         const key = `${idx}-${remain}`;
//         if (map.has(key)) return map.get(key) as number;
//         if (idx >= coins.length || remain < 0) return 0;
//         map.set(key, dfs(idx, remain - coins[idx]) + dfs(idx + 1, remain));

//         return map.get(key) as number;
//     }

//     return dfs(0, amount);
// }

/*
T.C.: O(2^N)
每個硬幣都有兩個選擇：選擇或不選擇。如果有 N 枚硬幣，那麼 DFS 將需要探索的可能性數量是 2^N。

S.C.: O(amount * N)
DFS的空間複雜度主要取決於遞迴調用堆棧的深度，以及 memoization 的使用。
當使用 memoization 時，大小通常取決於可能的組合數量，最壞情況下可能達到 O(amount * N)，其中 amount 是目標金額，N 是硬幣的數量。
因此，memoization 的使用可能會使空間複雜度達到 O(amount * N)。

*/

/* ------------------------------------------------------------------------------- */

// 2D-DP
function change(amount: number, coins: number[]): number {
    const dp = new Array(coins.length + 1).fill([]).map((_a) => new Array(amount + 1).fill(0));

    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = 1;
    }

    for (let coinIdx = 1; coinIdx < dp.length; coinIdx++) {
        for (let amountIdx = 1; amountIdx < dp[coinIdx].length; amountIdx++) {
            dp[coinIdx][amountIdx] = dp[coinIdx - 1][amountIdx];
            if (amountIdx - coins[coinIdx - 1] >= 0) {
                dp[coinIdx][amountIdx] += dp[coinIdx][amountIdx - coins[coinIdx - 1]];
            }
        }
    }

    return dp[coins.length][amount];
}

/**
 * [1,2] 組合 5 的方法數等於：不用 2 單純使用 1 的方法數 1（1 種），
 * 加上用了 2（[1,2] 要組成 3（5 - 2）的方法數）2 種。
 * 所以 [1,2] 要組成 5 的總方法數為 3
 *
 *   [ 0  1  2  3  4  5
 *   [ 1, 0, 0, 0, 0, 0 ], // 沒有硬幣被使用的狀況
 * 1 [ 1, 1, 1, 1, 1,(1)], // 只用 1 的狀況
 * 2 [ 1, 1, 2,(2),3, result(3) ], // 用了 1、2 的狀況
 *
 * 延伸至 [1,2,5]
 * 設定一個 2-D 矩陣，
 * 行代表 0 到 amount ，amount 為要組成的目標值
 * 列代表每個硬幣值
 *
 * [   0  1  2  3  4  5
 *   [ 1, 0, 0, 0, 0, 0 ], // 沒有硬幣被使用的狀況
 * 1 [ 1, 1, 1, 1, 1, (1) ], // 只用 1 的狀況
 * 2 [ 1, 1, 2, (2), 3, 3 ], // 用了 1、2 的狀況
 * 5 [ 1, 1, 2, 2, 3, 4 ] ] // 用了 1、2、5 的狀況
 *
 */

/*
T.C.: O(M * N)
其中 M 是目標金額，N 是硬幣數目，因為我們需要遍歷所有金額和硬幣面額的組合。

S.C.: O(M * N)
*/

/* ------------------------------------------------------------------------------- */

// 1D-DP
// function change(amount: number, coins: number[]): number {
//     let dp = new Array(amount + 1).fill(0);
//     dp[0] = 1;

//     for (let coinIdx = 0; coinIdx < coins.length; coinIdx++) {
//         for (let amountIdx = 1; amountIdx < dp.length; amountIdx++) {
//             if (coins[coinIdx] <= amountIdx) {
//                 dp[amountIdx] = dp[amountIdx] + dp[amountIdx - coins[coinIdx]];
//             }
//         }
//     }

//     return dp[amount];
// }

/*
T.C.: O(M * N)
其中 M 是目標金額，N 是硬幣數目，因為我們需要遍歷所有金額和硬幣面額的組合。

S.C.: O(M)
*/

/* ------------------------------------------------------------------------------- */
const amount = 5,
    coins = [1, 2, 5];
// const amount = 3,
//     coins = [2];
// const amount = 10,
//     coins = [10];

console.log(change(amount, coins));
