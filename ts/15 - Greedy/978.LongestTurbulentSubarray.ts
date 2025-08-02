/* 
https://leetcode.com/problems/longest-turbulent-subarray/description/
*/

/* ------------------------------------------------------------------------------- */

function maxTurbulenceSize(arr: number[]): number {
    let l = 0,
        r = l + 1,
        result = 1,
        prev = '';

    while (r < arr.length) {
        if (arr[r] > arr[r - 1] && prev !== '<') {
            result = Math.max(result, r - l + 1);
            r += 1;
            prev = '<';
        } else if (arr[r] < arr[r - 1] && prev !== '>') {
            result = Math.max(result, r - l + 1);
            r += 1;
            prev = '>';
        } else {
            if (arr[r] === arr[r - 1]) {
                r = r + 1;
            }
            l = r - 1;
            prev = '';
        }
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const arr = [9, 4, 2, 10, 7, 8, 8, 1, 9];

console.log(maxTurbulenceSize(arr));
