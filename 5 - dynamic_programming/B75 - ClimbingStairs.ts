/* Q: You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */

// var climbStairs = function (n: number): number {
//     const dp: number[] = [1, 1]

//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2]
//     }

//     console.log('🚀 ~ file: B75 - ClimbingStairs.ts ~ line 7 ~ dp', dp)
//     return dp[n]
// }

var climbStairs = function (n: number): number {
    let table: { [key: number]: number } = {}

    const dfs = (n: number): number => {
        if (n === 1) return 1
        if (n === 2) return 2
        if (n in table) return table[n]
        table[n] = dfs(n - 1) + dfs(n - 2)

        return table[n]
    }

    return dfs(n)
}

console.log(climbStairs(8))
