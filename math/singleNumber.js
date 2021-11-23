/* Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space. */

var singleNumber = function (nums) {
    let result = 0
    nums.forEach((num) => {
        result = result ^ num
    })
    return result
}

console.log(singleNumber([4, 1, 2, 1, 2]))

//* 這題考的是 bitwise operators 的用法。

// ^ 符號：XOR (互斥或)。將數字轉譯成 2 進位，若相同位數同為 0 或 同為1，則輸出 0；反之則輸出 1。
// ex: 1011 ^ 1101 = 0110
// XOR 特性 1：n ^ n = 0 。ex: 1001 ^ 1001 = 0000
// XOR 特性 2: a ^ b = b ^ a
// XOR 特性 3: (a ^ b) ^ c = a ^ (b ^ c) = a ^ b ^ c
// 由以上特性得知，若多個數字互相做 XOR，則兩個相同數字會等於 0。

// 回到題目。一個陣列中所有數字都是兩倆一組，只有唯一一個數字獨立。
// 故將陣列中所有數字 XOR (a ^ b ^ c ^ d ^ e)，則相同數字會等於 0 ，最後剩下的就是獨立的那個數字。
