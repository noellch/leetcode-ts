/* Q: Given an m x n matrix, return all elements of the matrix in spiral order. */

var spiralOrder = function (matrix) {
    const result = []
    // 設定上下左右的 boundary
    let top = 0,
        left = 0,
        right = matrix[0].length - 1,
        bottom = matrix.length - 1
    const resultSize = matrix[0].length * matrix.length

    // result 的長度一定會等於原本 matrix 的總元素。所以一相等就跳出迴圈。
    while (result.length < resultSize) {
        // top 的左到右
        for (let i = left; i <= right && result.length < resultSize; i++) {
            result.push(matrix[top][i])
        }
        top++
        // right 的上到下
        for (let i = top; i <= bottom && result.length < resultSize; i++) {
            result.push(matrix[i][right])
        }
        right--
        // bottom 的右到左
        for (let i = right; i >= left && result.length < resultSize; i--) {
            result.push(matrix[bottom][i])
        }
        bottom--
        // left 的下到上
        for (let i = bottom; i >= top && result.length < resultSize; i--) {
            result.push(matrix[i][left])
        }
        left++
        // 每一次 loop 完都必須將 boundary 的範圍縮小。
    }
    return result
}

console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
)
