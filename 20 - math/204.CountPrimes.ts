/* Q: Given an integer n, return the number of prime numbers that are strictly less than n. */

//? 求所有小於 n 的質數。

function countPrimes(n: number): number {
    let count = 0
    let nums = Array(n)

    // i < Math.sqrt(n) 就是只需標記 i <= √n 這些數的倍數
    for (let i = 2; i < Math.sqrt(n); i++) {
        // 表示從 i^2 開始標記 i^2+i、i^2+2i...
        for (let j = Math.pow(i, 2); j < n; j += i) {
            nums[j] = null
        }
    }
    // 遍歷 nums 找出有多少不是 null 的就是質數的數量。
    for (let k = 2; k < n; k++) {
        if (nums[k] !== null) count++
    }

    return count
}

console.log(countPrimes(50))

/**
 * Sieve of Eratosthenes
 * 重點：
 * 1.
 * 找出小於 n 的因數
 * n = p * q (q 或 p 不等於 1)。表示 n 不是質數。p 跟 q 都是 n 的因數。
 * 以 12 為例：12 = 3 * 4、12 = 2 * 6。表示 12 可以被 3、2、4、6 整除，但判斷 4 跟 6 是沒必要的。
 * n = p * q，只需判斷因數 p <= q 的情況。n >= p * p =>  p <= √n。
 * 所以上述判斷可簡化為判斷因數 p <= √n 時，這些數能不能整除 n。
 * ex: 25，只需判斷 p = 2、3、4、5 能不能整除 25
 *
 * Sieve of Eratosthenes
 * 2. 要找小於 n 的所有質數可從 2 開始遍歷到 n。
 * 標記這些數 p < n 的倍數。如 2 就可以把 4、6、8、10等...標記起來。這些數一定不是質數。
 * 標記時只需從 p^2 開始。
 * 以 5 為例，5*2、5*3、5*4 都在先前判斷 2 跟 3 時標記過了，所以直接從 5 * 5 開始往上標記 25+5、25+(2*5)...。
 * 這些數一定不是質數。剩下未被標記的則都是質數。
 *
 * 3. 由第一點得知，要判斷 25 是不是質數，只需判斷它能不能被小於等於 √25 的 p 整除
 * 所以判斷小於 25 的所有質數，"最多" 只需判斷任何小於 25 的數，能不能被 2 或 3 整除。
 * 標記所有 p^2+p、p^2+2p... p =2、3的所有數。剩下的就是質數。
 */
