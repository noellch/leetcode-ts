/* 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/* ------------------------------------------------------------------------------- */

// function topKFrequent(nums: number[], k: number): number[] {
//     const table: { [key: string]: number } = {};

//     for (const num of nums) {
//         table[num] = ++table[num] || 1;
//     }

//     const sortedNums = Object.keys(table).sort((a, b) => table[b] - table[a]);

//     return sortedNums.slice(0, k).map((num) => +num);
// }

/*
T.C.: O(N) + O(N * log(N))
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

function topKFrequent(nums: number[], k: number): number[] {
    const table: { [key: string]: number } = {};
    // freqBucket 的 index 代表 num 出現的頻率，0 用不到（不會有出現 0 次的狀況）。
    // 需要 nums.length + 1 個 bucket。
    const freqBucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    const result: number[] = [];

    for (const num of nums) {
        table[num] = ++table[num] || 1;
    }

    // 相同頻率的數字放進同一個 bucket 中。
    for (const [num, count] of Object.entries(table)) {
        freqBucket[count].push(+num);
    }

    // bucket 的數量最多等於 nums 的長度 + 1（0 用不到），
    // 所以從最大的 index，也就是出現頻率最高的數字開始，
    // 依序放進 result 中，直到 result 的長度等於 k。
    for (let i = freqBucket.length - 1; i >= 0; --i) {
        if (freqBucket[i].length > 0) result.push(...freqBucket[i]);
        if (result.length === k) break;
    }

    return result;
}

/**
 * T.C.: O(Ｎ)
 * S.C.: O(Ｎ)
 */

/* ------------------------------------------------------------------------------- */

const nums = [1, 1, 1, 2, 2, 3],
    k = 2;
// const  nums = [1],
//     k = 1;
console.log(topKFrequent(nums, k));
