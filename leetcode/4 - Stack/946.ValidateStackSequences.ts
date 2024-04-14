/* 
https://leetcode.com/problems/validate-stack-sequences/description/
*/

/* ------------------------------------------------------------------------------- */

function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack: number[] = [];
    let i = 0;
    for (const p of pushed) {
        stack.push(p);

        while (i < popped.length && stack[stack.length - 1] === popped[i]) {
            stack.pop();
            i++;
        }
    }

    return !stack.length;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// const pushed = [1, 2, 3, 4, 5],
//     popped = [4, 5, 3, 2, 1];

const pushed = [1, 2, 3, 4, 5],
    popped = [4, 3, 5, 1, 2];

console.log(validateStackSequences(pushed, popped));
