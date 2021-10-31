/* Q: Given a string s, find the length of the longest substring without repeating characters. */

//* window method + Set solution。
var lengthOfLongestSubstring = function (s) {
    // 定義一個 Set 存放不重複連續字母。
    let set = new Set()
    // 最大長度
    let maxLen = 0
    // right pointer
    let rp = 0
    // left pointer
    let lp = 0

    // 若 s 不存在，返回 0。
    if (!s) {
        return maxLen
    }

    // 讓 rp 遍歷整個字串
    while (rp < s.length) {
        if (!set.has(s[rp])) {
            // 若 Set 內部不存在目前的字母，則將該字母放進 Set
            // 若 rp 不斷往上，都與 Set 內的值不同，則 Set 內會呈現 s 的不同連續字母，而 Set.size 則是當下不重複字母字串的長度。
            set.add(s[rp])
            // 更新當下最大不重複字母字串的長度
            maxLen = Math.max(maxLen, set.size)
            // rp 繼續往上
            rp++
        } else {
            // 假設目前 Set 為 Set[a, b, d, c]，當下最長的不重複字母字串就是 abdc。
            // 若緊接下來的 rp 所在的字母是 d，因為與 Set 內的值重複。
            // 所以會從 lp 所在位置的 index 開始刪除 Set 內的值，直到 Set 內不再出現 d。
            // 以上面的例子，因為 rp 會停在 d，Set 若沒有刪到 d 消失，rp 不會繼續往上，所以會陸續刪除a、b、d。
            // 直到 Set 內的 d 消失， rp 所在的 d 會加入，讓 Set 重新計算新的不重複字母字串的長度。
            set.delete(s[lp])
            lp++
        }
    }

    return maxLen
}

//* single array solution
var lengthOfLongestSubstring = function (s) {
    let arr = []
    let maxLen = 0

    // 遍歷 s 字串。
    for (let i = 0; i < s.length; i++) {
        // p 為當下字母在 arr 中的 index
        const p = arr.indexOf(s[i])

        // 若當下的字母存在 arr 中，
        if (p !== -1) {
            // 將 arr 前半部直到與 p 相同字母的 index 的所有值都刪除。
            // ex: [a, b, d, c]，若僅接下來的字母是 d，則 arr 內與 d 相同字母的 index 為 2。
            // 將 0 - 2 刪除，繼續不重複字母字串的計算。
            arr.splice(0, p + 1)
        }
        // 若當下的字母不存在 arr 中，則將該字母放入
        arr.push(s[i])
        // 不斷更新每一輪 arr 的長度，也就是當下最大不重複字母字串的長度。
        maxLen = Math.max(maxLen, arr.length)
    }

    return maxLen
}

console.log(lengthOfLongestSubstring('pwwkew'))
