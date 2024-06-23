/* 
https://leetcode.com/problems/simplify-path/
*/

/* ------------------------------------------------------------------------------- */

function simplifyPath(path: string): string {
    const stack: string[] = [];
    const part = path.split('/');

    for (let p of part) {
        if (!p || p === '.') continue;
        else if (p === '..') {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(p);
        }
    }

    return '/' + stack.join('/');
}

/* ------------------------------------------------------------------------------- */

// function simplifyPath(path: string): string {
//     const stack: string[] = [];
//     let current = '';

//     for (let c of path + '/') {
//         if (c === '/') {
//             if (current === '..') {
//                 if (stack.length > 0) stack.pop();
//             } else if (current !== '' && current !== '.') {
//                 stack.push(current);
//             }
//             current = '';
//         } else {
//             current += c;
//         }
//     }

//     return '/' + stack.join('/');
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// const path = '/home/';
// const path = '/../';
// const path = '/home//foo/';
const path = '/home//foo/../def';

console.log(simplifyPath(path));
