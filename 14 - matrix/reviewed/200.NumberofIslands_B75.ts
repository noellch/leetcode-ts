/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water. */

// dfs
function numIslands_dfs(grid: string[][]): number {
    let islands = 0;

    function dfs(row: number, col: number) {
        // 超過範圍或是遇到水（0），就不繼續搜尋 return。
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === '0') return;

        // 以上沒 return 表示還是陸地 '1' 為了避免重複搜尋，將 '1' 轉成 '0'
        grid[row][col] = '0';

        // 向四周擴張搜尋
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            // 遍歷矩陣中所有元素，遇到 '1' 就作為島的起點。
            if (grid[row][col] === '1') {
                islands++;
                dfs(row, col);
            }
        }
    }

    return islands;
}

console.log(
    numIslands_dfs([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
    ])
);

/**
 *  以一開始遇到的 '1' 為起點往四周搜尋，直到超出邊界或四周都是 '0'。
 *  全都 return 後，也就表示這座島已遍歷完成，也已將陸地都轉成 '0'。
 *  跳出 dfs function，繼續移動至下個 '1' 作為起點（如果存在的話）。
 */

/**
 * T.C.: O(n * m)
 * S.C.: O(n * m) 如果整個 grid 是一座島，在 dfs 時的 call stack space complexity 是 O(m * n)
 */

// bfs
function numIslands_bfs(grid: string[][]): number {
    let islands = 0;
    const DIRECTIONS = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    function bfs(queue: number[][]) {
        while (queue.length > 0) {
            let [row, col] = queue.shift()!;
            if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] === '0') continue;

            grid[row][col] = '0';

            for (const d of DIRECTIONS) {
                queue.push([row + d[0], col + d[1]]);
            }
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                islands++;
                bfs([[row, col]]);
            }
        }
    }

    return islands;
}

console.log(
    numIslands_bfs([
        ['1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '0'],
        ['0', '0', '1', '0', '0'],
        ['0', '0', '0', '1', '1'],
    ])
);

/**
 * T.C.: O(n * m)
 * S.C.: O(n * m) 如果整個 grid 是一座島，在 dfs 時的 call stack space complexity 是 O(m * n)
 */
