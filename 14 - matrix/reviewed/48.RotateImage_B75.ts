/* You are given an n x n 2D matrix representing an image, 
rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, 
which means you have to modify the input 2D matrix directly. 
DO NOT allocate another 2D matrix and do the rotation. */

/**
 * have to rotate the image in-place.
 * DO NOT allocate another 2D matrix and do the rotation.
 */

// solution1
function rotate1(matrix: number[][]): void {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    matrix.forEach((m) => m.reverse());
}

rotate1([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);

/**
 * T.C.: O(n^2)
 * S.C.: O(1    )
 */

// solution2
function rotate2(matrix: number[][]): void {
    let top = 0,
        left = 0,
        right = matrix.length - 1,
        bottom = matrix.length - 1;
    // define boundaries for matrix.
    // Cause this is a square matrix, the boundaries would be the same.

    // 先旋轉矩陣最外層，依次往內層進行。
    while (left < right) {
        // 因為矩陣順時針旋轉左上角元素會到右上角，以此類推。
        // 所以實際上只需要遍歷 matrix.length - 1 次。
        // 例如長度為 4 的矩陣只需要執行交換 3 次。
        // [0][0] => [0][3], [0][1] => [1][3], [0][2] => [2][3]。[0][3] 已被 [0][0] 替換。
        // 所以實際上只需要跑 3 - 0 次。在下一層則是跑 2 - 1次
        for (let i = 0; i < right - left; i++) {
            // 因為旋轉會替換掉目標位置的元素，所以先把左上角起點的元素保存起來
            // 左下 => 左上, 右下 => 左下, 右上 => 右下, 保存起來的元素 => 右上
            const leftTop = matrix[top][left + i];
            matrix[top][left + i] = matrix[bottom - i][left];
            matrix[bottom - i][left] = matrix[bottom][right - i];
            matrix[bottom][right - i] = matrix[top + i][right];
            matrix[top + i][right] = leftTop;
        }

        // boundaries 往內縮
        left++;
        right--;
        top++;
        bottom--;
    }
}

rotate2([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
