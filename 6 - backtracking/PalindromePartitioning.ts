/** Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward. */

function partition(s: string): string[][] {
    const result: string[][] = []
    const part: string[] = []

    // i 表示目前指到第幾個字母
    function dfs(i: number): void {
        // base case，i pointer 大於 s 的長度
        if (i >= s.length) {
            result.push(Array.from(part))
        }

        for (let j = i; j < s.length; j++) {
            if (isPali(s, i, j)) {
                part.push(s.substring(i, j + 1))
                dfs(j + 1)
                part.pop()
            }
        }
    }

    function isPali(s: string, l: number, r: number): boolean {
        while (l < r) {
            if (s[l] !== s[r]) return false
            r--
            l++
        }

        return true
    }

    dfs(0)
    return result
}

console.log(partition('ababaa'))
