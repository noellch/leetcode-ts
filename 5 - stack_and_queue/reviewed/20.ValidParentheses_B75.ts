/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order. */

function isValid(s: string): boolean {
    if (s.length % 2) return false;

    const table = new Map([
        [')', '('],
        ['}', '{'],
        [']', '['],
    ]);

    const stack: string[] = [];

    for (const b of s) {
        if (table.has(b)) {
            const c = stack.pop();

            if (!c || table.get(b) !== c) return false;
        } else {
            stack.push(b);
        }
    }

    return stack.length === 0;
}

console.log(isValid('(){}{}'));
console.log(isValid('()}{()'));

/**
 * s 長度不為偶數根本不用開始配對，因為一定是 false。
 * 定義一個 hash table 方便做為對照。
 * 利用 stack 先進後出的特性。
 */

/**
 * T.C.: O(n)
 * S.C.: O(n/2)
 */
