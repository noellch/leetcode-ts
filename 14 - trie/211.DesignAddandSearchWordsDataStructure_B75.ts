/**
 * Design a data structure that supports adding new words and finding if a string matches any previously added string.
 * Implement the WordDictionary class:
 * WordDictionary() Initializes the object.
 * void addWord(word) Adds word to the data structure, it can be matched later.
 * bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where
 * dots can be matched with any letter.
 */

class WordDictionary {
    root: { [key: string]: WordDictionary }
    isEnd: boolean

    constructor() {
        this.root = {}
        this.isEnd = false
    }

    addWord(word: string): void {
        let node: WordDictionary = this

        for (let letter of word) {
            if (!node.root[letter]) node.root[letter] = new WordDictionary()
            node = node.root[letter]
        }

        node.isEnd = true
    }

    search(word: string): boolean {
        function dfs(node: WordDictionary, idx: number): boolean {
            // index 剛好等於 word 的長度，確認這層的 node 是不是 isEnd === true
            if (idx === word.length) return node.isEnd === true

            // 如果遇到 .，這層的所有元素都要往下確認。
            if (word[idx] === '.') {
                for (let key in node.root) {
                    // 往下檢查這層的每個元素是不是等於 word 下一個 index 的字母。
                    if (dfs(node.root[key], idx + 1)) return true
                }
            } else {
                // 如果當下 word 的第 index 的字母不等於 .，檢查這層有沒有這個字母。若沒有返回 false。
                if (!node.root[word[idx]]) return false
                // 反之，index 加一繼續往下檢查，直到 index === word.length，在檢查 isEnd 是否等於 true。
                else if (dfs(node.root[word[idx]], idx + 1)) return true
            }
            return false
        }

        return dfs(this, 0)
    }
}

const w = new WordDictionary()
w.addWord('hello')
console.log(JSON.stringify(w))
