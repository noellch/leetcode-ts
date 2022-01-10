/* Q: You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits. */

var plusOne = function (digits: number[]): number[] {
    let p = digits.length - 1
    // 需要加上的 1
    let one = 1

    while (one) {
        if (p >= 0) {
            if (digits[p] === 9) digits[p] = 0
            else {
                digits[p] += 1
                // 1 已加上跳出迴圈
                one = 0
            }
        } else {
            digits.unshift(1)
            // 1 已加上跳出迴圈
            one = 0
        }
        p--
    }

    return digits
}

console.log(plusOne([9]))

/**
 * 判斷要加上的 1 應該加在哪一位。
 * 從個位數開始，如遇到 9，該加上的 1 就一直往前移。
 * 直到加上或是前面沒有位數為止。
 *
 */
