/* Q: Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

//? 給定一個由字串組成的陣列，判斷字串共同擁有的最長前綴並返回。若沒有則返回 ""。

var longestCommonPrefix = function (strs: string[]): string {
    // 如果 strs 長度存在，則 result 等於 strs 的第一個值。長度不存在，則 result = ''
    let result = strs[0] ? strs[0] : ''
    let p = 0

    if (strs.length === 1) return result

    // 以 strs[0] 為標準，跟陣列的其他值逐項比對。
    for (let i = 1; i < strs.length; i++) {
        // 若其他值出現 ''，後面也不用比了，直接返回 ''。
        if (strs[i] === '') return ''
        // 若當下的值的第 p 個字母存在，且與 strs[0] 的第 p 個字母相同，則繼續往下比較，直到出現不同的字母
        while (strs[i][p] && strs[i][p] === result[p]) p++
        // 出現不同字母時的 p 之前的字母都是相同的。
        // 將 result 重新賦值成那些相同字母組成的字串。
        result = result.substring(0, p)
        p = 0
    }

    return result
}

console.log(longestCommonPrefix(['abba', 'abb', 'abbwfwefw']))
