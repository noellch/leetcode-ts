/* 
https://leetcode.com/problems/group-anagrams/description/
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
    const table: Record<string, Array<string>> = {};

    for (const str of strs) {
        const bucket: number[] = new Array(26).fill(0);
        for (const s of str) {
            const charCode = s.charCodeAt(0);
            bucket[charCode - 97] += 1;
        }
        const key = bucket.join('*');
        !table[key] ? (table[key] = [str]) : table[key].push(str);
    }

    return Object.values(table);
}

/*
T.C.: O(N * K)
S.C.: O(N * K)

- N stands for the average length of every string, K stands for the average length of the strs array
*/

/* ------------------------------------------------------------------------------- */

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// const strs = [""]
// const strs = ["a"]

console.log(groupAnagrams(strs));
