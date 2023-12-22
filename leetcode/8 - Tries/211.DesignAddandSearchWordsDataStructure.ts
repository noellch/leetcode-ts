/* 
https://leetcode.com/problems/design-add-and-search-words-data-structure/description/
*/

/* ------------------------------------------------------------------------------- */

class TrieNode {
    children: { [c: string]: TrieNode };
    word: boolean;

    constructor() {
        this.children = {};
        this.word = false;
    }
}

class WordDictionary {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node = this.root;
        for (const c of word) {
            if (!(c in node.children)) {
                node.children[c] = new TrieNode();
            }
            node = node.children[c];
        }
        node.word = true;
    }

    search(word: string): boolean {
        function dfs(j: number, root: TrieNode) {
            let node = root;

            for (let i = j; i < word.length; i++) {
                if (word[i] === '.') {
                    for (const child of Object.values(node.children)) {
                        if (dfs(i + 1, child)) return true;
                    }
                    return false;
                } else {
                    if (!(word[i] in node.children)) return false;
                    node = node.children[word[i]];
                }
            }

            return node.word;
        }

        return dfs(0, this.root);
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

/* ------------------------------------------------------------------------------- */
