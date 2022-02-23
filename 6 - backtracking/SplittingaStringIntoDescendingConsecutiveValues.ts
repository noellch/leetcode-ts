/** You are given a string s that consists of only digits.

Check if we can split s into two or more non-empty substrings such that the numerical values of the substrings are in descending order and the difference between numerical values of every two adjacent substrings is equal to 1.

For example, the string s = "0090089" can be split into ["0090", "089"] with numerical values [90,89]. The values are in descending order and adjacent values differ by 1, so this way is valid.
Another example, the string s = "001" can be split into ["0", "01"], ["00", "1"], or ["0", "0", "1"]. However all the ways are invalid because they have numerical values [0,1], [0,1], and [0,0,1] respectively, all of which are not in descending order.
Return true if it is possible to split s​​​​​​ as described above, or false otherwise.

A substring is a contiguous sequence of characters in a string. */

function splitString(s: string): boolean {
    function dfs(idx: number, prevVal: number): boolean {
        if (idx === s.length) return true

        // j 從傳入的 index 往後開始
        for (let j = idx; j < s.length; j++) {
            const curVal = s.substring(idx, j + 1)

            // 若這組 substring 比前一組小 1，表示組數字是可以列入考慮的候選
            // 然後再將 j+1 傳入 dfs 做 recursion，繼續往下判斷下一組比這組數字小 1 的數字
            // 一直返回都是 true ，表示 s 可被拆解成題目的要求
            if (+curVal + 1 === +prevVal && dfs(j + 1, +curVal)) return true
        }

        return false
    }

    //先找第一部分，由 0 到 i 的每一組 substring 下去當作第一組
    // i 遍歷到 s 長度減 1 是因為至少要將 s 分成兩個部分，才能判斷是不是符合問題要的定義
    // 所以至少要留最後一位數當作第二個部分
    for (let i = 0; i < s.length - 1; i++) {
        const val = s.substring(0, i + 1)

        // 題目提到數字的排列要是 descending order 且要往下相差 1。
        // 傳入每一組 substring 作為下一組比較的基準
        // 傳入 i+1 由當下 i 的下一個數字動態往後找

        //ex: 1234
        // 例如目前 0 到 i 的 substring 是 12，下一組就須由 3 開始判斷。也就是 3 或 34 是不是 12 的向下減 1 的數字。
        if (dfs(i + 1, +val)) return true
    }

    return false
}

const s = '4771447713'
console.log(splitString(s))
