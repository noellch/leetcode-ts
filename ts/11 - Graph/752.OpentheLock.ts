/* 
https://leetcode.com/problems/open-the-lock/description/
*/

/* ------------------------------------------------------------------------------- */

function openLock(deadends: string[], target: string): number {
    const visited = new Set(deadends);
    let move = 0;
    const queue = ['0000'];

    while (queue.length) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const lock = queue.shift() as string;
            if (lock === target) return move;
            if (!visited.has(lock)) {
                visited.add(lock);
                for (let j = 0; j < 4; j++) {
                    let digit = (+lock[j] + 1) % 10;
                    queue.push(lock.substring(0, j) + digit + lock.substring(j + 1));
                    digit = (+lock[j] - 1 + 10) % 10;
                    queue.push(lock.substring(0, j) + digit + lock.substring(j + 1));
                }
            }
        }
        move++;
    }

    return -1;
}

/*
T.C.: O(10^4) := O(1)
S.C.: O(10^4) := O(1)
*/

/* ------------------------------------------------------------------------------- */

const deadends = ['0201', '0101', '0102', '1212', '2002'],
    target = '0202';

console.log(openLock(deadends, target));
