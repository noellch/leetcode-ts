/* You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 */

/**
Do not return anything, modify matrix in-place instead.
 */
// solution1
// function rotate(matrix: number[][]): void {
//     // define boundaries for matrix. Cause this is a square matrix, the boundaries would be the same.
//     let left: number, right: number, bottom: number, top: number
//     left = top = 0
//     right = bottom = matrix.length - 1

//     // 先旋轉矩陣最外層，依次往內層進行，到最內層時，無論有無中心點，都必須讓 left > right
//     while (left < right) {
//         // 因為矩陣順時針旋轉左上角元素會到右上角，以此類推。
//         // 所以實際上只需要遍歷 matrix.length - 1 次。
//         // ex: 長度為 3 的矩陣，[0][0] => [0][2], [0][1] => [1][2], 但 [0][2] 已經被 [0][0] 替換
//         // 所以實際上只需要跑 2 - 0 次，故 i < right -left
//         for (let i = 0; i < right - left; i++) {
//             console.log(matrix)
//             // 因為旋轉會替換掉目標位置的元素，所以先把左上角起點的元素保存起來
//             // 左下 => 左上, 右下 => 左下, 右上 => 右下, 保存起來的元素 => 右上
//             let topLeft = matrix[top][left + i]
//             matrix[top][left + i] = matrix[bottom - i][left]
//             matrix[bottom - i][left] = matrix[bottom][right - i]
//             matrix[bottom][right - i] = matrix[top + i][right]
//             matrix[top + i][right] = topLeft
//         }
//         // boundaries 往內縮
//         left++
//         right--
//         top++
//         bottom--
//     }
// }

//sulution2
function rotate(matrix: number[][]): void {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix[i].length; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    matrix.forEach((m) => m.reverse())
}

console.log(
    rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
)

/**
 * 取得原本矩陣的轉制矩陣 (matrix[i][j] =  matrix[j][i])，再將各這個矩陣水平翻轉。
 * ex:
 *    [1, 2, 3],
 *    [4, 5, 6],
 *    [7, 8, 9],
 *     取轉制矩陣
 *    [1, 4, 7],
 *    [2, 5, 8],
 *    [3, 6, 9],
 *     水平翻轉
 *    [7, 4, 1],
 *    [8, 5, 2],
 *    [9, 6, 3],
 *    得到旋轉 90 度
 */
