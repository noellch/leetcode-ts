/* Given an integer array nums and an integer k, return the k most frequent elements. 
You may return the answer in any order. */

/* Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size. */

// T.C. 要優於 O(nlogn)，n 是 nums 的長度。

function topKFrequent_1(nums: number[], k: number): number[] {
    // num : count
    const table: { [key: string]: number } = {};

    for (const num of nums) {
        table[num] = (table[num] ?? 0) + 1;
    }

    const sortedTable = Object.keys(table).sort((a, b) => table[b] - table[a]);

    return sortedTable.slice(0, k).map((ele) => +ele);
}

console.log(topKFrequent_1([1, 2, 2, 2, 3, 3, 4], 2));

/**
 * T.C.: O(n) + O(nlogn) => O(n)
 * S.C.: O(n)
 */

function topKFrequent_2(nums: number[], k: number): number[] {
    const table: { [key: string]: number } = {};
    // 因為 freqBucket 的 index 代表 num 出現的頻率，0 用不到（不會有出現 0 次的狀況）。
    // 所以需要 nums.length + 1 個 bucket。
    const freqBucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    const result: number[] = [];

    // num : count
    for (const num of nums) {
        table[num] = (table[num] ?? 0) + 1;
    }

    // 相同頻率的數字放進同一個 bucket 中。
    for (const [num, count] of Object.entries(table)) {
        freqBucket[count].push(+num);
    }

    // bucket 的數量最多就等於 nums 的長度 + 1（0 用不到），
    // 所以從 index 最右邊，也就是出現頻率最高的數字開始，
    // 依序放進 result 中，直到 result 的長度等於 k。
    for (let i = freqBucket.length - 1; i >= 0; i--) {
        const bucketItem = freqBucket[i];
        if (bucketItem.length > 0) result.push(...bucketItem);
        if (result.length === k) break;
    }

    return result;
}

console.log(topKFrequent_2([1], 1));

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */
