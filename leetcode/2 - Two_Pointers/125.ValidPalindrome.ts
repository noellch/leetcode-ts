/* 
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

/* ------------------------------------------------------------------------------- */

// function isPalindrome(s: string): boolean {
//     const reqex = /[^a-z0-9]/gi;
//     const str = s.toLowerCase().replace(reqex, '');

//     return str === str.split('').reverse().join('');
// }

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
function isPalindrome(s: string): boolean {
    let r = s.length - 1,
        l = 0;

    while (r > l) {
        while (r > l && shouldSkip(s[r])) --r;
        while (r > l && shouldSkip(s[l])) ++l;

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;

        ++l;
        --r;
    }

    return true;
}

function shouldSkip(char: string) {
    const charCode = char.charCodeAt(0);
    return !(
        (charCode >= 97 && charCode <= 122) ||
        (charCode >= 65 && charCode <= 90) ||
        (charCode >= 48 && charCode <= 57)
    );
}

/*
T.C.: O(N)
S.C.: O(1)
*/
/* ------------------------------------------------------------------------------- */

const s = 'A man, a plan, a canal: Panama';
// const s = 'race a car';
// const s = ' ';

console.log(isPalindrome(s));
