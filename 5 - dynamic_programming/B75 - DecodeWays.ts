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

function numDecodings(s: string): number {
    const dp: { [key: number]: number } = { [s.length]: 1 }

    function dfs(i: number): number {
        if (i in dp) return dp[i]
        if (s[i] === '0') return 0

        let res = dfs(i + 1)

        if (i + 1 < s.length && (s[i] === '1' || (s[i] === '2' && +s[i + 1] >= 0 && +s[i + 1] <= 6))) {
            res += dfs(i + 2)
        }

        dp[i] = res

        return res
    }

    return dfs(0)
}

console.log(numDecodings('226'))
