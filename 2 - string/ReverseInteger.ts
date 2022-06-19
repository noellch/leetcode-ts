/* Q: Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

//! A signed integer is a 32-bit datum that encodes an integer in the range [-2147483648 to 2147483647]. An unsigned integer is a 32-bit datum that encodes a nonnegative integer in the range [0 to 4294967295]. The signed integer is represented in twos complement notation.
// [2^-31-1, 2^31] -> [-2147483648, 2147483647]

var reverse = function (x: number): number {
    const INT_MAX = Math.pow(2, 31);

    let result = 0;
    let digit = 0;
    //  判斷 x 是正數還是負數
    const flag = x > 0 ? 1 : -1;
    //  對 x 取絕對值，返回結果時再將正負帶上
    x = Math.abs(x);

    while (x) {
        // 取出個位數
        digit = x % 10;
        // 移除 x 的個位數
        x = ~~(x / 10);

        // 判斷 reverse 後的 result 前 9 位數是否大於 32-bits integer 的前 9 位數
        // 若大於最後一位也不用比了，直接返回 0
        // 若等於就判斷最後一位
        // 分成正負兩種可能性做判斷
        if (flag === 1 && (result > ~~(INT_MAX / 10) || (result === ~~(INT_MAX / 10) && digit >= (INT_MAX % 10) - 1))) return 0;
        if (flag === -1 && (result > ~~(INT_MAX / 10) || (result === ~~(INT_MAX / 10) && digit >= INT_MAX % 10))) return 0;

        // 每次循環進一位，ex: first loop re = 3、second loop re = 3 * 10 + (新位數）
        result = result * 10 + digit;
    }

    return flag * result;
};

console.log(reverse(7463847412));
