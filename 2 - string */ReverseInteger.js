/* Q: Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

//! A signed integer is a 32-bit datum that encodes an integer in the range [-2147483648 to 2147483647]. An unsigned integer is a 32-bit datum that encodes a nonnegative integer in the range [0 to 4294967295]. The signed integer is represented in twos complement notation.

var reverse = function (x) {
    const INT_MAX = Math.pow(2, 31)
    if (x === 0) return 0

    let re = 0
    //  判斷 x 是正數還是負數
    const flag = x > 0 ? 1 : -1

    //  先對 x 取絕對值
    x = Math.abs(x)

    while (x > 0) {
        // 取出個位數
        let units = x % 10
        // 每次循環進一位，ex: first loop re = 3、second loop re = 3 * 10 + new units digital
        re = re * 10 + units
        // 拿掉 x 的個位數
        x = Math.floor(x / 10)
    }

    if (re > INT_MAX || re < -INT_MAX - 1) return 0

    return re * flag
}

console.log(reverse(-1239090))

//* 不轉字串或陣列的數字分割，運用一些數學小 tips。像是 123 = (1 * 10 * 10) + (2 * 10) + 3
/* A: */
// 1. 定義 edge case x = 0 時返回 0
// 2. 判斷 x 是正數還是負數。設定 flag 為 1 或 -1。
// 3. 將 x 取絕對值，最後返回時再賦予正負 (乘以 flag) 即可。
// 4. 將 x 的個位數不斷取出加上 re。每經過一次的 loop 就將 re * 10。因此，原本在 x 中的個位數在 re 中就會成為第一位數。
// 5. 取出個位數加上 re 後，要將 x 已處理過的個位數忽略。所以使用 Math.floor(x / 10) 將個位數移除。ex: 123 除以 10 等於 12.3，再取 floor 等於 12。
// 6. 接下來重新 loop 後取 12 的個位數 2 ，加上 re (這時是 re = 3) * 10 ，也就等於 3 * 10 + 2 (這次迴圈跑完後 x 會只剩 1)
// 7. 一直跑 while loop 到 x 的數字都被處理過；x 等於 0 後跳出 loop。
// 9. 定義 edge case 若計算過後的 re 大於或小於 INT_MAX。則 return 0
// 10. 給回 re 原本的正負，將 re * flag 後返回。
