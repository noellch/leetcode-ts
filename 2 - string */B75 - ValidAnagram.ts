/* Q: Given two strings s and t, return true if t is an anagram of s, and false otherwise. */

var isAnagram = function (s: string, t: string): boolean {
    // 前提是兩個字串長度要一樣
    if (s.length !== t.length) return false

    type Table = {
        [key: string]: number
    }
    const table: Table = {}

    for (const l of s) {
        table[l] = ++table[l] || 1
    }

    for (const k of t) {
        if (table[k]) --table[k]
        else return false
    }

    return true
}

console.log(isAnagram('ab', 'a'))
