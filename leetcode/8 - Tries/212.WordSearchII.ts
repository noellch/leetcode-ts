/* 
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
*/

/* ------------------------------------------------------------------------------- */
class Trie {
    children: { [key: string]: Trie };
    word: string;
    constructor() {
        this.children = {};
        this.word = '';
    }
}

function findWords(board: string[][], words: string[]): string[] {
    const result: string[] = [];

    /*
    T.C.: O(W * words.length)
    S.C.: O(W * words.length)
    */
    function buildTrie() {
        const trie = new Trie();
        for (const word of words) {
            let node = trie;
            for (const w of word) {
                if (!node.children[w]) {
                    node.children[w] = new Trie();
                }
                node = node.children[w];
            }
            node.word = word;
        }

        return trie;
    }

    /*
    T.C.: O(ROW * COL * 4 * 3^(word.length - 1)))
    word.length 是 words 中最長 word 的長度。
    檢查所有在 board 中的字母，共 ROW * COL 次。除了第一個字母之外，接下來的字母只需要檢查三個方向，所以是 4 * 3^(word.length - 1) 次。
    共 ROW * COL * 4 * 3^(word.length - 1)
    S.C.: O(N)
    */
    function search(node: Trie, row: number, col: number) {
        if (node.word) {
            result.push(node.word);
            node.word = '';
        }

        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return;

        const l = board[row][col];
        if (!node.children[l]) return;

        board[row][col] = '*';

        search(node.children[l], row - 1, col);
        search(node.children[l], row, col + 1);
        search(node.children[l], row + 1, col);
        search(node.children[l], row, col - 1);

        board[row][col] = l;
    }

    const trie = buildTrie();

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length; col++) {
            search(trie, row, col);
        }
    }

    return result;
}

/* ------------------------------------------------------------------------------- */

const board = [
        ['o', 'a', 'a', 'n'],
        ['e', 't', 'a', 'e'],
        ['i', 'h', 'k', 'r'],
        ['i', 'f', 'l', 'v'],
    ],
    words = ['oath', 'pea', 'eat', 'rain'];

console.log(findWords(board, words));
