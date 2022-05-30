/* Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not. */

function isHappy(n: number): boolean {
    // 定義一個 Set 存放數字平方的和。如果和已經存在 Set 中，表示進程正處於無限 loop。
    const set: Set<number> = new Set()
    let sum = 0

    while (!set.has(n)) {
        set.add(n)
        sum = 0

        while (n) {
            sum += (n % 10) ** 2
            n = ~~(n / 10)
        }

        console.log(set)
        n = sum
        if (n === 1) return true
    }

    return false
}

console.log(isHappy(19))

/**
 * T.C.: O(N) N 為平方和計算的次數
 * S.C.: O(N) N 為平方和計算的次數
 */
