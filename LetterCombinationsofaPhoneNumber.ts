/** Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters. */

function letterCombinations(digits: string): string[] {
    if (!digits.length) return []

    type O = { [key: string]: string }
    const L: O = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' }
    const result: string[] = []

    function helper(idx = 0, s: string): void {
        console.log(idx)
        if (digits.length === idx) {
            result.push(s)
            return
        }

        for (const c of L[digits[idx]]) {
            helper(idx + 1, s + c)
        }
    }

    helper(0, '')
    return result
}

console.log(letterCombinations('23'))
