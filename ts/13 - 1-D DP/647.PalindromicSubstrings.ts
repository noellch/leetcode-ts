/* 
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.
*/

/* ------------------------------------------------------------------------------- */

// function countSubstrings(s: string): number {
//     let result = 0;

//     for (let i = 0; i < s.length; i++) {
//         let r = i,
//             l = i;
//         while (l >= 0 && r < s.length && s[l] === s[r]) {
//             result += 1;
//             l -= 1;
//             r += 1;
//         }

//         r = i + 1;
//         l = i;

//         while (l >= 0 && r < s.length && s[l] === s[r]) {
//             result += 1;
//             l -= 1;
//             r += 1;
//         }
//     }

//     return result;
// }

/*
T.C.: O(N^2)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

function findPalin(s: string, l: number, r: number) {
    let result = 0;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
        result++;
        l--;
        r++;
    }

    return result;
}

function countSubstrings(s: string): number {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let j = i - 1;
        let k = i;

        while (s[k] === s[k + 1]) k++;

        i = k;

        result += ((k - j) * (k - j + 1)) / 2;
        result += findPalin(s, j, k + 1);
    }

    return result;
}

/* ------------------------------------------------------------------------------- */

const s = 'aaab';

console.log(countSubstrings(s));
