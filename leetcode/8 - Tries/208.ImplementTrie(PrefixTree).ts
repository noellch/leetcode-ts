/* 
https://leetcode.com/problems/implement-trie-prefix-tree/description/
*/

/* ------------------------------------------------------------------------------- */
class TrieNode {
    children: { [c: string]: TrieNode };
    endOfWord: boolean;

    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    /*
    T.C.: O(N)
    S.C.: O(N)
    */
    insert(word: string): void {
        let node = this.root;
        for (const c of word) {
            if (!(c in node.children)) {
                node.children[c] = new TrieNode();
            }
            node = node.children[c];
        }
        node.endOfWord = true;
    }

    /*
    T.C.: O(N)
    S.C.: O(1)
    */
    search(word: string): boolean {
        let node = this.root;
        for (const c of word) {
            if (!(c in node.children)) {
                return false;
            }
            node = node.children[c];
        }
        return node.endOfWord;
    }

    /*
    T.C.: O(N)
    S.C.: O(1)
    */
    startsWith(prefix: string): boolean {
        let node = this.root;
        for (const c of prefix) {
            if (!(c in node.children)) {
                return false;
            }
            node = node.children[c];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/* ------------------------------------------------------------------------------- */
