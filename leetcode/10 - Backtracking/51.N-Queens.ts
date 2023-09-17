/* 
The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
*/

/* ------------------------------------------------------------------------------- */

function solveNQueens(n: number): string[][] {
    const colum = new Set<number>();
    const negativeDiagonal = new Set<number>(); // (row - col) will remain the same
    const positiveDiagonal = new Set<number>(); // (row + col) will remain the same

    const result: string[][] = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n));

    function backtracking(r: number) {
        if (r === n) {
            result.push(Array.from(board));
            return;
        }

        for (let c = 0; c < n; c++) {
            if (colum.has(c) || negativeDiagonal.has(r - c) || positiveDiagonal.has(r + c)) continue;

            colum.add(c);
            negativeDiagonal.add(r - c);
            positiveDiagonal.add(r + c);

            const b = board[r].split('');
            b[c] = 'Q';
            board[r] = b.join('');

            backtracking(r + 1);

            colum.delete(c);
            negativeDiagonal.delete(r - c);
            positiveDiagonal.delete(r + c);

            const d = board[r].split('');
            d[c] = '.';
            board[r] = d.join('');
        }
    }

    backtracking(0);
    return result;
}

/*
T.C.: O(N!)
共有 N×(N-1)×(N-2)×...×2×1 = N! 種不同的方式來放置皇后。

S.C.: O(N^2)
*/

/* ------------------------------------------------------------------------------- */

const n = 4;

console.log(solveNQueens(n));
