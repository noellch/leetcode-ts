/* Q: Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not. */

//? 讓 n 不斷等於 n 的各個數字的平方和。如果最後 n reduce 到 1，則 n 就是 happy number，反之則否。

var isHappy = function (n) {
    // 定義一個 Set 存放數字平方的和。如果和已經存在 Set 中，表示進程正處於無限 loop。
    const set = new Set()
    // 定義 sum 儲存每次 loop 當下的數字平方和。
    let sum

    // 若 n 還不等於 1。
    while (n !== 1) {
        sum = 0

        // 將 n 的各個數字轉成字串遍歷。
        for (let digit of n + '') {
            // sum = n 各個數字的平方和。
            sum += Math.pow(+digit, 2)
        }

        // 如果 sum 已經存在於 set 中，表示開始重複 loop 了，所以跳出迴圈， return false。
        if (set.has(sum)) {
            return false
        }

        // 若 sum 還沒存在 set 中，add 進 set。
        set.add(sum)
        // 讓 n = 這個平方和，繼續下一輪。
        n = sum
    }

    return true
}

console.log(isHappy(7))

//* 這題的難點在於如何判斷 process 處於 無限 loop 狀態。
