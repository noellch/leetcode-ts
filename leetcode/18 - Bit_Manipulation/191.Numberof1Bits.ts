/* 
https://leetcode.com/problems/number-of-1-bits/description/
*/

/* ------------------------------------------------------------------------------- */

function hammingWeight(n: number): number {
    let count = 0;

    while (n) {
        const d = n & 1;
        count += d;
        n = n >>> 1;
    }

    return count;
}

/**
 *  & 表示該位同為 1 時，才會返回 1。
 * 因為 1 只有第一位是 1 (...000000001)，所以 n 除了第一位外其他 & 1 會返回 0。
 * 比較完第一位後向右位移 1 位 >>> 表示左邊會補 0。
 * 所以一直到 n 的 1 全部計算完，n 就會變成 (...0000000000) ，然後跳出迴圈。
 */

/**
 * T.C.: O(N)
 * S.C.: O(1)
 */

/* ------------------------------------------------------------------------------- */

const n = 0b1011;
console.log(hammingWeight(n));
