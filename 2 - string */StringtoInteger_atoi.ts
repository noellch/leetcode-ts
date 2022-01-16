/* Q: Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits. */

//? 給定一個字串。返回符合規則的數字。
//? rules:
//? 1. 字串開頭是空白字元' '，直接忽略到第一個有效字元。
//? 2. 有效字元開頭是 '-' 代表最後結果的數字是負數，'+' 則是正數。若不是 '-' 也不是 '+' 則是正數。
//? 3. 有效字元開始的連續 '1 ~ 9' 是最後需返回的結果。
//? 4. 遇到不是 0 ~ 9 的字元則結束，後面的字元全部忽略。
//? 5. 若最後的數字大於 Math.pow(2, 31)-1 或 小於 -Math.pow(2, 31)，則返回以上這兩個數字。

var myAtoi = function (s: string): number {
    let digits = 0,
        flag = 1,
        p = 0
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = -Math.pow(2, 31)

    // 若開頭是' '
    while (s[p] === ' ') {
        p++
    }

    // 遇到接下來的 '-' 或 '+' 符號則設定 flag。
    if (s[p] === '-' || s[p] === '+') {
        flag = s[p] === '+' ? 1 : -1
        p++
    }

    // 若 +- 符號後緊跟著 0 ~ 9 的數字。
    // 判斷 s[p] !== ' ' 是因為 s[p 若是空格轉成數字會變成 0，所以加上去避免將空格轉成 0。
    while (+s[p] >= 0 && +s[p] <= 9 && s[p] !== ' ') {
        digits = digits * 10 + +s[p]
        p++
    }

    digits = digits * flag

    if (digits >= INT_MAX) return INT_MAX
    if (digits <= INT_MIN) return INT_MIN

    return digits
}

console.log(myAtoi('  -2147483 '))
