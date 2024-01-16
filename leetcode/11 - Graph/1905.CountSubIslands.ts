/* 
https://leetcode.com/problems/count-sub-islands/description/
*/

/* ------------------------------------------------------------------------------- */

function countSubIslands(grid1: number[][], grid2: number[][]): number {
    let result = 0;

    function dfs(r: number, c: number): boolean {
        if (r < 0 || c < 0 || r >= grid2.length || c >= grid2[0].length || grid2[r][c] === -1 || grid2[r][c] === 0) {
            return true;
        }

        grid2[r][c] = -1;
        let result = grid1[r][c] !== 0;
        const top = dfs(r + 1, c) && result;
        const bottom = dfs(r - 1, c) && result;
        const right = dfs(r, c + 1) && result;
        const left = dfs(r, c - 1) && result;

        return top && bottom && right && left;
    }

    for (let row = 0; row < grid1.length; row++) {
        for (let col = 0; col < grid2[row].length; col++) {
            if (grid2[row][col] === 1 && dfs(row, col)) {
                result++;
            }
        }
    }

    return result;
}

/*
T.C.: O(R * C)
S.C.: O(R * C)
*/

/* ------------------------------------------------------------------------------- */

const grid1 = [
        [1, 1, 1, 1, 0, 0],
        [1, 1, 0, 1, 0, 0],
        [1, 0, 0, 1, 1, 1],
        [1, 1, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 0],
        [1, 0, 1, 0, 1, 0],
        [0, 1, 1, 1, 0, 1],
        [1, 0, 0, 0, 1, 1],
        [1, 0, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 0],
    ],
    grid2 = [
        [1, 1, 1, 1, 0, 1],
        [0, 0, 1, 0, 1, 0],
        [1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 0],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 1, 1],
        [1, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0],
    ];
console.log(countSubIslands(grid1, grid2));
