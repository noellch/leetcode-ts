/* 
https://leetcode.com/problems/removing-stars-from-a-string/description/
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
