/* 
https://leetcode.com/problems/top-k-frequent-elements/description/
*/

/* ------------------------------------------------------------------------------- */

// function topKFrequent(nums: number[], k: number): number[] {
//     const table: Record<string, number> = {};

//     nums.forEach((num) => {
//         table[num] = ++table[num] || 1;
//     });

//     const sortedNums = Object.keys(table)
//         .sort((a, b) => table[b] - table[a])
//         .map((n) => +n);

//     return sortedNums.slice(0, k);
// }

/*
T.C.: O(N) + O(N * log(N))
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

function topKFrequent(nums: number[], k: number): number[] {
    const table: Record<string, number> = {};
    const bucket: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    const result: number[] = [];

    nums.forEach((num) => {
        table[num] = ++table[num] || 1;
    });

    for (const [num, count] of Object.entries(table)) {
        bucket[count].push(+num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) result.push(...bucket[i]);
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
