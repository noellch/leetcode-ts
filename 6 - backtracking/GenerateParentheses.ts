/** Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 */

function generateParenthesis(n: number): string[] {
    const result: Array<string> = []

    function helper(l: number, r: number, s: string) {
        if (!l && !r) return result.push(s)

        if (l) {
            console.log(1, s, l, r)
            helper(l - 1, r, s + '(')
        }

        if (r > l) {
            console.log(2, s, l, r)
            helper(l, r - 1, s + ')')
        }
    }

    helper(n, n, '')
    return result
}

console.log(generateParenthesis(2))
