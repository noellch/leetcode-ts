/* Q: You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 */

var plusOne = function (digits) {
    let pointer = digits.length - 1

    while (digits[pointer] >= 9) {
        digits[pointer] = 0
        pointer--
    }

    if (pointer < 0) {
        digits.unshift(1)
    } else {
        digits[pointer]++
    }
    return digits
}

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]))
// console.log(plusOne([9, 9, 9, 9, 9]))

//* 這題考的是有沒有考慮到 [9, 9, 9] 時應該要進位。
/* A: */
// 1. 將 pointer 設定在 array 的最後一位開始判斷，如果數字是為 9 則將之改為 0，pointer 往下一位。
// 2. 若 digits[pointer] 為 0 - 8 ，則跳出 while loop。然後 將該數字 +1。
// 3. 若是出現 digits 中每個數字都是 9。則 pointer 會不斷往下直到變成 -1。這時不能將該位數 +1，而是要在最前新增一個新的位數 1 ex: [0, 0 ,0] pointer = -1 。這時要 unshift 1 讓 digits 變成 [1, 0, 0 ,0]
