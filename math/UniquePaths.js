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

// console.log(uniquePaths(3, 7))

//* 查到蠻多解都是使用 dp，但這邊想到的是用 combination 排列組合的方式解決，簡單效能又好。
//* 題目提到只能走右跟下，從 m * n grid 左上到右下。移動方式也就是 m - 1 個下加上 n - 1 個右的排列組合。
//* 從起點到終點固定會走 m + n - 2 步。所以計算方式是 C m + n - 2 取 m - 1（或 n - 1）。

function numPaths(m, n) {
    const result = [[]]
    for (let i = 0; i < n; i += 1) {
        result[0].push(1)
    }

    for (let i = 1; i < m; i += 1) {
        result.push([1])

        for (let j = 1; j < n; j += 1) {
            result[i][j] = result[i][j - 1] + result[i - 1][j]
        }
    }
    return result[m - 1][n - 1]
}

console.log(numPaths(3, 7))
