/* Q: Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules. */

//? 分辨是不是有效的數獨陣列

function isValidSudoku(board: string[][]): boolean {
    const hashSet = new Set<string>();

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const d = board[row][col];

            if (d !== '.') {
                const box = 3 * ~~(row / 3) + ~~(col / 3);

                if (hashSet.has(`row-${row}-${d}`) || hashSet.has(`col-${col}-${d}`) || hashSet.has(`box-${box}-${d}`))
                    return false;

                hashSet.add(`row-${row}-${d}`);
                hashSet.add(`col-${col}-${d}`);
                hashSet.add(`box-${box}-${d}`);
            }
        }
    }

    return true;
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
);

/**
 * T.C.: O(n * m)
 * S.C.: O(n * m)
 * n 是 row 的數量，m 是 column 的數量
 * set 的 has 跟 add T.C. 都是 O(1)
 */
