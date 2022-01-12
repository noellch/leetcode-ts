/* Q: The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":

Given a positive integer n, return the nth term of the count-and-say sequence. */

//? 設計一個函式，接收一個整數。以這個整數決定返回第幾個步驟時的 count and asy。
//? count and asy:
//? 1 [第一步]
//? 1 => 一個 1 => 1(一個)1(1) [第二步]
//? 11 => 兩個 1 => 2(兩個)1(1) [第三步]
//? 21 => 一個 2 一個 1 => 1(一個)2(2)1(一個)1(1) [第四步]
//? 所以 countAndSay(4) return 1211

var countAndSay = function (n: number): string {
    let s = '1'

    // n = 1 return '1'
    while (n > 1) {
        s = saying(s)
        n--
    }

    return s
}

function saying(s: string): string {
    let result = ''
    let p = 0
    // 連續同字元的長度
    let count = 0
    // 遍歷字串
    // i 從 index 1 開始跟 index 0(pointer) 比較
    // i 要等於 s.length 不然最後一個字母判斷不到
    for (let i = 1; i <= s.length; i++) {
        if (s[p] !== s[i]) {
            // ex: 1112 => s[p] = 1 、s[j] = 2，count = 3 - 0 等於連續字元 1 出現的次數
            count = i - p
            // result 累加。count + s[p] 呈現多少個字元。以上為例表示 3 個 1 => '31'。
            result += count + s[p]
            // 最後把 pointer 指向不同的那個字元的 index。繼續向下比較下個不同的字元。
            p = i
        }
    }

    return result
}

console.log(countAndSay(5))
