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
var setZeroes = function (matrix: number[][]): void {
    const rowSet: Set<number> = new Set()
    const colSet: Set<number> = new Set()

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
}

/**
 * T.C : O(m*n)
 * S.C : O(m+n)
 */

// solution2
function setZeroes(matrix: number[][]): void {
    // [0][0] 位置
    let zeroRow = false

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            // 遇到 0 時將該行的 [row][0] 及 [0][col] 設定成 0
            // 表示之後這一行列上的每個元素值都要改為 0
            /**
             * 1 1 1      1 0 1
             * 1 0 1  =>  0 0 1
             * 1 1 1      1 1 1
             */
            if (matrix[row][col] === 0) {
                matrix[0][col] = 0

                // row > 0 是因為 [0][0] 這個位置的 row 狀態交由 zeroRow 儲存
                if (row > 0) {
                    matrix[row][0] = 0
                } else {
                    zeroRow = true
                }
            }
        }
    }

    // 將剛紀錄為 0 的行列位置，整行整列都設定為 0
    // 以上方為例
    /**
     * 1 1 1      1 0 1      1 0 1
     * 1 0 1  =>  0 0 1  =>  0 0 0
     * 1 1 1      1 1 1      1 0 1
     */
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[row].length; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0) {
                matrix[row][col] = 0
            }
        }
    }

    // 若 [0][0] 為 0 則第一 col 整排為 0
    if (matrix[0][0] === 0) {
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][0] = 0
        }
    }

    // 若 zeroRow 為 0 則第一 row 整排為 0
    if (zeroRow) {
        for (let col = 0; col < matrix[0].length; col++) {
            matrix[0][col] = 0
        }
    }
}

/**
 * 以第一 row 及 第一 col 當作同行同列遇到 0 時的紀錄
 * 但因為 [0][0] 位置會重疊，所以需要設定另一個變數儲存其中之一
 */

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
