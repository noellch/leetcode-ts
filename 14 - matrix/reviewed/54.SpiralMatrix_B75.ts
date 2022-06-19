/* Given an m x n matrix, return all elements of the matrix in spiral order. */

function spiralOrder(matrix: number[][]): number[] {
    // 設定 boundaries
    let left = 0,
        top = 0,
        right = matrix[0].length - 1,
        bottom = matrix.length - 1;
    const result: number[] = [];

    const resultSize = matrix.length * matrix[0].length;

    while (result.length < resultSize) {
        for (let i = left; i <= right && result.length < resultSize; i++) {
            result.push(matrix[top][i]);
        }

        top++;

        for (let i = top; i <= bottom && result.length < resultSize; i++) {
            result.push(matrix[i][right]);
        }

        right--;

        for (let i = right; i >= left && result.length < resultSize; i--) {
            result.push(matrix[bottom][i]);
        }

        bottom--;

        for (let i = bottom; i >= top && result.length < resultSize; i--) {
            result.push(matrix[i][left]);
        }

        left++;
    }

    return result;
}

console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
);

/**
 * T.C.: O(n*m)
 * T.C.: O(n*m)
 */
