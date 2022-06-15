/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */

function isPalindrome1(s: string): boolean {
    let l = 0,
        r = s.length - 1;

    while (l < r) {
        while (l < r && !processString(s[l])) l++;
        while (l < r && !processString(s[r])) r--;

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
    }

    return true;
}

function processString(c: string) {
    const charCode = c.charCodeAt(0);
    return (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90) || (charCode >= 48 && charCode <= 57);
}

console.log(isPalindrome1('A man, a plan, a canal: Panama'));

/**
 * T.C.: O(n)
 * S.C.: O(1)
 */

function isPalindrome2(s: string): boolean {
    const reg = /[^0-9a-z]/gi;
    const str = s.toLowerCase().replace(reg, '');

    return str === str.split('').reverse().join('');
}

console.log(isPalindrome2('A man, a plan, a canal: Panama'));
