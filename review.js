var countAndSay = function (n) {
    let s = '1'

    while (n > 1) {
        s = fn(s)
        n--
    }

    return s
}

const fn = (s) => {
    let p = 0
    let result = ''
    let len = 0
    for (let i = 1; i <= s.length; i++) {
        if (s[p] !== s[i]) {
            len = i - p
            result = result + len + s[p]
            p = i
        }
    }

    return result
}

console.log(countAndSay(1))
