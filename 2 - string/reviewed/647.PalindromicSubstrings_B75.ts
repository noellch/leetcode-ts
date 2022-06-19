/* Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string. */

function findPali(str: string, l: number, r: number) {
    let result = 0;

    while (l >= 0 && r < str.length && str[l] === str[r]) {
        r++;
        l--;
        result++;
    }

    return result;
}

function countSubstrings1(s: string): number {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let k = i;
        let j = i - 1;

        // 檢查 s[i] 往上存在多少重複字母，若重複不斷將指標 k 加 1
        while (s[k] === s[k + 1]) k++;
        // 跳出迴圈後 k 等於與 s[i] 相同的字母數量
        // 使用三角形數公式 (n(n+1))/2 計算重複字母的回文數量

        result += ((k - j) * (k - j + 1)) / 2;

        // 計算以完全相同的重複字母為中點的迴文數量
        result += findPali(s, j, k + 1);

        i = k;
    }

    return result;
}

console.log(countSubstrings1('baaab'));

function countSubstrings2(s: string): number {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        result += findPali(s, i, i);
        result += findPali(s, i, i + 1);
    }

    return result;
}

console.log(countSubstrings2('baaab'));

/**
 * T.C.: O(n^2)
 * S.C.: O(1)
 */
