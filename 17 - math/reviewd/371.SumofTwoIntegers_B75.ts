/* Given two integers a and b, return the sum of the two integers without using the operators + and -. */

function getSum(a: number, b: number): number {
    let carry = 0;

    // 只有第一次會進行 a + b 的運算，接下來都是 sum + carry
    // 以 b 當作 carry，a 當作兩數未處理進位前的 sum
    // 若 b 已經等於 0 就等於不需再進行運算
    while (b) {
        carry = (a & b) << 1;

        a = a ^ b;
        b = carry;
    }

    return a;
}

console.log(getSum(5, 12));

/**
 * a ^ b 等於二進位的 a + b，但需被進位的部分沒有被處理。
 * 因為 XOR 兩位都是 1 時會輸出 0，所以用 & 來確保兩位都是 1 時輸出 1，然後再往左移一位 << 作為進位。
 * 100 (4) & 100 (4) = 100 (4) [ 要進位 << 1 -> 1000 (8) ]
 * 
 * 
 * getSum(2, 7)
 * 先保存進位的部分
 * 再將兩數用 XOR 相加
 *
 * 0010 (2) & 0111 (7) = 0010 (2) 進位 << 1 -> 0100 (4) 
 * 0010 (2) ^ 0111 (7) = 0101 (5)

 * 0100 (4) & 0101 (5) = 0100 (4) 進位 << 1 -> 1000 (8)
 * 0100 (4) ^ 0101 (5) = 0001 (1)
 * 
 * 1000 (8) & 0001 (1) = 0000 (0) 不需進位了
 * 1000 (8) ^ 0001 (1) = 1001 (9)
 *
 */
