/* 
Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.
*/

/* ------------------------------------------------------------------------------- */

function numOfSubarrays(arr: number[], k: number, threshold: number): number {
    let r = k - 1,
        l = 0,
        currentSum = 0,
        result = 0;

    for (let i = l; i < r; i++) {
        currentSum += arr[i];
    }

    while (r < arr.length) {
        currentSum += arr[r];
        if (currentSum / k >= threshold) {
            result += 1;
        }
        currentSum -= arr[l];
        r++;
        l++;
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const arr = [2, 2, 2, 2, 5, 5, 5, 8],
    k = 3,
    threshold = 4;
// const arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3],
//     k = 3,
//     threshold = 5;

console.log(numOfSubarrays(arr, k, threshold));
