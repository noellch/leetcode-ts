/* The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.
Given a positive integer n, return the nth term of the count-and-say sequence. */

/**
 * 設計一個函式，接收一個整數。以這個整數決定返回第幾個步驟時的 count and asy。
 * count and asy:
 * 1 [第一步]
 * 1 => 一個 1 => 1(一個)1(1) [第二步]
 * 11 => 兩個 1 => 2(兩個)1(1) [第三步]
 * 21 => 一個 2 一個 1 => 1(一個)2(2)1(一個)1(1) [第四步]
 * 所以 countAndSay(4) return 1211
 */

function countAndSay(n: number): string {
    let s = '1';

    if (n > 1) while (--n) s = saying(s);

    return s;
}

function saying(s: string): string {
    let p = 0;
    let cas = '';

    for (let i = 1; i <= s.length; i++) {
        if (s[i] !== s[p]) {
            const count = i - p;
            cas += count + s[p];
            p = i;
        }
    }

    return cas;
}

console.log(countAndSay(2));

/**
 * 計算連續相同字元的長度 + 那個字元。
 * 重複 n 次。
 */

/**
 * T.C.: O(n * m) m 是最長連續字元的長度。因為每次遍歷相同字元 m 次（最差）重複 n 次。
 * S.C.: O(1)
 */
