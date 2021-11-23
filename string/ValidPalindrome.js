/* A: Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases. */

var isPalindrome = function (s) {
    let str = ''
    for (let i of s.toLowerCase()) {
        if ((i.charCodeAt() >= 97 && i.charCodeAt() <= 122) || (i.charCodeAt() <= 57 && i.charCodeAt() >= 48)) {
            str += i
        }
    }

    let len = str.length
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false
        }
    }

    return true
}

var isPalindrome = function (s) {
    s = processString(s).toUpperCase()
    var l = 0
    var r = s.length - 1
    while (l < r) {
        if (s[l] != s[r]) {
            return false
        }
        l++
        r--
    }
    return true
}

var processString = function (s) {
    var res = ''
    for (var i = 0; i < s.length; i++) {
        var value = s.charCodeAt(i)
        if ((value >= 65 && value <= 90) || (value >= 97 && value <= 122) || (value >= 48 && value <= 57)) {
            res += s[i]
        }
    }
    return res
}

var isPalindrome = function (s) {
    const re = /[^a-z0-9]/gi
    s = s.toLowerCase().replace(re, '')

    return s === s.split('').reverse().join('')
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))

//* 原本使用 charCodeAt 來判斷 alphanumeric，但效能非常糟。使用 regular expression 後好很多。
//* regex 技巧：[^ ] 等於 [] 內判斷的相反。[^a-z0-9] 等於除了英文小寫跟數字之外的字元都用 replace 清除。
/*A: */
// 1. 用 regular expression 取出英數字
// 2. 將經過 regex 處理後的字串拆解成陣列。將陣列反轉再組回字串。
// 3. 頭尾反轉後的字串若跟原本的字串相同，也就等於這是個回文。
