/* 
You are given a 0-indexed 2D array grid of size 2 x n, where grid[r][c] represents the number of points at position (r, c) on the matrix. Two robots are playing a game on this matrix.

Both robots initially start at (0, 0) and want to reach (1, n-1). Each robot may only move to the right ((r, c) to (r, c + 1)) or down ((r, c) to (r + 1, c)).

At the start of the game, the first robot moves from (0, 0) to (1, n-1), collecting all the points from the cells on its path. For all cells (r, c) traversed on the path, grid[r][c] is set to 0. Then, the second robot moves from (0, 0) to (1, n-1), collecting the points on its path. Note that their paths may intersect with one another.

The first robot wants to minimize the number of points collected by the second robot. In contrast, the second robot wants to maximize the number of points it collects. If both robots play optimally, return the number of points collected by the second robot.
*/

/* ------------------------------------------------------------------------------- */

function gridGame(grid: number[][]): number {
    const N = grid[0].length;
    const gridRow1 = [...grid[0]];
    const gridRow2 = [...grid[1]];

    let result = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < N; i++) {
        gridRow1[i] += gridRow1[i - 1];
        gridRow2[i] += gridRow2[i - 1];
    }

    for (let j = 0; j < N; j++) {
        const top = gridRow1[N - 1] - gridRow1[j];
        const bottom = j - 1 >= 0 ? gridRow2[j - 1] : 0;
        // robot2 maximize score every round
        const robot2MaxScore = Math.max(top, bottom);
        // robot1 minimize robot2 score
        result = Math.min(result, robot2MaxScore);
    }

    return result;
}

/*
T.C.: O(M) 
M 等於 column 的長度

S.C.: O(M*N)
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
