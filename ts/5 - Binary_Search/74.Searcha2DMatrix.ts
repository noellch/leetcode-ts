/* 
https://leetcode.com/problems/search-a-2d-matrix/description/
*/

/* ------------------------------------------------------------------------------- */

function searchMatrix(matrix: number[][], target: number): boolean {
    let top = 0,
        bottom = matrix.length - 1;

    let row = top + Math.floor((bottom - top) / 2);
    while (top <= bottom) {
        if (target > matrix[row][matrix[row].length - 1]) {
            top = row + 1;
        } else if (target < matrix[row][0]) {
            bottom = row - 1;
        } else break;
        row = top + Math.floor((bottom - top) / 2);
    }

    if (row < 0 || row > matrix.length - 1) return false;

    let l = 0,
        r = matrix[row].length - 1;

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (target === matrix[row][mid]) return true;
        if (target > matrix[row][mid]) l = mid + 1;
        else r = mid - 1;
    }

    return false;
}

/*
T.C.: O(log(M) + log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const matrix = [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
    ],
    target = 3;
// const matrix = [
//         [1, 3, 5, 7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 60],
//     ],
//     target = 13;
// const matrix = [[1]],
//     target = 0;

console.log(searchMatrix(matrix, target));
