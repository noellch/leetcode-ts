/* 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/* ------------------------------------------------------------------------------- */

// function groupAnagrams(strs: string[]): string[][] {
//     const table = new Map<string, string[]>();

//     for (const str of strs) {
//         const word = str.split('').sort().join();
//         table.has(word) ? table.get(word)?.push(str) : table.set(word, [str]);
//     }

//     return Array.from(table.values());
// }

/*
T.C.: O(N * log(N) * M)
S.C.: O(N * M)

- T.C. of sort method is log(N)
- N stands for the average length of every string, M stands for the average length of the strs array
*/

/* ------------------------------------------------------------------------------- */

function groupAnagrams(strs: string[]): string[][] {
    const table = new Map<string, string[]>();

    for (const str of strs) {
        const bucket = Array(26).fill(0);
        for (const s of str) {
            const charCode = s.charCodeAt(0);
            ++bucket[charCode - 97];
        }

        table.has(bucket.join('*'))
            ? table.get(bucket.join('*'))?.push(str)
            : table.set(bucket.join('*'), [str]);
    }

    return Array.from(table.values());
}

/*
T.C.: O(N * M)
S.C.: O(N * M)

- N stands for the average length of every string, M stands for the average length of the strs array
*/

/* ------------------------------------------------------------------------------- */

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// const strs = [""]
// const strs = ["a"]

console.log(groupAnagrams(strs));
