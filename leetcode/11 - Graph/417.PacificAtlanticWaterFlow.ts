/* 
There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
*/

/* ------------------------------------------------------------------------------- */

function pacificAtlantic(heights: number[][]): number[][] {
    const result: number[][] = [];
    const pac = new Set<string>();
    const atl = new Set<string>();

    function dfs(row: number, col: number, visited: Set<string>, preHeight: number) {
        if (
            row < 0 ||
            col < 0 ||
            row >= heights.length ||
            col >= heights[0].length ||
            visited.has(`${row}-${col}`) ||
            preHeight > heights[row][col]
        )
            return;

        visited.add(`${row}-${col}`);
        dfs(row + 1, col, visited, heights[row][col]);
        dfs(row - 1, col, visited, heights[row][col]);
        dfs(row, col + 1, visited, heights[row][col]);
        dfs(row, col - 1, visited, heights[row][col]);
    }

    for (let col = 0; col < heights[0].length; col++) {
        dfs(0, col, pac, heights[0][col]);
        dfs(heights.length - 1, col, atl, heights[heights.length - 1][col]);
    }

    for (let row = 0; row < heights.length; row++) {
        dfs(row, 0, pac, heights[row][0]);
        dfs(row, heights[0].length - 1, atl, heights[row][heights[0].length - 1]);
    }

    for (let row = 0; row < heights.length; row++) {
        for (let col = 0; col < heights[row].length; col++) {
            if (pac.has(`${row}-${col}`) && atl.has(`${row}-${col}`)) {
                result.push([row, col]);
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

const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
];

console.log(pacificAtlantic(heights));
