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
