/* Q: Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules. */

//? 分辨是不是有效的數獨陣列

function isValidSudoku(board: string[][]): boolean {
    const map: Map<string, boolean> = new Map()

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const d = board[row][col]

            if (d !== '.') {
                if (map.get(`row-${row}-${d}`) || map.get(`col-${col}-${d}`) || map.get(`box-${3 * ~~(row / 3) + ~~(col / 3)}-${d}`)) return false

                map.set(`row-${row}-${d}`, true)
                map.set(`col-${col}-${d}`, true)
                map.set(`box-${3 * ~~(row / 3) + ~~(col / 3)}-${d}`, true)
            }
        }
    }

    return true
}

console.log(
    isValidSudoku([
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
    ])
)

/**
 * 建立一個 hashmap 存放出現過的值 (或是用 Set 也可以)
 * 每遇到一個值就把它屬於哪個行、哪個列、哪個 box 存進 map
 * 下次若在同樣的敘述下為 true ，也就是他出現在 map 中，表示這不是一個有效的數獨表
 */

// 0 1 2
// 3 4 5
// 6 7 8
