/**
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward.
 * A substring is a contiguous sequence of characters within the string.
 */

// solution1
// function countSubstrings(s: string): number {
//     function checkPali(l: number, r: number): number {
//         // 傳進來的左右指標當作中點向外逐一確認是否為 palindrome，是的話就將 count 加一並 return
//         let count = 0
//         while (l >= 0 && r < s.length && s[l] === s[r]) {
//             l--
//             r++
//             count++
//         }
//         return count
//     }

//     let result = 0
//     for (let i = 0; i < s.length; i++) {
//         // 以單個字母為中點的 palindrome
//         result += checkPali(i, i)
//         // 以雙個字母為中點的 palindrome
//         result += checkPali(i, i + 1)
//     }

//     return result
// }

// T.C : O(n^2)
// S.C : O(1)

// solution2
// concept： 以任何完全相同的重複字母作為中點
function countSubstrings(s: string): number {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let k = i,
            j = i - 1;
        // 檢查s[i] 往上存在多少重複字母，若重複不斷將指標 k 加一
        while (k < s.length && s[k] === s[k + 1]) k++;
        // 跳出迴圈後 k 等於與 s[i] 將同的字母數量
        // 使用三角形數公式 (n(n+1))/2 計算重複字母的回文數量
        result += ((k - j) * (k - j + 1)) / 2;

        // 快轉 i
        i = k;
        // k + 1
        k += 1;
        // 計算以此完全相同的重複字母為中點的迴文數量
        // ~j 判斷 j 不等於 -1
        while (~j && k < s.length && s[k] === s[j]) {
            k++;
            j--;
            result++;
        }
    }

    return result;
}

console.log(countSubstrings('baaab'));
