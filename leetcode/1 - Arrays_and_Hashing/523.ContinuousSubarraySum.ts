/* 
https://leetcode.com/problems/continuous-subarray-sum/description/
*/

/* ------------------------------------------------------------------------------- */

function checkSubarraySum(nums: number[], k: number): boolean {
    // 若有 subarray 的餘數是 0，必須要先有這個 base case，這個算法才成立；
    // 但若 index 0 餘數就是 0，是不能算 subarray 的，因為題目有提到 subarray 的長度至少是 2。
    const table: Record<number, number> = { 0: -1 };
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        current += nums[i];
        const remainder = current % k;

        if (!(remainder in table)) {
            table[remainder] = i;
        } else {
            if (i - table[remainder] > 1) {
                return true;
            }
        }
    }

    return false;
}

/* 
hash table 中若存在相同餘數，表示到當下 index 為止的 subarray 減去上一個同樣餘數的 index 的 subarray，
元素和一定會是 k 的倍數。次要判斷為，這個 subarray 的長度一定要大於等於 2。
*/

/* ------------------------------------------------------------------------------- */

// const nums = [23, 2, 4, 6, 7],
//     k = 6;
// const nums = [23, 2, 6, 4, 7],
//     k = 6;
// const nums = [23, 2, 6, 4, 7],
//     k = 13;
const nums = [23, 2, 4, 6, 6],
    k = 7;
console.log(checkSubarraySum(nums, k));
