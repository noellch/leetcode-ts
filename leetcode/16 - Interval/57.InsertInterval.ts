/* 
https://leetcode.com/problems/insert-interval/
*/

/* ------------------------------------------------------------------------------- */

function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
        } else if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval);
            result.push(...intervals.slice(i));
            return result;
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        }
    }

    result.push(newInterval);
    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const intervals = [
        [1, 3],
        [6, 9],
    ],
    newInterval = [2, 5];
// const intervals = [
//         [1, 2],
//         [3, 5],
//         [6, 7],
//         [8, 10],
//         [12, 16],
//     ],
//     newInterval = [4, 8];

console.log(insert(intervals, newInterval));
