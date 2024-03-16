/* 
https://leetcode.com/problems/grid-game/description/
*/

/* ------------------------------------------------------------------------------- */

// prefix sum
function gridGame(grid: number[][]): number {
    const N = grid[0].length;
    const row1PrefixSum: number[] = [...grid[0]];
    const row2PrefixSum: number[] = [...grid[1]];
    let result = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < N; i++) {
        row1PrefixSum[i] += row1PrefixSum[i - 1];
        row2PrefixSum[i] += row2PrefixSum[i - 1];
    }

    for (let j = 0; j < N; j++) {
        const top = row1PrefixSum[N - 1] - row1PrefixSum[j];
        const bottom = j - 1 >= 0 ? row2PrefixSum[j - 1] : 0;
        const robot2CanCollect = Math.max(top, bottom);
        result = Math.min(result, robot2CanCollect);
    }

    return result;
}

/*
T.C.: O(M) 
M 等於 column 的長度

S.C.: O(M * N)
*/

/* ------------------------------------------------------------------------------- */

const grid = [
    [2, 5, 4],
    [1, 5, 1],
];
// const grid = [
//     [3, 3, 1],
//     [8, 5, 2],
// ];
// const grid = [
//     [1, 3, 1, 15],
//     [1, 3, 3, 1],
// ];

console.log(gridGame(grid));
