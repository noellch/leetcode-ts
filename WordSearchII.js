/**
 *
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
 * The same letter cell may not be used more than once in a word.
 *
 */

var findWords = function (board, words) {
    const result = []

    // 講 words 轉成
    /**{
    o: { a: { t: { h: { oath: 'oath' } } } },
    p: { e: { a: { pea: 'pea' } } },
    e: { a: { t: { eat: 'eat' } } },
    r: { a: { i: { n: { rain: 'rain' } } } },
} */
    function buildTrie() {
        const root = {}
        for (let word of words) {
            let node = root
            for (let letter of word) {
                if (!node[letter]) node[letter] = {}
                node = node[letter]
            }
            node['word'] = word
        }

        return root
    }

    // 做 dfs
    function search(node, row, col) {
        if (node.word) {
            result.push(node.word)
            node.word = null
        }

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return

        const l = board[row][col]

        if (!node[l]) return

        board[row][col] = '*'

        search(node[l], row + 1, col)
        search(node[l], row - 1, col)
        search(node[l], row, col + 1)
        search(node[l], row, col - 1)

        board[row][col] = l
    }

    const root = buildTrie()
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            search(root, row, col)
        }
    }

    return result
}

const board = [
        ['o', 'a', 'a', 'n'],
        ['e', 't', 'a', 'e'],
        ['i', 'h', 'k', 'r'],
        ['i', 'f', 'l', 'v'],
    ],
    words = ['oath', 'pea', 'eat', 'rain']

console.log(findWords(board, words))

/**
 * 這題的關鍵在於有沒有想到將 words 轉成像 {
    o: { a: { t: { h: { oath: 'oath' } } } },
    p: { e: { a: { pea: 'pea' } } },
    e: { a: { t: { eat: 'eat' } } },
    r: { a: { i: { n: { rain: 'rain' } } } },
}
 * 這種類似 trie 的格式。 
 * 
 */
