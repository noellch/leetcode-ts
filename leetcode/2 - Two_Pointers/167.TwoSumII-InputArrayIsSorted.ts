/* 
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
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
