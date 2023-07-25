/* 
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

WordDictionary() Initializes the object.
void addWord(word) Adds word to the data structure, it can be matched later.
bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
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
