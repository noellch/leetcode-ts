/* Q: Write a function that reverses a string. The input string is given as an array of characters s. */

var reverseString = function (s) {
    for (let i = 0; i < s.length / 2; i++) {
        let temp = s[i]
        s[i] = s[s.length - 1 - i]
        s[s.length - 1 - i] = temp
    }

    return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))

/* A: */
//* 其實這題可以直接用 s.reverse() 解
// 1. 這題有點太簡單了...
