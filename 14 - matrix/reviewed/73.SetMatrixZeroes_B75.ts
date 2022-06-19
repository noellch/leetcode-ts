/* Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place. */

var setZeroes1 = function (matrix: number[][]): void {
    const colSet: Set<number> = new Set();
    const rowSet: Set<number> = new Set();

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                colSet.add(col);
                rowSet.add(row);
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (colSet.has(col) || rowSet.has(row)) {
                matrix[row][col] = 0;
            }
        }
    }

    // console.log(matrix);
};

setZeroes1([
    [0, 1, 2, 0],
    [3, 2, 5, 2],
    [1, 3, 1, 5],
]);

/**
 * T.C.: O(m*n)
 * S.C.: O(m*n)
 */

/**
 * Follow up:
A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?
 */

var setZeroes2 = function (matrix: number[][]): void {
    // [0][0] 位置
    let zeroRow = false;

    // 遇到 0 時將該行的 [row][0] 及 [0][col] 設定成 0
    // 表示之後這一行列上的每個元素值都要改為 0
    /**
     * 1 1 1      1 0 1
     * 1 0 1  =>  0 0 1
     * 1 1 1      1 1 1
     */
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                matrix[0][col] = 0;
                if (row > 0) matrix[row][0] = 0;
                else zeroRow = true;
                // zeroRow 為 true 表示第一 colum 有出現 0 的狀況
                // [0][0] 為 0 表示第一 row 有出現 0 的狀況
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
                matrix[row][col] = 0;
            }
        }
    }

    // 若 [0][0] 為 0 則第一 col 整排為 0
    if (matrix[0][0] === 0) {
        for (let row = 0; row < matrix.length; row++) {
            matrix[row][0] = 0;
        }
    }

    // 若 zeroRow 為 0 則第一 row 整排為 0
    if (zeroRow) {
        for (let col = 0; col < matrix[0].length; col++) {
            matrix[0][col] = 0;
        }
    }

    console.log(matrix);
};

setZeroes2([
    [0, 1, 2, 0],
    [3, 2, 5, 2],
    [1, 3, 1, 5],
]);

/**
 * 以第一 row 及 第一 col 當作同行同列遇到 0 時的紀錄。
 * 但因為 [0][0] 位置會重疊，所以需要設定另一個變數儲存其中之一。
 */

/**
 * T.C : O(m*n)
 * S.C : O(1)
 */
