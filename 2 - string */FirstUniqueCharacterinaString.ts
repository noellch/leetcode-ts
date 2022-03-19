/* Q: Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. */

var firstUniqChar = function (s: string): number {
    const bucket: number[] = Array(26).fill(0)

    for (const d of s) {
        bucket[d.charCodeAt(0) - 97]++
    }

    for (let i = 0; i < s.length; i++) {
        if (bucket[s[i].charCodeAt(0) - 97] === 1) return i
    }

    return -1
}

console.log(firstUniqChar('loveleetcode'))

/**
 *
 * 建立一個有 26 個 indices 的 array 為桶子，數值先帶入 0。(若不指定會帶入 ''，待會放入的值會被成字串)
 * 將 s 字串中所有字母拿出來轉譯成 ASCII 編碼再減去 97 剛好可個別放入 bucket 0 - 25 的 index。
 * 放入後就將那個 index 的值加 1，代表出現了一次。
 * 完成 bucket 後，再次將 s 字串的所有字母轉譯成 ASCII 編碼再減去 97。重新跟 一個個拿出來跟檢查看 bucket 對應的 index 值是不是 1
 * 是的話表示找到第一個出現 1 次的字母，馬上返回該 index
 * 若是都找不到，最後返回 -1
 *
 */
