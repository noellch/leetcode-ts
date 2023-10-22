/* 
You are given a string s, which contains stars *.

In one operation, you can:

Choose a star in s.
Remove the closest non-star character to its left, as well as remove the star itself.
Return the string after all stars have been removed.

Note:

The input will be generated such that the operation is always possible.
It can be shown that the resulting string will always be unique.
*/

/* ------------------------------------------------------------------------------- */

function removeStars(s: string): string {
    const stack: string[] = [];

    for (const c of s) {
        if (c === '*') {
            stack.pop();
            continue;
        }

        stack.push(c);
    }

    return stack.join('');
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const s = 'leet**cod*e';
console.log(removeStars(s));
