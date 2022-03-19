/* There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

 */

function pacificAtlantic(heights: number[][]): number[][] {
    const rows = heights.length,
        cols = heights[0].length

    const result: [number, number][] = []

    const pac: Set<string> = new Set(),
        atl: Set<string> = new Set()

    function dfs(r: number, c: number, visit: Set<string>, prevHeight: number) {
        // 若這個點曾被造訪過、超過 boundary、或是比前個點高度低（因為是由海邊往上，所以高度要比前個點高或至少相等）就不用繼續
        if (visit.has(`${r}-${c}`) || r === rows || c === cols || r < 0 || c < 0 || prevHeight > heights[r][c]) return
        // 以上都沒遇到就將這個點放進 set，
        visit.add(`${r}-${c}`)
        dfs(r + 1, c, visit, heights[r][c])
        dfs(r - 1, c, visit, heights[r][c])
        dfs(r, c + 1, visit, heights[r][c])
        dfs(r, c - 1, visit, heights[r][c])
    }

    // 由左面的太平洋和右面的大西洋的每個點為起點，放進各點的行列座標、屬於各自的 set，以及各點當前的高度
    for (let c = 0; c < cols; c++) {
        dfs(0, c, pac, heights[0][c])
        dfs(rows - 1, c, atl, heights[rows - 1][c])
    }

    // 由上面的太平洋和下面的大西洋的每個點為起點
    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pac, heights[r][0])
        dfs(r, cols - 1, atl, heights[r][cols - 1])
    }

    // 最後再次遍歷所有行列座標，若該點存在於 pac set 且也存在於 atl set，表示這個點可同時接觸到 pacific 和 atlantic
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (pac.has(`${row}-${col}`) && atl.has(`${row}-${col}`)) {
                result.push([row, col])
            }
        }
    }

    return result
}

/**
 * 題目求可將水流向 pacific and atlantic 點的座標。
 * 因為矩陣有兩邊靠近 pacific，另兩面靠近 atlantic，所以反向由海邊往上找到每個可被造訪的座標，
 * 各自放進屬於 pac 和 atl 的 set 中。
 * 最後檢查這兩個 set 中同時出現的座標，就是可連接兩大洋的點。
 */

const heights = [
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
]

console.log(pacificAtlantic(heights))
