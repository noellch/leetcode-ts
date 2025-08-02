/* 
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
*/

/* ------------------------------------------------------------------------------- */

function twoSum(numbers: number[], target: number): number[] {
    if (numbers.length === 2) return [1, 2];

    let l = 0,
        r = numbers.length - 1;

    while (l < r) {
        const diff = numbers[l] + numbers[r] - target;
        if (diff > 0) r--;
        else if (diff < 0) l++;
        else break;
    }

    return [l + 1, r + 1];
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const numbers = [2, 7, 11, 15],
    target = 9;
// const numbers = [2, 3, 4],
//     target = 6;
// const numbers = [-1, 0],
//     target = -1;

console.log(twoSum(numbers, target));
