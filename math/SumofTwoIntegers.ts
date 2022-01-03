/**Given two integers a and b, return the sum of the two integers without using the operators + and -. */

function getSum(a: number, b: number): number {
    let carry: number

    while (b) {
        // 判斷第幾位必須被進位
        carry = a & b
        // a = a ^ b ，但須被進位的位數未被處理
        a ^= b
        // b 等於需被進位的位數進到下一位
        b = carry << 1
        // 重複加回 a 直到 b 等於 0，也就是沒有位數需要被進位。
    }

    return a
}

console.log(getSum(0, 2))
/**  a ^ b 等於二進位的 a + b，但需被進位的部分沒有被處理。
 * 0000010
 * 0000111
 * 2 ^ 7 = 5 (0000101)
 * 第二位必須進位
 * 使用 & 來找出第幾位必須進位
 * 2 & 7 = 2 (0000010)
 * 進位 (0000100)
 * 加回 2 ^ 7
 * 5(0000101) ^ 2(0000010) = 7 (0000111)
 * 不斷重複至不須再進位 */
