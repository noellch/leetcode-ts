/** Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

A palindrome string is a string that reads the same backward as forward. */

function partition(s: string): string[][] {
    const result: string[][] = []
    const part: string[] = []

    function dfs(idx: number) {
        if (idx === s.length) return result.push([...part])

        for (let j = idx; j < s.length; j++) {
            if (isPali(idx, j)) {
                part.push(s.substring(idx, j + 1))
                dfs(j + 1)
                part.pop()
            }
        }
    }

    dfs(0)

    function isPali(l: number, r: number): boolean {
        while (l < r) {
            if (s[l] !== s[r]) return false
            l++
            r--
        }

        return true
    }

    return result
}

console.log(partition('ababaa'))
