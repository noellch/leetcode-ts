/* Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Note that in some languages, such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3. */

function hammingWeight(n: number): number {
    let count = 0;

    while (n) {
        count += n & 1;
        n = n >>> 1;
    }

    return count;
}

console.log(hammingWeight(11111111111111111111111111111101));

/**
 *  & 表示該位同為 1 時，才會返回 1。
 * 因為 1 只有第一位是 1 (...000000001)，所以 n 除了第一位外其他 & 1 會返回 0。
 * 比較完第一位後向右位移 1 位 >>> 表示左邊會補 0。
 * 所以一直到 n 的 1 全部計算完，n 就會變成 (...0000000000) ，然後跳出迴圈。
 */

/**
 * T.C.: O(n)
 * S.C.: O(1)
 */
