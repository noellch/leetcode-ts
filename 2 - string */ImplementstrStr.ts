/* A: Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf(). */

//? 給定一個 needle 跟一個 string called haystack。
//? 找到這個 string 出現這個 needle 的位置。找到後返回第一個字母的 index。
//? 找不到返回 -1。

var strStr = function (haystack: string, needle: string): number {
    if (needle === haystack || needle.length <= 0) return 0

    const needleLen = needle.length
    let tempStr = ''

    for (let i = 0; i <= haystack.length - needleLen; i++) {
        tempStr = haystack.substring(i, i + needleLen)
        if (tempStr === needle) return i
    }

    return -1
}

console.log(strStr('hello', 'lo'))

/**
 *
 * 定義 edge cases： haystack === needle & !needle.length
 * 將 haystack 拆解成 needle 長度的 substr。
 * 依序將這些 substring 跟 needle 做比較。有遇到相同的就返回 i，反之返回 -1。
 *
 */
