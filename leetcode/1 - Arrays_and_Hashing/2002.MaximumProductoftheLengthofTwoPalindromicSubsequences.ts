/* 
Given a string s, find two disjoint palindromic subsequences of s such that the product of their lengths is maximized. The two subsequences are disjoint if they do not both pick a character at the same index.

Return the maximum possible product of the lengths of the two palindromic subsequences.

A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters. A string is palindromic if it reads the same forward and backward.
*/

/* ------------------------------------------------------------------------------- */

function maxProduct(s: string): number {
    const N = s.length;
    const map: { [key: string]: number } = {};

    for (let mask = 1; mask < 1 << N; mask++) {
        // 1 << N = 2 ** N
        let subSeq = '';

        for (let i = 0; i < N; i++) {
            if (mask & (1 << i)) {
                // 把當下 mask 為 1 位置的字母加入 subSeq
                subSeq += s[i];
            }
        }
        if (subSeq === [...subSeq].reverse().join('')) {
            map[mask] = subSeq.length;
        }
    }

    let result = 0;

    for (const [k1, v1] of Object.entries(map)) {
        for (const [k2, v2] of Object.entries(map)) {
            if ((+k1 & +k2) === 0) {
                // 驗證 k1 跟 k2 是 disjoint 的
                result = Math.max(result, v1 * v2);
            }
        }
    }
    return result;
}

/*
T.C.: O(2^N * N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const s = 'leetcodecom';
// const s = "bb"
// const s = "accbcaxxcxx"

console.log(maxProduct(s));
