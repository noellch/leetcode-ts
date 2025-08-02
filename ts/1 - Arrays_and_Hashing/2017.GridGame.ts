/* 
https://leetcode.com/problems/grid-game/description/
*/

/* ------------------------------------------------------------------------------- */

// prefix sum
function gridGame(grid: number[][]): number {
    const N = grid[0].length;

    const row1 = [...grid[0]];
    const row2 = [...grid[1]];

    for (let i = 1; i < N; i++) {
        row1[i] += row1[i - 1];
        row2[i] += row2[i - 1];
    }

    let result = Infinity;
    // j 是 robot1 的轉折點
    for (let j = 0; j < N; j++) {
        const top = row1[N - 1] - row1[j];
        const bottom = j - 1 >= 0 ? row2[j - 1] : 0;
        const robot2Collected = Math.max(top, bottom);
        result = Math.min(result, robot2Collected);
    }

    return result;
}

/*
T.C.: O(M) 
M 等於 column 的長度

S.C.: O(M * N)
*/

/* ------------------------------------------------------------------------------- */

const grid = [
    [2, 5, 4],
    [1, 5, 1],
];
// const grid = [
//     [3, 3, 1],
//     [8, 5, 2],
// ];
// const grid = [
//     [1, 3, 1, 15],
//     [1, 3, 3, 1],
// ];

console.log(gridGame(grid));
