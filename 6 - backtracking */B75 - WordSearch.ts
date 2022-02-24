/** Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells,
 * where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once.
 * */

var exist = function (board: string[][], word: string): boolean {
    function dfs(r: number, c: number, idx: number): boolean {
        // 若 idx 已等於 word 的長度，表示已經找到 word 的全部。返回 true。
        if (idx === word.length) return true

        if (!board[r] || !board[r][c] || board[r][c] === '*' || board[r][c] !== word[idx]) return false

        const char = board[r][c]
        // 將當下等於 word[idx] 的元素改為 '*'，避免判斷到用過的元素。
        board[r][c] = '*'

        // 只要有一組找到對的字母就可以返回 true
        if (dfs(r + 1, c, idx + 1) || dfs(r - 1, c, idx + 1) || dfs(r, c + 1, idx + 1) || dfs(r, c - 1, idx + 1)) return true

        // 以上都失敗，回到上一層 context 要把改成 * 的元素還原。
        board[r][c] = char
        return false
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (dfs(row, col, 0)) return true
        }
    }
    return false
}

const board = [
        ['C', 'A', 'A'],
        ['A', 'A', 'A'],
        ['B', 'C', 'D'],
    ],
    word = 'AAB'

console.log(exist(board, word))

/**
 * [ [ 'C', 'A', 'A' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', '*' ], [ 'A', 'A', '*' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', '*' ], [ 'A', 'A', '*' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', '*' ], [ 'A', 'A', '*' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', '*' ], [ 'A', 'A', '*' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', '*' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', 'A', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', '*', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', '*', '*' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', '*', '*' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', '*', '*' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', '*', '*' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ 'A', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', '*', 'A' ], [ 'B', 'C', 'D' ] ]
[ [ 'C', 'A', 'A' ], [ '*', '*', 'A' ], [ '*', 'C', 'D' ] ]
 */

/**
 * 印出每一次 board 的狀態可以看到 search 的痕跡。有助理解。
 * 找到 word 的開頭字母當作起點開啟執行 backtracking。
 * 往上下左右四個方向判斷那個位置是不是等於 word 的下個字母。
 * 每次的 recursion 都將指向 word 的 pointer 往下一格。
 * 直到 pointer 等於 word 的長度。表示找到所有 word 字母。
 * 除此之外都返回 false。
 */
