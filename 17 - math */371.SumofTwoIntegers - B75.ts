/**Given two integers a and b, return the sum of the two integers without using the operators + and -. */

function getSum(a: number, b: number): number {
    let carry = 0

    // 因為只有第一次會進行 a + b 的運算，接下來都是 sum + carry
    // 以 b 當作 carry，a 當作兩數未處理進位前的和
    // 若 b 已經等於 0 就等於不需再進行運算
    while (b) {
        carry = (a & b) << 1

        a = a ^ b
        b = carry
    }

    return a
}

console.log(getSum(5, 2))

/**  a ^ b 等於二進位的 a + b，但需被進位的部分沒有被處理。
 * 0000010
 * 0000111
 * 2 ^ 7 = 5 (0000101)
 *
 * 因為 XOR 兩位都是 1 時會輸出 0，所以用 & 來確保兩位都是 1 時輸出 1，然後再往左移一位 << 作為進位。
 * 2 & 7 = 2 (0000010)
 * 進位 << (0000100)
 * 將進位的部分加回 2 ^ 7 = 5
 * 5(0000101) ^ 2(0000010) = 7 (0000111)
 *
 * 不斷重複至不須再進位 */
