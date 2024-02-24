/* 
https://leetcode.com/problems/unique-paths/description/
*/

/* ------------------------------------------------------------------------------- */

// combination solution
// function uniquePaths(m: number, n: number): number {
//     // 總共進行的步數
//     const totalSteps = m + n - 2;

//     // n! / m!(n-m)!
//     // 8! / 2!6!
//     // 8*7 / 2*1 = 28

//     let steps = 1,
//         b = 1;

//     for (let i = totalSteps; i > totalSteps - (m - 1); i--) {
//         steps *= i;
//     }

//     for (let k = m - 1; k >= 1; k--) {
//         b *= k;
//     }

//     return steps / b;
// }

/**
 * 題目提到只能走右跟下，從 m * n grid 左上到右下。移動方式也就是 m - 1 個下加上 n - 1 個右的排列組合。
 * 從起點到終點固定會走 m + n - 2 步。所以計算方式是 C m + n - 2 取 m - 1（或 n - 1）。
 */

/*
T.C.: O(N * M)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

function uniquePaths(m: number, n: number): number {
    let row = new Array(n).fill(1);

    for (let i = m - 2; i >= 0; i--) {
        const newRow = new Array(n).fill(1);

        for (let j = n - 2; j >= 0; j--) {
            newRow[j] = newRow[j + 1] + row[j];
        }

        row = newRow;
    }

    return row[0];
}

/**
 * [
 *  [28, 21, 15, 10, 6, 3, 1],
 *  [7, 6, 5, 4, 3, 2, 1],
 *  [1, 1, 1, 1, 1, 1, goal(1)],
 * ]
 *
 * 由目標處 bottom up。goal 上方只有一種方式到達， goal 左方也只有一種方式到達
 * 所以 goal 的左上方格要到達 goal 總共會有兩種方式。
 * 以此類推，最後返回起點位置的數量
 */

/*
T.C.: O(N * M)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const m = 3,
    n = 7;
// const m = 3,
//     n = 2;

console.log(uniquePaths(m, n));
