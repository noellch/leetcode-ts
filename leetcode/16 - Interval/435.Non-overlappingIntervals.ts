/* 
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
*/

/* ------------------------------------------------------------------------------- */

function eraseOverlapIntervals(intervals: number[][]): number {
    let result = 0;

    intervals.sort((a, b) => a[0] - b[0]);

    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (prevEnd <= start) {
            prevEnd = end;
        } else {
            result++;
            prevEnd = Math.min(prevEnd, end);
        }
    }

    return result;
}

/*
T.C.: O(N * log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const intervals = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
];

// const intervals = [
//     [1, 2],
//     [1, 2],
//     [1, 2],
// ];

// const intervals = [
//     [1, 2],
//     [2, 3],
// ];

console.log(eraseOverlapIntervals(intervals));
