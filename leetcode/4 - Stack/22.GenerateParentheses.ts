/* 
https://leetcode.com/problems/generate-parentheses/description/
*/

// function generateParenthesis(n: number): string[] {
//     const result: Array<string> = [];

//     function helper(l: number, r: number, s: string) {
//         if (!l && !r) return result.push(s);

//         if (l) {
//             helper(l - 1, r, s + '(');
//         }

//         if (r > l) {
//             helper(l, r - 1, s + ')');
//         }
//     }

//     helper(n, n, '');
//     return result;
// }

/* ------------------------------------------------------------------------------- */

function generateParenthesis(n: number): string[] {
    const result = [] as string[];
    const stack = [] as string[];

    const backtracking = (open: number, closed: number) => {
        if (open === n && closed === n) {
            return result.push(stack.join(''));
        }

        if (open < n) {
            stack.push('(');
            backtracking(open + 1, closed);
            stack.pop();
        }

        if (closed < open) {
            stack.push(')');
            backtracking(open, closed + 1);
            stack.pop();
        }
    };

    backtracking(0, 0);

    return result;
}

/* 
only add open parenthesis if open < n
only add a closing parenthesis if closed < open
valid IIF open === closed === n
*/

/*
T.C.: O(4^N)
- Cause the length of each string will be 2*N, and in every index of string we try both parenthesis, which lead to O(2^(2*N)) time complexity. 

S.C.: O(4^N)
*/

/* ------------------------------------------------------------------------------- */

const n = 3;
// const n = 1

console.log(generateParenthesis(n));
