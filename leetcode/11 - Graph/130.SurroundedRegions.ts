/* 
https://leetcode.com/problems/surrounded-regions/description/
*/

/* ------------------------------------------------------------------------------- */

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    const set = new Set<string>();

    function dfs(row: number, col: number) {
        if (
            row < 0 ||
            col < 0 ||
            row >= board.length ||
            col >= board[0].length ||
            set.has(`${row}-${col}`) ||
            board[row][col] === 'X'
        )
            return;
        set.add(`${row}-${col}`);

        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (
                board[row][col] === 'O' &&
                (row === 0 || col === 0 || row === board.length - 1 || col === board[row].length - 1)
            ) {
                dfs(row, col);
            }
        }
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === 'O' && !set.has(`${row}-${col}`)) {
                board[row][col] = 'X';
            }
        }
    }

    console.log(board);
}

/* 
- 找到在 border 的 'O'，新增至 set 中。
- 除了位於 border 的 'O' 之外，其餘的 'O' 一定都會被 'X' 包圍，所以將這些不位於 border 的 'O' 全部 flip 為 'X'。
*/

/*
T.C.: O(R * C)
S.C.: O(R * C)
*/

/* ------------------------------------------------------------------------------- */

const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X'],
];

solve(board);
