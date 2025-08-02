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
T.C.: 
O(N * K log K)，N 是字串數量，k 是字串平均長度。排序每個字串要 K log K 的時間，總共要排 N 個字串。
S.C.: O(N * K)
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
        if (!table[key]) {
            table[key] = [str];
        } else {
            table[key].push(str);
        }
    }

    return Object.values(table);
}

/*
T.C.: O(N * K)
外層迴圈：遍歷所有字串，時間複雜度是 O(N)
內層迴圈：遍歷每個字串的每個字母，時間複雜度是 O(K)，其中 K 是字串的平均長度
計算 key：把長度 26 的陣列轉成字串，時間複雜度是 O(26)，可以視為常數時間
字典操作：假設字典操作（查找、插入）的平均時間複雜度是 O(1)
S.C.: O(N * K)
bucket 陣列：長度固定為 26，所以是 O(1)
table 字典：最差情況下，每個字串都是獨一無二的字母異序詞，這時 table 會有 N 個 entry，
每個 entry 除了 key 還有一個長度為 K 的字串，所以是 O(N * K)
*/

/* ------------------------------------------------------------------------------- */

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// const strs = [""]
// const strs = ["a"]

console.log(groupAnagrams(strs));
