/* 
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

/* ------------------------------------------------------------------------------- */

// function numIslands(grid: string[][]): number {
//     let islands = 0;

//     function dfs(row: number, col: number) {
//         if (
//             row < 0 ||
//             col < 0 ||
//             row > grid.length - 1 ||
//             col > grid[row].length - 1 ||
//             grid[row][col] === '0' ||
//             grid[row][col] === '*'
//         )
//             return;

//         grid[row][col] = '*';
//         dfs(row + 1, col);
//         dfs(row - 1, col);
//         dfs(row, col + 1);
//         dfs(row, col - 1);
//     }

//     for (let row = 0; row < grid.length; row++) {
//         for (let col = 0; col < grid[row].length; col++) {
//             if (grid[row][col] === '1') {
//                 islands += 1;
//                 dfs(row, col);
//             }
//         }
//     }

//     return islands;
// }

/*
T.C.: O(M * N)
S.C.: O(M * N)
*/

/* ------------------------------------------------------------------------------- */

function numIslands(grid: string[][]): number {
    let islands = 0;
    const DIRECTIONS = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    function bfs(row: number, col: number) {
        const queue: [row: number, col: number][] = [[row, col]];

        while (queue.length > 0) {
            const [row, col] = queue.shift() as [number, number];

            if (
                row < 0 ||
                col < 0 ||
                row > grid.length - 1 ||
                col > grid[0].length - 1 ||
                grid[row][col] === '0' ||
                grid[row][col] === '*'
            )
                continue;

            grid[row][col] = '*';

            for (const [dr, dc] of DIRECTIONS) {
                queue.push([row + dr, col + dc]);
            }
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                islands++;
                bfs(row, col);
            }
        }
    }

    return islands;
}

/*
T.C.: O(M * N)
S.C.: O(M * N)
*/

/* ------------------------------------------------------------------------------- */

// const grid = [
//     ['1', '1', '1', '1', '0'],
//     ['1', '1', '0', '1', '0'],
//     ['1', '1', '0', '0', '0'],
//     ['0', '0', '0', '0', '0'],
// ];

const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
];

console.log(numIslands(grid));
