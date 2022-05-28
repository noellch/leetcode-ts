/* Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

|a - x| < |b - x|, or
|a - x| == |b - x| and a < b */

function findClosestElements(arr: number[], k: number, x: number): number[] {
    let l = 0,
        r = arr.length - 1

    let val = arr[0],
        idx = 0

    while (l <= r) {
        let m = ~~((l + r) / 2)
        let curDiff = Math.abs(arr[m] - x)
        let resDiff = Math.abs(val - x)

        if (curDiff < resDiff || (curDiff === resDiff && arr[m] < val)) {
            val = arr[m]
            idx = m
        }

        if (arr[m] < x) l = m + 1
        else if (arr[m] > x) r = m - 1
        else break
    }

    l = r = idx

    for (let i = 0; i < k - 1; i++) {
        if (l === 0) {
            r++
        } else if (r === arr.length - 1 || x - arr[l - 1] <= arr[r + 1] - x) {
            l--
        } else {
            r++
        }
    }
    return arr.slice(l, r + 1)
}

// function findClosestElements(arr: number[], k: number, x: number): number[] {
//     let l = 0,
//         r = arr.length - k

//     while (l < r) {
//         let m = ~~((l + r) / 2)
//         if (x - arr[m] > arr[m + k] - x) {
//             l = m + 1
//         } else {
//             r = m
//         }
//     }
//     return arr.slice(l, l + k)
// }

const arr = [0, 0, 0, 1, 3, 5, 6, 7, 8, 8],
    k = 3,
    x = 2
console.log(findClosestElements(arr, k, x))
