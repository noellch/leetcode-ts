/* 
https://leetcode.com/problems/longest-palindromic-substring/description/
*/

/* ------------------------------------------------------------------------------- */

function longestPalindrome(s: string): string {
    let longestPalindrome = '';

    for (let i = 0; i < s.length; i++) {
        if (palindrome(i, i).length > longestPalindrome.length) longestPalindrome = palindrome(i, i);
        if (palindrome(i, i + 1).length > longestPalindrome.length) longestPalindrome = palindrome(i, i + 1);
    }
    function palindrome(l: number, r: number) {
        while (r < s.length && l >= 0 && s[l] === s[r]) {
            r++;
            l--;
        }

        return s.substring(l + 1, r);
    }

    return longestPalindrome;
}

/*
T.C.: O(N^2)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const s = 'babad';

// const s = 'cbbd';

console.log(longestPalindrome(s));
