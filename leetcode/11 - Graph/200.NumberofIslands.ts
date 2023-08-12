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
T.C.: O(R * C)
- 通常我們使用 DFS 或 BFS 來解決這個問題。這裡我們以 DFS 為例。
- 在最壞的情況下，我們需要遍歷整個二維網格的每個格子。
對於每個格子，我們可能會進行一次 DFS 搜索，而 DFS 的過程中會訪問每個相鄰的陸地格子。
因此，總的時間複雜度是 O(R * C)，其中 R 是網格的行數，C 是網格的列數。

S.C.: O(M * N)
- 我們通常會使用額外的數據結構來記錄已經訪問過的格子，以避免重複訪問。這可能是一個二維矩陣，與原始網格大小相同。因此，額外的空間複雜度是 O(R * C)。
- 如果我們不考慮額外的空間使用，僅考慮遞迴調用所需要的堆棧空間，那麼空間複雜度可以認為是 O(1)。
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
