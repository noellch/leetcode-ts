/* 
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.
*/

/* ------------------------------------------------------------------------------- */

function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = [];

    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[0] > intervals[i][1]) {
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
