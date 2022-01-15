class Trie {
    root: {}

    constructor() {
        this.root = {}
    }

    insert(word: string): void {
        let node = this.root

        for (let letter of word) {
            if (!node[letter]) node[letter] = {}
            node = node[letter]
        }

        node['isEnd'] = true
    }

    search(word: string): boolean {
        let node = this.root

        for (let letter of word) {
            if (node[letter]) {
                node = node[letter]
            } else return false
        }

        return node && node['isEnd'] === true
    }

    startsWith(prefix: string): boolean {
        let node = this.root

        for (let letter of prefix) {
            if (node[letter]) {
                node = node[letter]
            } else return false
        }

        return true
    }
}
