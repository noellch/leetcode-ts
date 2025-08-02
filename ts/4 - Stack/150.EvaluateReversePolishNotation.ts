/* 
https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
*/

/* ------------------------------------------------------------------------------- */

function evalRPN(tokens: string[]): number {
    const map = new Map([
        ['+', (a: number, b: number) => a + b],
        ['-', (a: number, b: number) => a - b],
        ['*', (a: number, b: number) => a * b],
        ['/', (a: number, b: number) => Math.trunc(a / b)],
    ]);

    const stack = [] as number[];

    for (const token of tokens) {
        if (!map.has(token)) stack.push(+token);
        else {
            const b = stack.pop();
            const a = stack.pop();
            const expression = map.get(token) as (a: number, b: number) => number;
            const result = expression(a as number, b as number);
            stack.push(result);
        }
    }

    return stack[0];
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// const tokens = ['2', '1', '+', '3', '*'];
const tokens = ['4', '13', '5', '/', '+'];
// const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

console.log(evalRPN(tokens));
