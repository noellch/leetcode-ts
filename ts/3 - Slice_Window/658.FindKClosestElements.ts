/* 
https://leetcode.com/problems/find-k-closest-elements/description/
*/

/* ------------------------------------------------------------------------------- */

function findClosestElements(arr: number[], k: number, x: number): number[] {
    let l = 0,
        r = arr.length - k;

    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);

        if (Math.abs(x - arr[mid]) > Math.abs(x - arr[mid + k])) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return arr.slice(l, l + k);
}

/* ------------------------------------------------------------------------------- */

// function findClosestElements(arr: number[], k: number, x: number): number[] {
//     let l = 0,
//         r = arr.length - 1;

//     while (r - l + 1 > k) {
//         if (x - arr[l] > arr[r] - x) {
//             l++;
//         } else {
//             r--;
//         }
//     }

//     return arr.slice(l, r + 1);
// }

/* ------------------------------------------------------------------------------- */
//           l              r
const arr = [1, 2, 3, 4, 5, 6, 7],
    //             m
    k = 2,
    x = 4;

/* 
 l                r
[1, 2, [3, 4], 5, 6, 7],
        m
k = 2,
x = 4;

*/
// const arr = [1, 2, 3, 4, 5],
//     k = 4,
//     x = -1;
console.log(findClosestElements(arr, k, x));
