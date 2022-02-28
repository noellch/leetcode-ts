/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.
 */

// iterative solution
// function isPowerOfThree(n: number): boolean {
//     while (n >= 3) {
//         if (n === 3) return true
//         n /= 3
//     }

//     // 3 的零次方等於 1，所以要判斷 n 是不是 1
//     return n === 1
// }

function isPowerOfThree(n: number): boolean {
    const a = Math.log10(n) / Math.log10(3)

    // log10() 消除後 => log 3 (n) = a
    // 這邊等於 3 ^ a = n
    // 判斷 n 是不是整數即可

    return Number.isInteger(a)
}

console.log(isPowerOfThree(27))

/**
 * 對數換底：
 * log a (N) = log m (N) / log m (a)
 * 不可用 loops 或 recursion，可以用對數換底的方式完成。
 * a = Math.log(n) / Math.log(3) 也就是 3^a = n。
 * 只要判斷 a 是不是整數，就知道 n 是不是 3 的次方。
 */
