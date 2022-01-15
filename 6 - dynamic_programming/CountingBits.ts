/**Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

 */

// function countBits(n: number): number[] {
//     const result: number[] = []
//     let count: number
//     result[0] = 0
//     for (let i = 1; i <= n; i++) {
//         count = 0
//         let k = i
//         while (k) {
//             count += k & 1
//             k = k >>> 1
//         }
//         result.push(count)
//     }

//     return result
// }

function countBits(n: number): number[] {
    const dp: number[] = []
    dp[0] = 0

    for (let i = 1; i <= n; i++) {
        // (i % 2) 判斷 i 是偶數還是奇數。
        // i 若是偶數，1的數量會等於 i >> 1 1的數量。
        // i 若是奇數，(i % 2) 會等於 1。
        dp[i] = dp[i >> 1] + (i % 2)
    }

    return dp
}

/** 
* 10 進位的偶數換成二進位時最末位是 0，奇數則是 1。
* 3 的二進位是 2 的二進位最末位加 1，5 是 4 的最末位加 1...
* 每個偶數向右位移一位等於自身除以 2，所以 1 的數量是一樣的。
* 所以每個偶數n 1 的數量等於n >> 1 1 的數量。
* 而每個奇數n 1 的數量等於n - 1 1 的數量加 1。
*
* 00000001
* 00000010 2
* 00000011 3
* 00000100 4
* 00000101 5
* 00000110 6
* 00000111 7
* 00001000 8
* 00001001 9
* 00001010 10
* 00001011 11
* 00001100 12
* 00001101 13
* 00001110 14 

*/

console.log(countBits(8))
