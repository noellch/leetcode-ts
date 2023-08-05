/* 
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/

/* ------------------------------------------------------------------------------- */

function exist(board: string[][], word: string): boolean {
    function dfs(row: number, col: number, idx: number) {
        if (idx === word.length) return true;
        if (!board[row] || !board[row][col] || board[row][col] === '*' || board[row][col] !== word[idx]) return false;

        const char = board[row][col];
        board[row][col] = '*';

        if (
            dfs(row + 1, col, idx + 1) ||
            dfs(row - 1, col, idx + 1) ||
            dfs(row, col + 1, idx + 1) ||
            dfs(row, col - 1, idx + 1)
        )
            return true;

        board[row][col] = char;
        return false;
    }
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (dfs(row, col, 0)) return true;
        }
    }
    return false;
}

/*
T.C.: O(M * N * 4^word.length)
- dfs 會執行 M * N 次
- 每次的遞迴樹深度（call stack 的深度）為 word 的長度，且共有四個方向（4 個子樹）。因此 T.C. 為 O(4^word.length)。

S.C.: O(word.length)
- call stack 的深度為 word.length。
*/
/* ------------------------------------------------------------------------------- */
