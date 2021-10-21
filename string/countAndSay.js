/* Q: The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.

For example, the saying and conversion for digit string "3322251":


Given a positive integer n, return the nth term of the count-and-say sequence. */

//? 題目需要花較多時間理解。
//? 設計一個函式，接收一個整數。以這個整數決定返回第幾個步驟時的 count and asy。
//? count and asy:
//? 1 [第一步]
//? 1 => 一個 1 => 1(一個)1(1) [第二步]
//? 11 => 兩個 1 => 2(兩個)1(1) [第三步]
//? 21 => 一個 2 一個 1 => 1(一個)2(2)1(一個)1(1) [第四步]
//? 所以 countAndSay(4) return 1211

var countAndSay = function (n) {
    // n = 1 時 下面 for loop 不會作用。所以會直接返回 s = '1'。
    let s = '1'

    // 第一圈代表要跑多少步驟。 ex: n = 4 要跑四圈，但因為 n = 1  return 1 不用跑，實際上只跑了 3 圈。所以 i = 1 ~ 3
    for (let i = 1; i < n; i++) {
        s = l(s)
    }

    return s
}

const l = s => {
    // 設定一個 pointer
    let p = 0
    // 儲存連續同字元的長度
    let count = 0
    // 儲存最終字串
    let result = ''

    // 遍歷字串。j 從 index 1 開始跟 index 0 (pointer) 作比較，總共要比較 s.length 次。
    for (let j = 1; j <= s.length; j++) {
        if (s[p] !== s[j]) {
            // 計算連續相同字元的長度。ex: 1112 => s[p(idx0)] = 0 、s[j(idx3)] = 2，count = 3 - 0 等於連續字元 1 出現的次數。
            count = j - p
            // 把 result 累加。count + s[p] 是呈現多少個字元。以上述範例說明表示 3 個 1 => '31'。
            result = result + count + s[p]
            // 最後把 pointer 指向不同的那個字元的 index。繼續向下比較下個不同的字元。
            p = j
        }
    }
    return result
}

console.log(countAndSay(10))

//* 這題光是題目就花了不少時間理解。因為隨著 n 的不同，字串的長度也會不同，所以設計另一個 function 來處理每一個步驟會返回的字串。
