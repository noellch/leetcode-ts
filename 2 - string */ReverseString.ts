/* Q: Write a function that reverses a string. The input string is given as an array of characters s. */

var reverseString = function (s: string[]): string[] {
    let l = 0,
        r = s.length - 1,
        temp = ''
    while (l < r) {
        temp = s[l]
        s[l] = s[r]
        s[r] = temp
        l++
        r--
    }

    return s
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
