/* 
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.
*/

/* 
Reverse Polish Notation。逆波蘭表示法又稱後綴表達式。
將運算子寫在運算元後面。如 a + b 寫作  ab+。優點是不需要再使用括號來描述運算式的先後順序。
*/

function evalRPN(tokens: string[]): number {
    const stack: number[] = [];
    const hashMap = new Map([
        ['+', (a: number, b: number) => a + b],
        ['-', (a: number, b: number) => a - b],
        ['*', (a: number, b: number) => a * b],
        ['/', (a: number, b: number) => Math.trunc(a / b)],
    ]);

    for (const token of tokens) {
        if (!hashMap.has(token)) stack.push(+token);
        else {
            const r = stack.pop();
            const l = stack.pop();
            const operation = hashMap.get(token) as (a: number, b: number) => number;
            const result = operation(l as number, r as number);
            stack.push(result);
        }
    }

    return stack[0];
}

const tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'];
console.log(evalRPN(tokens));

/* 
遇到數字就放進 stack。
遇到 operator 就把 stack 中的數字 pop 出來用這個 operator 計算。結果再放回 stack 中。
特別注意，因為是 stack，所以放進去的先後順序跟拿出來是相反的。
譬如 [3, 9, '+'] 放進 stack 後是 [3, 9] 然後遇到 ‘+’ 去把 stack 的數字 pop 出來。
順序會變成是 9 + 3。所以要記得先 pop 出來的要放在 operator 的右邊，後 pop 出來的放在左邊。
這樣才會是 3 + 9
*/

/*
T.C.: O(n)
S.C.: O(n)
*/
