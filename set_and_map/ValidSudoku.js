/* Q: Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules. */

//? 分辨是不是有效的數獨陣列

var isValidSudoku = function (board) {
    const map = {}
    let digit = 0

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            digit = board[i][j]

            if (digit !== '.') {
                if (
                    map['row' + i + digit] ||
                    map['column' + j + digit] ||
                    map['box' + (3 * Math.floor(i / 3) + Math.floor(j / 3)) + digit]
                )
                    return false

                map['row' + i + digit] = true
                map['column' + j + digit] = true
                map['box' + (3 * Math.floor(i / 3) + Math.floor(j / 3)) + digit] = true
            }
        }
        console.log(map)
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

//* fuck, 這題好難...要拆分成 rows、columns and boxes 個別判斷
/* A:  */
// 1. 必須遍歷所有個行列以及方塊。所以無法避免使用兩個 for loop...
// 2. 外層的 i for loop 遍歷 rows， 內層 j for loop 遍歷 columns。兩個 loop 跑完剛好會將 9 * 9 的 Sudoku board 所有 index 各跑過一遍。
// 3. 宣告一個變數 digit 儲存當下這個迴圈所跑到的值。
// 4. 建立一個物件作為 map 儲存所有跑到的值，在行列方塊時所存在的次數。ex: {row08: true, column08: true, box08: true} 表示 8 這個值在第 0 個 row、column、box 時，各出現過一次。
// 5. 如果 digit 不等於 '.'，判斷這個值是否已出現在物件中。如果沒有，就將當下跑到的值如上述的規則存入物件中。
// 6. 如果已經出現在物件中，表示這個值在行列方塊的狀態下，曾出現過一次，也就表示這是個無效的 Sudoku board。return false。
// 7. 整個迴圈跑完後，所有值在行列方塊中都不重複，表示這是個有效 Sudoku board。return true。
