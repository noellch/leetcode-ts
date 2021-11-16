/**
 * A message containing letters from A-Z can be encoded into numbers using the following mapping:
 * 'A' -> "1"
 * 'B' -> "2"
 * ...
 * 'Z' -> "26"
 * To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped
 * into:
 * "AAJF" with the grouping (1 1 10 6)
 * "KJF" with the grouping (11 10 6)
 *
 * Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".
 *
 * Given a string s containing only digits, return the number of ways to decode it.
 *
 * The answer is guaranteed to fit in a 32-bit integer.
 */

var numDecodings = function (s) {
    // edge case
    if (s == null || s.length === 0) return 0
    // s 以 0 開頭，該字串無效，直接返回 0。
    if (+s[0] === 0) return 0

    // 定義一個 array 儲存 s 每一位可能的總方法數。
    const dp = new Array(s.length + 1).fill(0)

    // base case
    //dp[0] = 1，視為第一種 decode 方法的起始。dp[1] = 1 視為第二種 decode 方法的起始。
    //ex: 22。dp[0] 為 2。 dp[1] 為 22。而 22 等於 兩種可能性的和，dp[2] 也等於 2。
    // dp = [1, 1, 2]
    //ex: 226。 dp = [1, 1, 2, 3]
    //ex: 2264。 dp = [1, 1, 2, 3, 3] 2 2 6 4/ 22 6 4/ 2 26 4（64 無效）
    dp[0] = 1
    dp[1] = 1

    for (let i = 2; i <= s.length; i++) {
        // 該位數的前一位是不是 valid。若不是，第一種組合的可能性全都失效。若有效，當下 dp[i] 先加上 dp[i-1]。
        let a = +s[i - 1]
        if (a >= 1 && a <= 9) {
            dp[i] += dp[i - 1]
        }
        // 接著判斷該位數的前兩位是不是有效，若不是則第二種組合的可能性全都失效，dp[i] = dp[i](這邊本來是 0) +  dp[i-1]
        let b = s.slice(i - 2, i)
        if (+b >= 10 && +b <= 26) {
            // 若有效，則加上 dp[i - 2] 的方法。dp[i] = dp[i-1] +  dp[i - 2]
            dp[i] += dp[i - 2]
        }
    }

    // 返回 dp array 的最後一位，就是 s 長度的總 decode 方法數量。
    return dp[s.length]
}

console.log(numDecodings(s))

/**
 * 這題讓我徹底感覺到遇上 dp 的絕望...
 * 以下是我試著理解後的說明。
 * 1. 基本上每一種 s 都會有兩種 decode 方法的組合，一種是將最後一位視為單一數字，另一種是將最後兩位視為兩位數數字。
 * ex: 22645 就會有 1. 2 2 6 4 5/ 22 6 4 5/ 2 26 4 5/ 2 2 64 5/ 22 64 5 和 22 6 45/ 2 2 6 45/ 2 26 45 等 8 種 decode 組合。
 * 2. 每一個位數的總方法數量 = 前一個位數的總方法數量 + 前兩個位數的總方法數量。=> f(n) = f(n-1) +f(n-2)
 * ex: 2264 的總 decode 方法等於 226 的 3 種方法（2 2 6/ 22 6 以及 2 26）加上 22 的兩種方法（22 以及 2 2）共 5 種方法。
 * 呈上。2 2 6 4/ 22 6 4/ 2 26 4 及 2 2 64/ 22 64。
 * 3. 前兩位低於 10 或超過 26 等於那組之前的所有方法全都失效。前一位為 0 也等於那組的方法全都失效。
 * ex: 1001 完全沒有 decode 方法因為... 是從 10 跟 100 兩個總方法相加而來，而這兩個組合都是無效的。
 * 4. 若 s 為 0 開頭，這個字串完全無效。直接返回 0。
 *
 * 所以定義一個 array 等於 s + 1的長度，去儲存每一位數有可能的最大方法數量，array 的最後一個元素就等於 倒數第二個元素 + 倒數第三個元素。
 * 也就是 s 長度會有的 decode 方法數量。
 * 為什麼是 s + 1 呢？
 * 因為每一位都等於到當前位數之前的總方法數，不包含自身數字。
 */
