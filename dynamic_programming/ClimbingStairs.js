/* Q: You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */

// var climbStairs = function (n) {
//     const ary = [1, 1]
//     if (n > 1) {
//         for (let i = 2; i <= n; i++) {
//             ary[i] = ary[i - 1] + ary[i - 2]
//         }
//     }
//     return ary[ary.length - 1]
// }

//* 這個做法更像是我所知道的 dynamic programming
//* 將已經計算過的值存入 result 中，就不用一直重複計算，可以大大提升運算效能。
var climbStairs = function (n, result = {}) {
    // 先定義 base case。爬上第一階跟第二階所需要用到的步數。
    if (n == 1) return 1
    if (n == 2) return 2
    // 若曾經計算過會被儲存在 result 中，直接取用。
    if (n in result) return result[n]

    // stack 的最下層是 result[5] = climbStairs(4, result) + climbStairs(3, result)
    // result[5] = climbStairs(3, result) + climbStairs(2, result) + climbStairs(2, result) + climbStairs(1, result)
    // result[5] = climbStairs(2, result) + climbStairs(1, result) + 2 + 2 + 1
    // result[5] = 2 + 1 + 2 + 2 + 1

    return (result[n] = climbStairs(n - 1, result) + climbStairs(n - 2, result))
}

//* 主要思維： 以 stair 共五階為例。爬上第五階會由爬上第三階跟爬上第四階決定，因為一次可以走 1 或 2 步。
//* 所以爬上第五階的方法數量等於爬上第四階的方法 + 爬上第三階的方法。 f(5) = f(4) + f(3)
//* optimal sub-structure and overlapping sub-problems

console.log(climbStairs(5))
