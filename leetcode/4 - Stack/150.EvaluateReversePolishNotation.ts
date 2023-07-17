/* 
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
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
// const tokens = ["4","13","5","/","+"]
// const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

console.log(evalRPN(tokens));
