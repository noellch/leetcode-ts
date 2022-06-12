// /* Given a string s, return the longest palindromic substring in s. */

function findPalindrome(str: string, l: number, r: number): string {
    while (r < str.length && l >= 0 && str[l] === str[r]) {
        l--;
        r++;
    }

    return str.substring(l + 1, r);
}

function longestPalindrome(s: string): string {
    if (s.length === 1) return s;
    let longestPali = s[0];

    for (let i = 0; i < s.length; i++) {
        if (findPalindrome(s, i, i).length > longestPali.length) {
            longestPali = findPalindrome(s, i, i);
        }

        if (findPalindrome(s, i, i + 1).length > longestPali.length) {
            longestPali = findPalindrome(s, i, i + 1);
        }
    }

    return longestPali;
}

console.log(longestPalindrome('babad'));

/**
 * 遍歷字串，以 i 為基準往左右確認最長迴文
 * 再次遍歷字串，以 i 及 i+1 為基準往左右再次找尋最長迴文
 */

/**
 * T.C.: O(n^2)
 * S.C.: O(1)
 */
