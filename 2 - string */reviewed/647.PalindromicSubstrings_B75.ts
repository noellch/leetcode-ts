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

function countSubstrings(s: string): number {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let k = i;
        let j = i - 1;

        while (s[k] === s[k + 1]) k++;

        i = k;

        result += ((k - j) * (k - j + 1)) / 2;

        result += findPali(s, j, k + 1);
    }

    return result;
}

console.log(countSubstrings('baaab'));
