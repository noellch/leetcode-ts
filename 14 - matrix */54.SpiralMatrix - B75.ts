/* Given an m x n matrix, return all elements of the matrix in spiral order. */

function spiralOrder(matrix: number[][]): number[] {
    // 設定 boundaries
    let left = 0,
        top = 0,
        right = matrix[0].length - 1,
        bottom = matrix.length - 1
    const result: number[] = []

    const resultSize = matrix.length * matrix[0].length

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

        // 每一次 loop 後都 boundary 的範圍都會縮小
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
