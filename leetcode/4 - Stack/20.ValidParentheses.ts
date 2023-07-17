/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
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
