/* 
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Trie() Initializes the trie object.
void insert(String word) Inserts the string word into the trie.
boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.
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
