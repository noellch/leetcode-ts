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

// function numDecodings(s: string): number {
//     const dp: { [key: number]: number } = { [s.length]: 1 }

//     function dfs(i: number): number {
//         if (i in dp) return dp[i]
//         if (s[i] === '0') return 0

//         let res = dfs(i + 1)

//         if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && +s[i + 1] >= 0 && +s[i + 1] <= 6))) {
//             res += dfs(i + 2)
//         }

//         dp[i] = res
//         console.log(dp)

//         return res
//     }

//     return dfs(0)
// }

function numDecodings(s: string): number {
    const dp = Array.from({ length: s.length + 1 }, () => 0)

    // 只有一個數字或是空字串時方法為一種
    dp[s.length] = 1

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '0') dp[i] = 0
        else dp[i] = dp[i + 1]
        if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && +s[i + 1] >= 0 && +s[i + 1] <= 6))) {
            dp[i] += dp[i + 2]
        }
    }

    return dp[0]
}

/**
 * 字串可從頭逐一判斷解析一個數字或兩個數字
 * 以 '226' 來說，設定指標 i 初始為 0 指向 '2'
 * '2' 可以被解析為 'B'。所以 ‘226’ 總可被解析的方法共有 1 + 字串 '26' 的總可被解析方法
 * 或是 '26' 可被解析為 'Z'。這個情況，總可被解析方法為 1 + ’6' 的總可被解析方法
 * 整個字串可被解析方法為這兩個情況加總
 * 但有幾個需要判斷的 edge case
 * '0' 開頭無法被解析，所以若該字串由 '0' 總解析方法為 0，後面就不用判斷了
 * 若由 '1' 開頭，i+1 可是 0~9
 * 若由 '2' 開頭，i+1 可是 0~6
 * 這時可繼續從 i+2 的位置往後繼續判斷
 * 若為其他狀況，則跳過
 */

console.log(numDecodings('226'))
