/* Reverse bits of a given 32 bits unsigned integer.

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825. */

/**
 * Follow up:
 * If this function is called many times, how would you optimize it?
 */

/**  Reverse bits of a given 32 bits unsigned integer. */

// solution1;
var reverseBits_1 = function (n: any) {
    var result = 0;
    var count = 32;

    while (count--) {
        //  result *= 2 equal to result << 1。向左移一位的意思。
        result *= 2;
        // 取 n 右手邊的最後一位加上 result。
        result += n & 1;
        // 捨棄 n 的右手邊最後一位。
        n = n >> 1;
    }
    return result;
};

console.log(reverseBits_1(11111111111111111111111111111101));

// solution2
function reverseBits_2(n: number): number {
    let result = 0;
    let count = 32;
    // 因為是 32-bits integer，所以只會有 32 位元
    while (count-- > 0) {
        // 取出 n 的右手邊最後一位
        let lastBit = n & 1;
        // 要放到左手邊的相對位置
        // 這邊表示 lastBit 往左 count 個位置
        // result   101100
        // lastBit  010000
        // 用 | 等於 111100
        // 也就是把個位數加到 result 的相對位置上而不影響其他位
        result = result | (lastBit << count);
        // 將 n 換下一個
        n = n >> 1;
    }

    // get result unsigned
    // >>> 0 可讓 signed 32-bit integer to unsigned
    return result >>> 0;
}

// solution3
function reverseBits_3(n: number): number {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        let bit = (n >> i) & 1;
        result = result | (bit << (31 - i));
    }

    return result >>> 0;
}
console.log(reverseBits_3(11111111111111111111111111111101));

/**
 * T.C.: O(n)
 * S.C.: O(1)
 */
