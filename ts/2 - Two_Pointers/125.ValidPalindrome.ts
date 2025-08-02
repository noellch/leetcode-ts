/* 
https://leetcode.com/problems/valid-palindrome/
*/

/* ------------------------------------------------------------------------------- */

// function isPalindrome(s: string): boolean {
//     const regex = /[^a-z0-9]/gi;
//     const str = s.toLowerCase().replace(regex, '');
//     return str.split('').reverse().join('') === str;
// }

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
function isPalindrome(s: string): boolean {
    let l = 0,
        r = s.length - 1;

    while (r > l) {
        while (r > l && shouldSkip(s[l])) l++;
        while (r > l && shouldSkip(s[r])) r--;

        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++;
        r--;
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
