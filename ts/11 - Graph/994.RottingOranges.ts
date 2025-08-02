/* 
https://leetcode.com/problems/rotting-oranges/description/
*/

/* ------------------------------------------------------------------------------- */

const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
];

function orangesRotting(grid: number[][]): number {
    let time = 0,
        fresh = 0;
    const queue: [number, number][] = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) fresh++;
            if (grid[row][col] === 2) queue.push([row, col]);
        }
    }

    while (queue.length > 0 && fresh > 0) {
        let len = queue.length;
        while (len--) {
            const [row, col] = queue.shift() as [number, number];
            for (const [dr, dc] of DIRECTIONS) {
                const r = row + dr,
                    c = col + dc;
                if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length || grid[r][c] !== 1) continue;
                grid[r][c] = 2;
                queue.push([r, c]);
                fresh--;
            }
        }
        time++;
    }

    return fresh === 0 ? time : -1;
}

/*
T.C.: O(R * C)
- 在最壞的情況下，所有橘子都是新鮮的，我們需要遍歷整個網格的每個位置，並對每個新鮮橘子進行 BFS。
因此，總的時間複雜度是 O(R * C)，其中 rows 是網格的行數，cols 是網格的列數。

S.C.: O(R * C)
- 在最壞的情況下，所有橘子都是腐壞的，因此 queue 最大長度為 R * C。
*/

/* ------------------------------------------------------------------------------- */

const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
];
// const grid = [
//     [2, 1, 1],
//     [1, 1, 1],
//     [0, 1, 2],
// ];

console.log(orangesRotting(grid));
