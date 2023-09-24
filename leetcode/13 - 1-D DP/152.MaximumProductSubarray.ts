/* 
Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.
*/

/* ------------------------------------------------------------------------------- */

function maxProduct(nums: number[]): number {
    let currentMax = 1,
        currentMin = 1,
        result = -Infinity;

    for (const num of nums) {
        const tempMax = Math.max(num, num * currentMax, num * currentMin);
        currentMin = Math.min(num, num * currentMax, num * currentMin);
        currentMax = tempMax;
        result = Math.max(currentMax, result);
    }

    return result;
}

/**
 * 如果 nums 全是正數，一定會越乘越大。問題是會包含負數。
 * 所以要不斷儲存當下積的最大值和最小值，因為下一個數很可能是負數，乘以最小值後就會成為最大正數。
 * nums 中的元素可能存在負數，若出現最小負數積，再與接下來的負數相乘，則可能成為最大的正數積。
 * 而當下最大的正數積也有可能在與接下來的負數相乘後變成最小的負數積。
 * 所以在保存連續最大正數積的同時，也必須同步更新最小負數積。
 *
 * 與新的一個元素相乘後可能會出現三種情況
 * 1. 新元素為正數。新元素 * prevMax 為最大正數積。
 * 2. 新元素本身的值為目前為止最大。如 [-1, 8]
 * 3. 新元素為負數。新元素 * prevMin 為最大正數積。
 */

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const nums = [2, -3, 0, -2, 4, 6];
// const nums = [-2, 0, -1];
// const nums = [-2];
const nums = [-4, -3, -2];

console.log(maxProduct(nums));
