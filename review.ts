function helper<T extends string, U extends number>(row: U, col: U, board: T[][], word: T, idx = 0): boolean {
    if (idx === word.length) return true

    if (!board[row] || !board[row][col]) return false

    if (board[row][col] !== '*' && board[row][col] === word[idx]) {
        let char = board[row][col]
        board[row][col] = '*'
    }

    return
}

var exist = function <T extends string>(board: T[][], word: T): boolean {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            if (board[row][col] === word[0]) {
                helper<string, number>(row, col, board, word)
            }
        }
    }

    return false
}

console.log(
    exist<string>(
        [
            ['C', 'A', 'A'],
            ['A', 'A', 'A'],
            ['B', 'C', 'D'],
        ],
        'AAB'
    )
)
