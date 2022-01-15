/* Q: Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 */

var isValid = function (s) {
    // s 長度不為偶數根本不用開始配對，因為一定是 false。
    if (s.length % 2 !== 0) return false

    // 定義一個 map 方便做為對照
    const map = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ])

    // 利用 stack 先進後出的特性
    let stack = []

    for (let i = 0; i < s.length; i++) {
        let c = s[i]

        if (c === '(' || c === '[' || c === '{') {
            // 只要遇到開始的括號就 push 進 stack。
            stack.push(c)
        } else {
            // 若遇到閉合括號，先看是不是跟 stack 最近一次放進去的開始括號一組。
            let startParent = stack.pop()
            // 若不是直接返回 false。
            if (map.get(startParent) !== c) return false
            // 若是的話進行下一輪 loop
        }
    }

    // 最後看 stack 內的開始括號有沒有都配對出去。
    // 若殘留長度表示有開始括號沒跟結束括號配對到， return false。反之，return true。
    return !stack.length
}

const input = '(])]'
console.log(isValid(input))
