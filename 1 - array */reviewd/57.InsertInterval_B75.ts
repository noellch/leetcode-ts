/* You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion. */

function insert_1(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = []

    for (let i = 0; i < intervals.length; i++) {
        // newInterval 可完整插入 intervals[i] 前方。
        // 所以把剩下的 intervals 整段放進 result 就是結果。
        if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval)
            result.push(...intervals.slice(i))
            return result
            // newInterval 比當下 intervals[i] 還大。
            // 所以把 intervals[i] 放進 result
        } else if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i])
            // newInterval 跟 intervals[i] overlapping，要 merge 成新的 newInterval。
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
        }
    }

    // 這邊是第一個判斷式若都沒跑到，等於 newInterval 是在 result 最後端。
    result.push(newInterval)
    return result
}

console.log(
    insert_1(
        [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
        ],
        [4, 8]
    )
)

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */

function insert_2(intervals: number[][], newInterval: number[]): number[][] {
    // 將 newInterval 放入後依照 [0] 的大小 ascending 排列。
    intervals.push(newInterval)
    intervals.sort((a, b) => a[0] - b[0])

    // intervals 為 [] 空陣列的狀況。
    if (intervals.length === 1) return intervals

    const map: Map<number, number> = new Map()

    // 先將 prev = intervals[0]
    let prev = intervals[0]
    // 想法是以 prev 的 [1] 為指標和 intervals[i] 的 [0] 進行逐一比較。
    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i]

        if (prev[1] >= current[0]) {
            // 若 prev[1] 大於等於 intervals[i][0]，則 prev[1] 更新為 prev[1]、intervals[i][1] 中的較大值。
            // 繼續以 prev[1] 為指標進行比對。
            prev[1] = Math.max(prev[1], current[1])
        } else {
            // 若 prev[1] 較小，因為 intervals 已經 sort 過，所以接下來不會再出現 intervals[i][0] 更小的值。
            // 也就是說 prev 的範圍已確定，所以 set 進 map 中。
            map.set(prev[0], prev[1])
            // 將 prev 更新為當下的 intervals[i]，以新的 intervals[i][1] 為指標。
            prev = current
        }

        // 每一輪結束都將 prev 放進 map 中。因為 map 的 key 是唯一，所以會不斷將相同 key 的值做更新。
        map.set(prev[0], prev[1])
    }

    // 最後 map 中所有 key => value 所代表的範圍都是確定過且唯一的，轉成 array 後返回。
    return [...map.entries()]
}

console.log(
    insert_2(
        [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
        ],
        [4, 8]
    )
)
