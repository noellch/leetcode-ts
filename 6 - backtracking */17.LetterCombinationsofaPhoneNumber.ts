/** Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters. */

function letterCombinations(digits: string): string[] {
    if (!digits.length) return []

    type O = { [key: string]: string }
    const L: O = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }
    const result: string[] = []

    function backtracking(idx: number, str: string) {
        if (idx === digits.length) return result.push(str)

        // 把 digits[idx] 對應到的數字個別拿出來
        for (const d of L[digits[idx]]) {
            backtracking(idx + 1, str + d)
        }
    }

    backtracking(0, '')

    return result
}

console.log(letterCombinations('23'))
