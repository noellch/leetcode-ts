/**
 *
 * Given an m x n integer matrix matrix, if an element is 0,
 * set its entire row and column to 0's, and return the matrix.You must do it in place.
 *
 *
 * Follow up:
 * A straightforward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best solution.
 * Could you devise a constant space solution?
 */

/**
 Do not return anything, modify matrix in-place instead.
 */

// solution1
var setZeroes = function (matrix) {
    const rowSet = new Set()
    const colSet = new Set()

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                rowSet.add(row)
                colSet.add(col)
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (rowSet.has(row) || colSet.has(col)) {
                matrix[row][col] = 0
            }
        }
    }

    return matrix
}

/**
 * T.C : O(m*n)
 * S.C : O(m+n)
 */

// solution2
function setZeroes(matrix: number[][]): void {
    let zeroRow = false

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                matrix[0][col] = 0

                if (row > 0) {
                    matrix[row][0] = 0
                } else {
                    zeroRow = true
                }
            }
        }
    }

    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[row].length; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][0] = 0
        }
    }

    if (zeroRow) {
        for (let col = 0; col < matrix[0].length; col++) {
            matrix[0][col] = 0
        }
    }
}

/**
 * T.C : O(m*n)
 * S.C : O(1)
 */

const matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
]
console.log(setZeroes(matrix))
