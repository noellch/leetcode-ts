/* Q: A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

  */
var uniquePaths = function (m, n) {
    const totalSteps = m + n - 2

    let steps = 1,
        b = 1

    for (let i = totalSteps; i > totalSteps - (m - 1); i--) {
        steps *= i
    }

    for (let k = m - 1; k >= 1; k--) {
        b *= k
    }

    return steps / b
}

console.log(uniquePaths(3, 7))

//* 查到蠻多解都是使用 dp，但這邊想到的是用 combination 排列組合的方式解決，簡單效能又好。。
