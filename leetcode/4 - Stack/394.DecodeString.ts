/* 
https://leetcode.com/problems/decode-string/description/
*/

/* ------------------------------------------------------------------------------- */

function decodeString(s: string): string {
    const stack: string[] = [];

    for (let c of s) {
        if (c !== ']') {
            stack.push(c);
        } else {
            let subStr = '';
            while (stack[stack.length - 1] !== '[') {
                let str = stack.pop() as string;
                subStr = str + subStr;
            }

            stack.pop();

            let k = '';
            while (
                stack.length > 0 &&
                stack[stack.length - 1].charCodeAt(0) >= 48 &&
                stack[stack.length - 1].charCodeAt(0) <= 57
            ) {
                let int = stack.pop() as string;
                k = int + k;
            }
            stack.push(subStr.repeat(+k));
        }
    }

    return stack.join('');
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// const s = '3[a]2[bc]';
// const s = '3[a2[c]]';
const s = '2[abc]3[cd]ef';

console.log(decodeString(s));
