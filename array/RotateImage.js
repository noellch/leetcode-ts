/* Q: You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation. */

var rotate = function (matrix) {
    if (matrix.length <= 1) return matrix

    const len = matrix.length

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    matrix.forEach((m) => m.reverse())
    return matrix
}

console.log(
    rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
)

//* 學習到轉制矩陣...要將矩陣旋轉 90 度有好幾種方法。這個是我覺得最好懂的一種。
//* 主要思維： 取得原本矩陣的轉制矩陣 (matrix[i][j] =  matrix[j][i])，再將各這個矩陣水平翻轉。
//* ex:
//*    [1, 2, 3],
//*    [4, 5, 6],
//*    [7, 8, 9],
//*     取轉制矩陣
//*    [1, 4, 7],
//*    [2, 5, 8],
//*    [3, 6, 9],
//*     水平翻轉
//*    [7, 4, 1],
//*    [8, 5, 2],
//*    [9, 6, 3],
//*     得到旋轉 90 度
