/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 */

/**
 * Follow up:
 * What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

/* ------------------------------------------------------------------------------- */

function isAnagram_1(s: string, t: string): boolean {
    return s.split('').sort().join() === t.split('').sort().join();
}

console.log(isAnagram_1('ab', 'a'));
console.log(isAnagram_1('anagram', 'nagaram'));

/* 
T.C.: O(s + slogs s + t + tlogt + t) => O(nlogn)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

function isAnagram_2(s: string, t: string): boolean {
    // 前提是兩個字串長度要一樣
    if (s.length !== t.length) return false;

    const table: { [key: string]: number } = {};

    for (const c of s) {
        table[c] = ++table[c] || 1;
    }

    for (const k of t) {
        if (table[k]) --table[k];
        else return false;
    }

    return true;
}

console.log(isAnagram_2('ab', 'a'));
console.log(isAnagram_2('anagram', 'nagaram'));

/* 
T.C.: O(s + t)
S.C.: O(s + t)
*/

/* ------------------------------------------------------------------------------- */
