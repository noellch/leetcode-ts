/* 
https://leetcode.com/problems/valid-anagram/description/
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

    const table: Record<string, number> = {};

    for (const chr of s) {
        table[chr] = ++table[chr] || 1;
    }

    for (const chr of t) {
        if (!table[chr] || table[chr] <= 0) return false;
        table[chr]--;
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
