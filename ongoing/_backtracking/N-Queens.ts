/** The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively. */

//? 給定一個 n*n 的棋盤跟 n 個皇后，須將所有皇后放置到棋盤上且彼此無法攻擊到對方

function solveNQueens(n: number): string[][] {
    // 存放放置過的皇后能觸及到的行跟正反斜角線的位置
    // 也就是這些位置不能放下個皇后
    const column: Set<number> = new Set()
    const posDiag: Set<number> = new Set()
    const negDiag: Set<number> = new Set()

    const result: string[][] = []
    // 初始化棋盤
    const board = Array.from({ length: n }, () => '.'.repeat(n))

    // r stands row
    function backtracking(r: number) {
        //  row 超過範圍就將當下棋盤的佈局複製一份進 result
        if (r === n) result.push(Array.from(board))

        // row 從 0 開始，每一個列都會反覆遍歷每一行
        for (let col = 0; col < n; col++) {
            if (column.has(col) || posDiag.has(r + col) || negDiag.has(r - col)) continue

            column.add(col)
            posDiag.add(r + col)
            negDiag.add(r - col)

            // 放置皇后
            const b = board[r].split('')
            b[col] = 'Q'
            board[r] = b.join('')

            // 下一個皇后位置就會受限於 column、posDiag、negDiag 這三個 set 內的位置
            backtracking(r + 1)

            // 這格可能性判斷完後復原這格的行為，繼續下一 col
            column.delete(col)
            posDiag.delete(r + col)
            negDiag.delete(r - col)
            const d = board[r].split('')
            d[col] = '.'
            board[r] = d.join('')
        }
    }

    backtracking(0)

    return result
}

console.log(solveNQueens(10))
/**
 * 皇后的攻擊方式是上下左右及四個斜對角的方向。也就是說兩個皇后不能同時放置在同一行或列，也不能同時放置在正反兩邊的斜對角方向
 * 若棋盤格行列以 0 由左上角開始編號，向上斜對角上的每一格的行列數字相加一定是相同的，向下斜對角上的每一格的行列數字相減一定是相同的
 * 第一個皇后由第一 row 的第一格開始放置，將每一個的可能性延伸往下做 backtracking
 *
 */
