/* 
https://leetcode.com/problems/two-sum/description/
*/

/* ------------------------------------------------------------------------------- */

function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    const table: Record<number, number> = {};

    nums.forEach((num, i) => {
        if (num in table) {
            (result = [i, table[num]]), result;
        }
        table[target - num] = i;
    });

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const nums = [2, 7, 11, 15],
    target = 9;
// const nums = [3,2,4], target = 6
// const nums = [3,3], target = 6
console.log(twoSum(nums, target));
