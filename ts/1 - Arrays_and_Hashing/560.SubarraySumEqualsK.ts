/* 
https://leetcode.com/problems/subarray-sum-equals-k/description/
*/

/* ------------------------------------------------------------------------------- */

function subarraySum(nums: number[], k: number): number {
    // num 可能會是負數
    const table: Record<number, number> = { 0: 1 };
    let result = 0;
    let currentSum = 0;

    for (const num of nums) {
        currentSum += num;

        if (currentSum - k in table) {
            result += table[currentSum - k];
        }

        table[currentSum] = ++table[currentSum] || 1;
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

// const nums = [1, 1, 1],
//     k = 2;
// const nums = [1, -1, 0],
//     k = 0;
const nums = [1, 2, 3, 4, 6, 7, 9],
    k = 16;

console.log(subarraySum(nums, k));
