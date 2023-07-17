/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Follow up:
What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/* ------------------------------------------------------------------------------- */

// function isAnagram(s: string, t: string): boolean {
//     if (s.length !== t.length) return false;
//     return s.split('').sort().join() === t.split('').sort().join();
// }

/*
T.C.: O(N) + O(1 || log(N)) + O(N) = O(log(N)) 
S.C.: O(N) + O(N * log(N)) + O(N) = O(N * log(N)) 
*/

/* ------------------------------------------------------------------------------- */

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const table: { [key: string]: number } = {};

    for (const chr of s) {
        table[chr] = ++table[chr] || 1;
    }

    for (const chr of t) {
        if (table[chr]) --table[chr];
        else return false;
    }

    return true;
}

/* 
T.C.: O(s) + O(t) = O(N)
S.C.: O(s) + O(t) = O(N)
*/

/* ------------------------------------------------------------------------------- */

const s = 'anagram',
    t = 'nagaram';
// const s = 'rat',
//     t = 'car';
console.log(isAnagram(s, t));
