/* 
https://leetcode.com/problems/max-area-of-island/description/
*/

/* ------------------------------------------------------------------------------- */
// dfs
function maxAreaOfIsland(grid: number[][]): number {
    let result = 0;
    function dfs(row: number, col: number): number {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) return 0;

        grid[row][col] = 0;

        return 1 + dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1);
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                result = Math.max(result, dfs(row, col));
            }
        }
    }

    return result;
}
/* ------------------------------------------------------------------------------- */

// bfs
// function maxAreaOfIsland(grid: number[][]): number {
//     const DIRECTIONS = [
//         [1, 0],
//         [-1, 0],
//         [0, 1],
//         [0, -1],
//     ];

//     let result = 0;

//     function bfs(row: number, col: number): number {
//         const queue: [number, number][] = [[row, col]];
//         let area = 0;

//         while (queue.length > 0) {
//             const [row, col] = queue.shift() as [number, number];

//             if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) continue;

//             area++;
//             grid[row][col] = 0;
//             for (const [dr, dc] of DIRECTIONS) {
//                 queue.push([row + dr, col + dc]);
//             }
//         }

//         return area;
//     }

//     for (let row = 0; row < grid.length; row++) {
//         for (let col = 0; col < grid[row].length; col++) {
//             if (grid[row][col] === 1) {
//                 result = Math.max(result, bfs(row, col));
//             }
//         }
//     }

//     return result;
// }

/*
T.C.: O(R * C)
- 使用 DFS 或 BFS 來遍歷網格，找出每個島嶼的面積，並同時跟蹤最大的面積。
- 在最壞的情況下，我們需要遍歷整個二維網格的每個格子。
對於每個格子，我們可能會進行一次 DFS 或 BFS 搜索，而搜索過程中會訪問每個相鄰的陸地格子。
因此，總的時間複雜度是 O(R * C)，其中 R 是網格的行數，C 是網格的列數。

S.C.: O(1)
- 使用 DFS 需要遞迴調用的堆棧空間。
- 在最壞的情況下，即整個網格都是陸地，並且沒有相鄰的水域，遞迴的深度可能是網格的大小，因此遞迴調用所需要的堆棧空間會是 O(R * C)。
*/

/* ------------------------------------------------------------------------------- */

const grid = [
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

// const grid = [[0,0,0,0,0,0,0,0]]

console.log(maxAreaOfIsland(grid));
