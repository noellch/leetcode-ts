/* Q: Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input. */

// var merge = function (intervals) {
//     if (intervals.length === 1) return intervals

//     // 存放結果。用 map 避免 key 重複。
//     let result = new Map()

//     // 一定要先 sort，以 intervals 中元素的第一位為順序排列。避免 intervals[n + 1][0] < intervals[n][0] 的情況。
//     intervals.sort((a, b) => a[0] - b[0])

//     // 若需要 merge，會將 intervals[n + 1] 調整為 merge 後的 array。
//     for (let i = 0; i < intervals.length - 1; i++) {
//         // 若需要 merge 的情況
//         if (intervals[i][1] >= intervals[i + 1][0]) {
//             if (intervals[i][1] > intervals[i + 1][1]) {
//                 intervals[i + 1] = intervals[i]
//                 result.set(...intervals[i + 1])
//             } else {
//                 intervals[i + 1] = [intervals[i][0], intervals[i + 1][1]]
//                 result.set(...intervals[i + 1])
//             }
//         } else {
//             // 不需要 merge 的情況，直接將當下的元素跟下一個元素放進 map。
//             result.set(...intervals[i])
//             result.set(...intervals[i + 1])
//         }
//     }

//     // 將 map 轉成 array。
//     return [...result.entries()]
// }

var merge = function (intervals) {
    if (intervals.length === 1) return intervals

    let result = new Map()
    intervals.sort((a, b) => a[0] - b[0])

    // prev 會動態調整成需要跟下個元素比較的 array，以 intervals[0] 為初始。
    let prev = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        if (prev[1] >= intervals[i][0]) {
            prev = [prev[0], Math.max(prev[1], intervals[i][1])]
        } else {
            // 若遇到不需要 merge 的情況，將 prev 放進 map，並將 prev 改為當下的元素。
            // ex: [[ 1, 3 ], [ 2, 6 ], [ 8, 10 ], [ 15, 18 ]]
            // merge [ 1, 3 ], [ 2, 6 ]  => [[1, 6](prev), [2, 6], [8, 10], [ 15, 18 ]]
            // 判斷 [1, 6](prev), 跟 [8, 10](intervals[i])。
            // 不用 merge，將 [1, 6] 放進 map，prev 改為 [8, 10]
            // 判斷 [8, 10] 跟 [ 15, 18 ]...
            result.set(...prev)
            prev = intervals[i]
        }
    }

    // 最後調整為 prev 就跳出迴圈了，所以必須將最後的 prev 放進 map。
    result.set(...prev)

    return [...result.entries()]
}

const intervals = [
    [1, 4],
    [5, 7],
    [6, 8],
]

console.log(merge(intervals))

//* 先 sort 很重要！
//* 最初的解法是將以 intervals[i] 與 intervals[i + 1] 比較，並將 intervals[i + 1] 更新成 merge 後的 array。
//* 優化後的解法是將 intervals[i - 1] 與 intervals[i] 比較，並將 intervals[i - 1] 更新成merge 後的 array。
