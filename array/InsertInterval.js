/* Q: You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

 */

var insert = function (intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0])

    if (intervals.length === 1) return intervals

    let map = new Map()

    let prev = intervals[0]
    let current

    for (let i = 1; i < intervals.length; i++) {
        current = intervals[i]

        if (prev[1] >= current[0]) {
            prev = [prev[0], Math.max(prev[1], current[1])]
        } else {
            map.set(...prev)
            prev = current
        }

        map.set(...prev)
    }

    return [...map.entries()]
}

console.log(insert([], [2, 5]))
