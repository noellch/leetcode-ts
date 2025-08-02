/* 
https://leetcode.com/problems/merge-intervals/
*/

/* ------------------------------------------------------------------------------- */

function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);

    let prev = intervals[0];
    const result: number[][] = [prev];

    for (let i = 1; i < intervals.length; i++) {
        if (prev[1] >= intervals[i][0]) {
            prev[1] = Math.max(prev[1], intervals[i][1]);
        } else {
            result.push(intervals[i]);
            prev = intervals[i];
        }
    }

    return result;
}

/*
T.C.: O(N * log(N))
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
];

// const intervals = [
//     [1, 4],
//     [4, 5],
// ];

console.log(merge(intervals));
