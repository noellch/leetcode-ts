/* Q: Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3^x. */

//? Follow up: Could you solve it without loops/recursion?

//* logarithm solution
var isPowerOfThree = function (n) {
    const a = Math.log10(n) / Math.log10(3)

    return Number.isInteger(a)
}

//* iterative solution
// var isPowerOfThree = function (n) {
//     while (n >= 2) {
//         if (n === 3) return true
//         n /= 3
//     }

//     return n === 1
// }

console.log(isPowerOfThree(20))

//* 這題不能用到 loops 或 recursion 我想了很久。
//* 最後發現可以用對數換底的方式完成。
//* i = Math.log(n) / Math.log(3) 以三為底的 log 對數，也就是 3^i = n。
//* 換底以 10 為底。log10(n)/log10(3) (寫不出來...)。也就等於 i = xlog10(3)/log10(3) => i = x
//* 所以只要判斷 i 是不是整數，就知道 n 是不是 3 的次方。
