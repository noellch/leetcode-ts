/**  Reverse bits of a given 32 bits unsigned integer. */

// solution1
var reverseBits = function (n) {
    var result = 0
    var count = 32

    while (count--) {
        //  result *= 2 equal to result << 1。向左移一位的意思。
        result *= 2
        // 取 n 右手邊的最後一位加上 result。
        result += n & 1
        // 捨棄 n 的右手邊最後一位。
        n = n >> 1
    }
    return result
}

// solution2
var reverseBits = function (n) {
    let result = 0

    for (let i = 0; i < 32; i++) {
        const lastBit = n & 1

        result |= lastBit << (31 - i)

        n >>= 1
    }

    // get result unsigned
    return result >>> 0
}

const n = 00100000000000000000000000000000
console.log(reverseBits(n))
