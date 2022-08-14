/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. */

/* ------------------------------------------------------------------------------- */

function groupAnagrams_1(strs: string[]): string[][] {
    const table: Map<string, string[]> = new Map();

    for (const str of strs) {
        const word = str.split('').sort().join('');
        table.has(word) ? table.get(word)?.push(str) : table.set(word, [str]);
    }

    return Array.from(table.values());
}

console.log(groupAnagrams_1(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

/**
 * T.C.: O(nlogn * m)
 * nlogn 是因為 sort，n 是 每個 string 的平均長度；m 是整個 strs 的長度
 * S.C.: O(n)
 */

/* ------------------------------------------------------------------------------- */

// 不用 sort 的方法。用 bucket 轉為 string 當作 table 的 key。
//bucket: 紀錄每個 string 的每個字母出現的次數。
function groupAnagrams_2(strs: string[]): string[][] {
    const table: Map<string, string[]> = new Map();

    for (const str of strs) {
        const bucket = Array(26).fill(0);

        for (const s of str) {
            bucket[s.charCodeAt(0) - 97]++;
        }

        table.has(bucket.join('*')) ? table.get(bucket.join('*'))?.push(str) : table.set(bucket.join('*'), [str]);
        /* Map(3) {
            '10001000000000000001000000' => [ 'eat', 'tea', 'ate' ],
            '10000000000001000001000000' => [ 'tan', 'nat' ],
            '11000000000000000001000000' => [ 'bat' ]
        } */
    }

    console.log(table);

    return Array.from(table.values());
}

console.log(groupAnagrams_2(['bdddddddddd', 'bbbbbbbbbbc']));

/**
 * T.C.: O(n * m)
 * n 是 每個 string 的平均長度；m 是整個 strs 的長度
 * S.C.: O(n)
 */

/* ------------------------------------------------------------------------------- */
