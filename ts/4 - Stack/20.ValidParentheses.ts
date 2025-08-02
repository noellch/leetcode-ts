/* 
https://leetcode.com/problems/valid-parentheses/description/
*/

/* ------------------------------------------------------------------------------- */

function isValid(s: string): boolean {
    const table = {
        ')': '(',
        ']': '[',
        '}': '{',
    };
    const stack = [] as string[];

    for (const c of s) {
        if (c in table) {
            const open = stack.pop();
            if (!open || table[c as keyof typeof table] !== open) return false;
        } else stack.push(c);
    }

    return stack.length === 0;
}

/* ------------------------------------------------------------------------------- */

// const s = '()';
const s = '()[]{}';
// const s = '(]';

console.log(isValid(s));
