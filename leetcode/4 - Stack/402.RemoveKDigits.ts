/* 
https://leetcode.com/problems/remove-k-digits/description/
*/

/* ------------------------------------------------------------------------------- */

// monotonic increasing stack
function removeKdigits(num: string, k: number): string {
    if (num.length <= k) return '0';

    let stack: string[] = [];

    for (const n of num) {
        while (k > 0 && stack.length > 0 && +n < +stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(n);
    }
    if (k > 0) stack = stack.slice(0, stack.length - k);

    while (stack[0] === '0' && stack.length > 1) {
        stack.shift();
    }

    return stack.join('');
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// const num = '1432219',
//     k = 4;
// const num = '10200',
//     k = 1;
// const num = '10',
//     k = 2;
// const num = '112',
//     k = 1;
const num = '10',
    k = 1;

console.log(removeKdigits(num, k));
