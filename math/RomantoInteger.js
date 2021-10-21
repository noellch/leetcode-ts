/* Q: Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. */

//? 將羅馬數字轉換成整數

// var romanToInt = function (s) {
//     const roman = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     }

//     let int = 0

//     for (let i = 0; i < s.length; i++) {
//         if (roman[s[i + 1]] > roman[s[i]]) {
//             int = roman[s[i + 1]] - roman[s[i]] + int
//             i++
//         } else {
//             int = roman[s[i]] + int
//         }
//     }

//     return int
// }

var romanToInt = function (s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    // 先讓 int = 個位數
    let int = roman[s[s.length - 1]]

    for (let i = s.length - 1; i > 0; i--) {
        if (roman[s[i - 1]] >= roman[s[i]]) {
            // 下一位比自己大或等於自己，就加上它
            int += roman[s[i - 1]]
        } else {
            // 若比自己小，就把它減掉
            int = int - roman[s[i - 1]]
        }
    }
    return int
}

console.log(romanToInt('XIIV'))

//* 使用 map 來 mapping 出對應的數字。
//* 主要思維：若下一個數字比自己大或等於自己，就將下個數字加上去。若比自己小，就把它減掉。
