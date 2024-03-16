/* 
https://leetcode.com/problems/remove-covered-intervals/description/
*/

/* ------------------------------------------------------------------------------- */

function removeCoveredIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]));

    const result: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const [prevL, prevR] = result[result.length - 1];
        const [l, r] = intervals[i];

        if (l >= prevL && r <= prevR) continue;
        result.push(intervals[i]);
    }

    return result.length;
}

/*
T.C.: O(Nlog(N))
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// function removeCoveredIntervals(intervals: number[][]): number {
//     intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]));

//     let count = 0,
//         currentEnd = -1;

//     for (const [start, end] of intervals) {
//         if (end > currentEnd) {
//             count++;
//             currentEnd = end;
//         }
//     }

//     return count;
// }

/*
T.C.: O(Nlog(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
const intervals = [
    [1, 4],
    [3, 6],
    [2, 8],
];
console.log(removeCoveredIntervals(intervals));
