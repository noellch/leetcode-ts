/* Q: Given a string s, return the longest palindromic substring in s. */

//? 找出給定字串中最長的回文子字串。

var longestPalindrome = function (s: string): string {
    // 返回當下左右所在位置的子字串。
    function checkPali(l: number, r: number): string {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--
            r++
        }
        // 這時左右的位置會在回文的下或上一個字母。
        // ex: cbabd。若以 a 為基準，跳出迴圈後，left 會在 0 的位置，而 right 會在 4。
        // 因為 substring(1, 2) 第二個參數的位置本來就不被包含，所以要將 left + 1，才可以取到回文子字串。
        return s.substring(l + 1, r)
    }

    if (!s || s.length === 1) return s
    // 起始值預設字串中第一個字母為最長回文
    let longestPalindrome = s[0]

    for (let i = 0; i < s.length; i++) {
        // 這邊返回的是以當下 i 為基準，向左右下去做判斷所返回的子字串。
        let tempLongest = checkPali(i, i)
        // 若當下返回的子字串長度比之前的都還長，則把最長回文的頭銜給它。
        if (tempLongest.length > longestPalindrome.length) longestPalindrome = tempLongest
        // 這邊返回的是以當下 i 及 i +1為基準，向左右下去做判斷所返回的子字串。
        tempLongest = checkPali(i, i + 1)
        if (tempLongest.length > longestPalindrome.length) longestPalindrome = tempLongest
    }

    return longestPalindrome
}

console.log(longestPalindrome('babad'))

/**
 *
 *
 * 遍歷給定字串中每一個字母。
 * case1: 以字母為基準向外比較 n - 1 及 n + 1 是否相等。ex: cbabc，以 a 為基準比較 b、c。
 * 直到左右不相等後停止判斷，返回該子字串。
 * case2: 以兩個相同的字母為基準向外比較 n - 2 及 n + 1 是否相等。ex: cbaabc，以 aa 為基準比較 b、c。
 * 直到左右不相等後停止判斷，返回該子字串。
 * 不斷比較返回的子字串，取其中最大長度者。
 */
