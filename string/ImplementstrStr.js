/* A: Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf(). */

//? 給定一個 needle 跟一個 string called haystack。
//? 找到這個 string 出現這個 needle 的位置。找到後返回第一個字母的 index。
//? 找不到返回 -1。

var strStr = function (haystack, needle) {
    let len = needle.length
    let temp = ''

    if (!needle.length) return 0
    if (haystack === needle) return 0

    for (let i = 0; i <= haystack.length - len; i++) {
        temp = haystack.substr(i, len)
        if (temp === needle) return i
    }
    return -1
}

console.log(strStr('hello', ''))

//* 其實這題可以直接用 haystack.indexOf(needle) 解。但我不想...

// 1. 定義 edge cases： haystack === needle & !needle.length
// 2. 將 haystack 拆解成 needle 長度的 substr。
// 3. 依序將這些 substring 跟 needle 做比較。有遇到相同的就返回 i，反之返回 -1。
