/* Q: Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. */
// ? 輸入字串，找到第一個不重複的英文字母

var firstUniqChar = function (s) {
    // 建立一個有 26 個 indices 的 array 為桶子，數值先帶入 0。
    const bucket = new Array(26).fill(0)

    for (let i of s) {
        // 字母 a 的 ASCII 編碼為 97，b 為 98，以此類推...所以 i.charCodeAt() - 97 等於 26 個字母將在 bucket 中 index 的位址。值則為出現的次數。
        bucket[i.charCodeAt() - 97]++
    }

    for (let j = 0; j < s.length; j++) {
        // 將 s 字串中的字母一個個拿出轉成 ASCII - 97。再將之作為 index 查詢 bucket 的值是否為 1 (出現過一次)
        if (bucket[s[j].charCodeAt() - 97] === 1) return j
    }

    // 都找不到 return -1
    return -1
}

console.log(firstUniqChar('loveleetcode'))

//* 學習 new Array().fill() 做為 bucket 的用法。以及英文字母轉成 ASCII 編碼後， 減去97 可對應 26 個字母的位置。
/* A: */
// 1. 建立一個有 26 個 indices 的 array 為桶子，數值先帶入 0。(若不指定會帶入 ''，待會放入的值會被成字串)
// 2. 將 s 字串中所有字母拿出來轉譯成 ASCII 編碼再減去 97 剛好可個別放入 bucket 0 - 25 的 index。
// 3. 放入後就將那個 index 的值加 1，代表出現了一次。
// 4. 完成 bucket 後，再次將 s 字串的所有字母轉譯成 ASCII 編碼再減去 97。重新跟 一個個拿出來跟檢查看 bucket 對應的 index 值是不是 1
// 5. 是的話表示找到第一個出現 1 次的字母，馬上返回該 index
// 6. 若是都找不到，最後返回 -1
