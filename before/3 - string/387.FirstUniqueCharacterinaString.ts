/* Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1. */

function firstUniqCha1(s: string): number {
    const table: { [ket: string]: number } = {};

    for (const c of s) {
        table[c] = (table[c] ?? 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (table[s[i]] === 1) return i;
    }

    return -1;
}

console.log(firstUniqChar('loveleetcode'));

function firstUniqCha2(s: string): number {
    const bucket: number[] = Array(26).fill(0);

    for (const d of s) {
        bucket[d.charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        if (bucket[s[i].charCodeAt(0) - 97] === 1) return i;
    }

    return -1;
}

console.log(firstUniqChar('loveleetcode'));

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */
