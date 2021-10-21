/* Q: Given two strings s and t, return true if t is an anagram of s, and false otherwise. */

var isAnagram = function (s, t) {
    const obj = {}

    if (s.length !== t.length) return false

    for (let i of s) {
        obj[i] = ++obj[i] || 1
    }

    for (let j of t) {
        if (!obj[j]) {
            return false
        } else {
            --obj[j]
        }
    }

    return true
}

console.log(isAnagram('anagram', 'nagaram'))

//* 這題跟 Intersectionof Two Arrays II 有些類似
/* A:  */

// 1. 建立一個物件存放 s 字串中各字母出現的次數。 ex: {a:1, b:2...} a 出現一次，b 出現兩次
// 2. 設定 edge case。兩個字串長度不同直接返回 false。
// 3. 將 s 字串中的字母遍歷，遇到沒出現過的字母就放將物件中，並將 value 設為 1。出現過的就將以這個字母為 key 的值 + 1。
// 4. 將 t 字串的字母拿出來跟物件裡的值做比對，遇到在物件中找不到的，就返回 false (代表當下這個字母在 s 字串中沒出現過)。
// 5. 每找到一次就將物件中該字母的值 -1。若一直減到 0 下次再出現該字母，就是 if(false)。
// 6. 迴圈跑完都沒有 return false 就 return true。因為兩個字串長度相等，所以也不會有比對不完全的問題。
