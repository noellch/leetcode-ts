/** Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 */

function generateParenthesis_1(n: number): string[] {
    const result: Array<string> = [];

    function helper(l: number, r: number, s: string) {
        if (!l && !r) return result.push(s);

        if (l) {
            helper(l - 1, r, s + '(');
        }

        if (r > l) {
            helper(l, r - 1, s + ')');
        }
    }

    helper(n, n, '');
    return result;
}

console.log(generateParenthesis_1(3));

function generateParenthesis_2(n: number): string[] {
    const result: Array<string> = [];
    const cur: string[] = [];

    function backtracking(open: number, close: number) {
        // 在 open 跟 close 的 n 個 () 都用完時，將結果 push 進 result
        if (open === n && close === n) return result.push(cur.join(''));

        //open 表示當前使用了多少個 '(',close 表示當前使用了多少個 ')'
        // 先使用 ’('，在 open 低於 n 之前都可以一直放入 '('
        if (open < n) {
            cur.push('(');
            // 使用了一個 open
            backtracking(open + 1, close);
            // 拿掉最後一個 ')'
            cur.pop();
        }

        // 而 ')' 是只有在 close 小於 open (close 使用數不及 open) 時，才能使用
        if (close < open) {
            cur.push(')');
            backtracking(open, close + 1);
            cur.pop();
        }
    }

    backtracking(0, 0);
    return result;
}

console.log(generateParenthesis_2(3));
