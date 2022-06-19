/* The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them. */

/**
 * Hamming distance 指的是兩個二進位整數比較，。
 * Input: x = 1, y = 4
 * Output: 2
 * Explanation:
 *1   (0 0 0 1)
 *4   (0 1 0 0)
 *       ↑   ↑
 * The above arrows point to positions where the corresponding bits are different.
 
 * 在資訊理論中，兩個等長字符串之間的漢明距離（英語：Hamming distance）是兩個字符串對應位置的不同字符的個數。換句話說，它就是將一個字符串變換成另外一個字符串所需要替換的字符個數。
 * 漢明重量是字符串相對於同樣長度的零字符串的漢明距離，也就是說，它是字符串中非零的元素個數：對於二進位字符串來說，就是1的個數，所以11101的漢明重量是4。
 * 也就是説比較兩個同長度二進位字串，同樣位置的不同字符的數量。
 */

function hammingDistance(x: number, y: number): number {
    let n = x ^ y;
    let count = 0;

    while (n) {
        count += n & 1;
        n = n >>> 1;
    }

    return count;
}
