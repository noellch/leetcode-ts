/* 
https://leetcode.com/problems/push-dominoes/
*/

/* ------------------------------------------------------------------------------- */

// function pushDominoes(dominoes: string): string {
//     let result = dominoes.split('');
//     const queue: [number, string][] = [];

//     for (let i = 0; i < result.length; i++) {
//         if (result[i] !== '.') queue.push([i, result[i]]);
//     }

//     while (queue.length > 0) {
//         const [i, s] = queue.shift() as [number, string];

//         if (s === 'L' && i > 0 && result[i - 1] === '.') {
//             queue.push([i - 1, 'L']);
//             result[i - 1] = 'L';
//         } else if (s === 'R' && i + 1 < result.length && result[i + 1] === '.') {
//             if (i + 2 < result.length && result[i + 2] === 'L') {
//                 queue.shift();
//             } else {
//                 queue.push([i + 1, 'R']);
//                 result[i + 1] = 'R';
//             }
//         }
//     }

//     return result.join('');
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

function pushDominoes(dominoes: string): string {
    let result = dominoes.split('');

    while (true) {
        const temp = [...result];
        let changed = false;

        for (let i = 0; i < result.length; i++) {
            if (result[i + 1] === 'L' && result[i - 1] === 'R' && result[i] === '.') {
                continue;
            } else if (result[i + 1] === 'L' && result[i] === '.') {
                temp[i] = 'L';
                changed = true;
            } else if (result[i - 1] === 'R' && result[i] === '.') {
                temp[i] = 'R';
                changed = true;
            }
        }

        if (!changed) break;
        result = temp;
    }

    return result.join('');
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */
const dominoes = '.L.R....R..L..';
console.log(pushDominoes(dominoes));
