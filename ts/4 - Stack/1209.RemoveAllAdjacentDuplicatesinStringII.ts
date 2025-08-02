/* 
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/
*/

/* ------------------------------------------------------------------------------- */

function removeDuplicates(s: string, k: number): string {
    const stack: [string, number][] = []; // [character, count]
    let result = '';

    for (let c of s) {
        if (stack.length > 0 && stack[stack.length - 1][0] === c) {
            stack[stack.length - 1][1] += 1;
            if (stack[stack.length - 1][1] === k) stack.pop();
        } else {
            stack.push([c, 1]);
        }
    }

    for (const [c, n] of stack) {
        result += c.repeat(n);
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// const s = 'abcd',
//     k = 2;
const s = 'deeedbbcccbdaa',
    k = 3;
// const s = 'baaaabbb',
//     k = 3;
// const s = 'pbbcggttciiippooaais',
//     k = 2;

console.log(removeDuplicates(s, k));
