/* Q: Given an integer n, return the number of prime numbers that are strictly less than n. */

//? 求所有小於 n 的質數。

var countPrimes = function (n) {
    // 建立一個有 10 個 index 的 array，再利用 keys 取它的 index 建立一個有 0~9 值的新 array。
    // const nums = [...Array(n).keys()]
    // 其實這樣寫，建立一個有 n 個 index 的 array 就行。
    const nums = Array(n)
    let count = 0

    for (let i = 2; i < n; i++) {
        if (nums[i] !== null) {
            count++
            // 為什麼 j 是 i * i ?
            // 假設 i 為 2，是質數，則所有 2 ~ n 的所有 i + 2 的數都不會是質數，所以從 i * i = 4 開始都不會是質數。
            // 假設 i 為 3，是質數，則所有 3 ~ n 的所有 i + 3 的數都不會是質數，但 6 在 2 的時候已經判斷過，所以從 i * i = 9 開始判斷就可以。
            // 假設 i 為 4，因為都是 2 的倍數，所以 4 的倍數都不用判斷，也已經都被賦值為 null。
            // 假設 i 為 5，若 n 等於 20，則 5 * 5 = 25 已經超過 20。所以也不用判斷。
            // 也就是說 loop 跑完後，array 中所有非質數位置都會變成 null，剩下的都是質數。
            // i 從 2 到 n (外層 loop)，只要遇到不是 null 的 就會讓 count 加 1。
            //i = 2 count + 1，j 從 4 開始加 2 後賦值為 null，
            //i = 3 count + 1，j 從 9 開始加 3 後賦值為 null，
            //i = 4 === null
            //i = 5 count + 1，j 為 25，內層 loop 不會跑。
            //i = 6 === null
            //i = 7 count + 1，j 為 49，內層 loop 不會跑。
            // 以此類推...
            for (let j = i * i; j < n; j += i) {
                nums[j] = null
            }
        }
    }

    return count
}

console.log(countPrimes(50))
//* 這題真的很有趣，雖然是 easy，但不是很容易...
//* 學習 Sieve of Eratosthenes
//* 幾個重點：
//* 1. n = p * q (q 或 p 不等於 1)。表示 n 不是質數。
//* 以 12 為例：12 = 3 * 4、12 = 2 * 6。表示 12 可以被 3、2、4、6 整除，但判斷 4 跟 6 是沒必要的。
//* 所以只需判斷 p <= q 的情況，也就是 p <= √n。
//* 2. Sieve of Eratosthenes 判斷時只需從 n^2 開始判斷，
//* 以 5 為例，5*2、5*3、5*4 都在先前判斷 2 跟 3 時判斷過了，所以直接從 5 * 5 開始就好。

//* 譬如說要判斷小於 25 的所有質數，只需判斷任何小於 25 的數，能不能被 2 或 3 整除。
//* 因為25 = 2 * q 或 3 ＊ q 。
//* 4 * q 不用判斷因為 4 已經會被 2 整除。
//* 5 * q 時 q 最大就只能是 5 了。所以只需判斷 p <= √n。
