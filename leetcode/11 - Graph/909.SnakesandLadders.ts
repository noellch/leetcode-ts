/* 
https://leetcode.com/problems/snakes-and-ladders/description/
*/

/* ------------------------------------------------------------------------------- */

// function snakesAndLadders(board: number[][]): number {
//     board.reverse();

//     const queue: [number, number][] = [[1, 0]]; // [square, move]
//     const visited = new Set<number>();

//     function intToPos(square: number) {
//         const r = Math.floor((square - 1) / board.length);
//         let c = (square - 1) % board.length;

//         // 奇數行的 column 要反過來
//         if (r % 2 !== 0) {
//             c = board.length - c - 1;
//         }

//         return [r, c];
//     }

//     while (queue.length) {
//         const [square, move] = queue.shift() as [number, number];
//         for (let i = 1; i <= 6; i++) {
//             let next = square + i;
//             const [r, c] = intToPos(next);
//             if (board[r][c] !== -1) {
//                 next = board[r][c];
//             }
//             if (next === board.length ** 2) {
//                 return move + 1;
//             }
//             if (!visited.has(next)) {
//                 visited.add(next);
//                 queue.push([next, move + 1]);
//             }
//         }
//     }

//     return -1;
// }

/* ------------------------------------------------------------------------------- */

function snakesAndLadders(board: number[][]): number {
    const len = board.length;
    const target = len ** 2;

    const flattedBoard: number[] = [];

    for (let i = len - 1; i >= 0; i--) {
        if ((len - i) % 2 === 1) {
            flattedBoard.push(...board[i]);
        } else {
            flattedBoard.push(...board[i].reverse());
        }
    }

    const visited = new Set<number>([1]);
    const queue: number[] = [1];
    let move = 0;

    while (queue.length) {
        const size = queue.length;
        for (let j = 0; j < size; j++) {
            const square = queue.shift() as number;
            if (square === target) return move;

            for (let i = 1; i <= 6 && square + i <= target; i++) {
                let next = flattedBoard[square + i - 1] === -1 ? square + i : flattedBoard[square + i - 1];

                if (!visited.has(next)) {
                    visited.add(next);
                    queue.push(next);
                }
            }
        }
        move++;
    }

    return -1;
}

/* 
1

step1 -----

15
3
4
5
6
7

step2 -----

16
13
18
19
20
21
8
9
10
11
12

step3 -----

22
35
23
24
25
26
27

step4 -----

28
36
4
*/

/*
T.C.: O(N^2)
S.C.: O(N^2)
*/

/* ------------------------------------------------------------------------------- */

const board = [
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 35, -1, -1, 13, -1],
    [-1, -1, -1, -1, -1, -1],
    [-1, 15, -1, -1, -1, -1],
];

console.log(snakesAndLadders(board));
