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
const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
]
console.log(setZeroes(matrix))
