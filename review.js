function merge(intervals) {
    if (!intervals.length) return intervals
    intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]))
    var prev = intervals[0]
    var res = [prev]
    for (var curr of intervals) {
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1])
        } else {
            res.push(curr)
            prev = curr
        }
    }
    return res
}

const intervals = [
    [2, 3],
    [2, 2],
    [3, 3],
    [1, 3],
    [5, 7],
    [2, 2],
    [4, 6],
]

console.log(merge(intervals))
