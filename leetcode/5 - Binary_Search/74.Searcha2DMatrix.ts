/* 
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/

/* ------------------------------------------------------------------------------- */

function searchMatrix(matrix: number[][], target: number): boolean {
    let top = 0,
        bottom = matrix.length - 1;
    let row = Math.floor((top + bottom) / 2);

    while (top <= bottom) {
        if (target > matrix[row][matrix[row].length - 1]) {
            top = row + 1;
        } else if (target < matrix[row][0]) {
            bottom = row - 1;
        } else break;
        row = Math.floor((top + bottom) / 2);
    }

    if (row < 0 || row >= matrix.length) return false;

    let l = 0,
        r = matrix[row].length - 1;
    let mid = Math.floor((r + l) / 2);

    while (l <= r) {
        if (target > matrix[row][mid]) l = mid + 1;
        else if (target < matrix[row][mid]) r = mid - 1;
        else return true;
        mid = Math.floor((r + l) / 2);
    }

    return false;
}

/*
T.C.: O(log(M) + log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const matrix = [
//         [1, 3, 5, 7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 60],
//     ],
//     target = 3;
// const matrix = [
//         [1, 3, 5, 7],
//         [10, 11, 16, 20],
//         [23, 30, 34, 60],
//     ],
//     target = 13;
const matrix = [[1]],
    target = 0;

console.log(searchMatrix(matrix, target));
