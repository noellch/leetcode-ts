/* 
https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/description/
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
因為要窮舉所有子序列，總共有 2^N 個，每個子序列檢查是否迴文要 O(N) 時間。
S.C.: O(2^N)，因為 map 最多要存 2^N 個元素。
*/

/* ------------------------------------------------------------------------------- */

const s = 'leetcodecom';
// const s = "bb"
// const s = "accbcaxxcxx"

console.log(maxProduct(s));
