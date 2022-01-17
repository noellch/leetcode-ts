/* A: Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. */

var isPalindrome = function (s: string): boolean {
    let l = 0,
        r = s.length - 1

    //  左右 pointer 逐項比較，遇到不是 alphanumeric 的，跳過該項，將 pointer 推進。
    while (l < r) {
        while (l < r && !processString(s[l])) l++
        while (l < r && !processString(s[r])) r--

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
        l++
        r--
    }

    return true
}

// 判斷是不是 alphanumeric
var processString = function (s: string): boolean {
    return (
        (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122) ||
        (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90) ||
        (s.charCodeAt(0) <= 57 && s.charCodeAt(0) >= 48)
    )
}

// var isPalindrome = function (s) {
// regex 技巧：[^ ] 等於 [] 內判斷的相反。[^a-z0-9] 等於除了英文小寫跟數字之外的字元都用 replace 清除。
//     const re = /[^a-z0-9]/gi
//     s = s.toLowerCase().replace(re, '')

//     return s === s.split('').reverse().join('')
// }

console.log(isPalindrome('A man, a plan, a canal: Panama'))

console.log(isPalindrome('A man, a plan, a canal: Panama'))
