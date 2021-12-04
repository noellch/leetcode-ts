/**
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward.
 * A substring is a contiguous sequence of characters within the string.
 */

// solution1
// function countSubstrings(s: string): number {
//     let result: number = 0

//     // check: 已傳進來的左右指標當作中點向外逐一確認是否為 palindrome，是的話就將 count 加一並 return。
//     function check(s: string, left: number, right: number): number {
//         let count: number = 0

//         let j = left,
//             k = right
//         while (j >= 0 && k < s.length && s[j] === s[k]) {
//             count++
//             j--
//             k++
//         }

//         return count
//     }

//     let t: number = 0

//     // 將每個字母的 index 當作中點
//     for (let i = 0; i < s.length; i++) {
//         // 以單個字母為中點的 palindrome。
//         t = check(s, i, i)
//         result += t
//         // 以雙個字母為中點的 palindrome。
//         t = check(s, i, i + 1)
//         result += t
//     }
//     return result
// }

// solution2

// concept： 以任何完全相同的重複字母作為中點。
function countSubstrings(s: string): number {
    let result: number = 0

    for (let i = 0; i < s.length; i++) {
        let j = i - 1,
            k = i
        // 檢查s[i] 往上存在多少重複字母。若重複不斷將指標 k 加一。
        while (k < s.length && s[k] === s[k + 1]) k++
        // 跳出迴圈後 k 等於個與 s[i] 將同的字母數量。
        // 計算重複字母為迴文的數量。
        // 使用三角形數公式 (n(n+1))/2 計算重複字母的回文數量。
        result += ((k - j) * (k - j + 1)) / 2

        // 直接將 i 跳到 k+1。
        i = k++

        // 計算以此完全相同的重複字母為中點的迴文數量。
        // ~j 判斷 j 不等於 -1。
        while (~j && k < s.length && s[j] === s[k]) {
            result++
            k++
            j--
        }
    }
    return result
}

console.log(countSubstrings('baaab'))
