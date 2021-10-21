/* Q: Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

//? 給定一個由字串組成的陣列，判斷字串共同擁有的最長前綴並返回。若沒有則返回 ""。

var longestCommonPrefix = function (strs) {
    // 如果 strs 長度存在，則 result 等於 strs 的第一個值。反之長度不存在，則 result = ''
    let result = strs.length ? strs[0] : ''

    // edge case
    if (strs.length <= 1) return result

    // 以 strs[0] 為標準，跟陣列的其他值逐項比對。
    for (let i = 1; i < strs.length; i++) {
        // 若其他值出現 ''，後面也不用比了，直接返回 ''。
        if (strs[i] === '') return ''

        // 定義一個 pointer，作為遍歷字串的指標。
        let p = 0
        // 若當下的值的第 p 個字母存在，且與 strs[0] 的第 p 個字母相同，則繼續往下比較，直到出現不同的字母
        while (strs[i][p] && result[p] === strs[i][p]) p++
        // 出現不同字母時的 p 之前的字母都是相同的。
        // 將 result 重新賦值成那些相同字母組成的字串。
        result = result.substr(0, p)

        // 將 strs 內的值全部比對過一次。
    }
    return result
}

console.log(longestCommonPrefix(['abba', 'abb', 'abbwfwefw']))

//* 覺得這題自己解得很好 ^^
//* 主要思維是一開始就要將 strs[0] 直接當作最長 prefix 跟後面的值進行比對。
