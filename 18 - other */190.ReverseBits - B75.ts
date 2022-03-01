/**  Reverse bits of a given 32 bits unsigned integer. */

// solution1
// var reverseBits = function (n) {
//     var result = 0
//     var count = 32

//     while (count--) {
//         //  result *= 2 equal to result << 1。向左移一位的意思。
//         result *= 2
//         // 取 n 右手邊的最後一位加上 result。
//         result += n & 1
//         // 捨棄 n 的右手邊最後一位。
//         n = n >> 1
//     }
//     return result
// }

// solution2
function reverseBits(n: number): number {
    let result = 0
    let count = 32
    // 因為是 32-bits integer，所以只會有 32 位元
    while (count-- > 0) {
        // 取出 n 的右手邊最後一位
        let lastBit = n & 1
        // 要放到左手邊的相對位置
        // 這邊表示 lastBit 往左 count 個位置
        // result   101100
        // lastBit  010000
        // 用 | 等於 111100
        // 也就是把個位數加到 result 的相對位置上而不影響其他位
        result = result | (lastBit << count)
        // 將 n 換下一個
        n = n >> 1
    }

    // get result unsigned
    // >>> 0 可讓 signed 32-bit integer to unsigned
    return result >>> 0
}

console.log(reverseBits(11111111111111111111111111111101))
