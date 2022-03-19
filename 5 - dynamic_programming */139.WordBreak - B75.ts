/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/**
 * Input: s = "leetcode", wordDict = ["leet","code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 */

//? 判斷是否能將 s string 拆解成 wordDict 內的詞。

var wordBreak = function (s: string, wordDict: string[]): boolean {
    const dp: Map<string, boolean> = new Map()

    function check(s: string): boolean {
        // 最後 string 不存在等於判斷完所有 s 拆解的可能性，在那之前都沒有返回 false，所以返回 true。
        if (!s.length || !s) return true
        if (dp.has(s)) return dp.get(s) as boolean

        // wordDict 內有多少個 word。
        let dictLen = wordDict.length

        for (let i = 0; i < dictLen; i++) {
            const word = wordDict[i]
            const subStr = s.slice(0, word.length)
            // 若當次的 string 的 word 長度的 substring 等於 word。
            if (subStr === word) {
                dp.set(s, true)
                // 判斷扣掉等於 word 以外的 substring。
                if (check(s.slice(word.length))) return true
            }
        }

        // 當次沒有符合 word 的 substring。返回 false。
        dp.set(s, false)
        return false
    }

    return check(s)
}

const s = 'cars',
    wordDict = ['car', 'ca', 'rs']

/**
 *
 * 'cats' === 'cats'=> check('andog', cache)
 * 'ando' !== 'cats'
 * 'and' !== 'dog'
 * 'ando' !== 'sand'
 * 'and' === 'and' => check('og', cache)
 * check('og', cache) return false => check('andog', cache) return false
 * 'cat' !== 'dog'
 * 'cats' !== 'sand'
 * 'cat' !== 'and'
 * 'cat' !== 'cat' => check('sandog', cache)
 * check('sandog', cache) return false
 *
 */

var wordBreak = function (s: any, wordDict: any) {
    const table = new Array(s.length + 1).fill(false)
    // 每一個 true 代表著它所在的 index 之前的 substring 是否存在 wordDict 中。
    table[0] = true

    // i = 0 ~ 12
    for (let i = 0; i < table.length; i++) {
        // table[i] = true 表示它所在的 index 之前的 substring 存在 wordDict 中。
        // 所以判斷它到它之後的每個 substring。
        // ['go', 'goal', 'goals', 'special']
        // 'g o a l s p e c i a l'
        //  t f t f t t f f f f f f
        //      i j
        // 已知 go 存在於 wordDict，只需判斷 a 開始到 l 的每個 substring 組成。
        if (!table[i]) continue
        
        // 遍歷每一次 i ~ j 的 substring 組成。
        for (let j = i + 1; j < table.length; j++) {
            // 若存在 wordDict 將標示 j 所在的 index 值改為 true，代表 這個 i ~ j 的 string 存在於 wordDict。
            if (wordDict.includes(s.slice(i, j))) {
                table[j] = true
            }
        }
    }

    // 'g o a l s p e c i a l'
    //  t f t f t t f f f f f t
    //          i             j
    // 返回 table 最後一項；若為 true，表示 s 字串分解的每個可能性都被檢視過，可被拆解成 wordDict 內的值。
    return table[table.length - 1]
}

console.log(wordBreak(s, wordDict))
