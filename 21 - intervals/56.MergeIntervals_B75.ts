/* Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input. */

function merge(intervals: number[][]): number[][] {
    // 必須先以 interval 的第一個元素做 ascending 排序
    // intervals 的題目都可以先考慮到排序
    intervals.sort((a, b) => a[0] - b[0]);

    let prev = intervals[0];
    // prev 經比較後會動態調整，以 intervals[0] 為初始。
    const result: number[][] = [prev];

    for (let i = 1; i < intervals.length; i++) {
        if (prev[1] >= intervals[i][0]) {
            prev[1] = Math.max(prev[1], intervals[i][1]);
        } else {
            prev = intervals[i];
            result.push(prev);
        }
    }

    return result;
}

const intervals = [
    [2, 3],
    [2, 2],
    [3, 3],
    [1, 3],
    [5, 7],
    [2, 2],
    [4, 6],
];

console.log(merge(intervals));

/**
 * T.C.: O(nlogn) + O(n)
 * S.C.: O(n)
 */
