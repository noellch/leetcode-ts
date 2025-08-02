/* 
https://leetcode.com/problems/word-search/description/
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
T.C.: O(M * N * 4^W)
- 假設字符矩陣的大小是 M 行 N 列，單詞的長度是 W。
- dfs 會執行 M * N 次。
- 每次的遞迴樹深度（call stack 的深度）為 W，且共有四個方向（4 個子樹）。因此 T.C. 為 O(4^word.length)。

S.C.: O(M * N + W)
- 空間複雜度主要由遞迴的深度和額外的數據結構大小來決定。
- 我們需要使用額外的數據結構來記錄已經訪問過的字符 (M * N)，以避免重複訪問 (使用 * 替換已訪問位置的解法不需要這個空間)。
- 此外，我們也需要一些遞迴調用的堆棧空間 W。
*/
/* ------------------------------------------------------------------------------- */
