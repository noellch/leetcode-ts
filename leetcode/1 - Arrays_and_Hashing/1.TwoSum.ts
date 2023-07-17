/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

/* ------------------------------------------------------------------------------- */

// function twoSum(nums: number[], target: number): number[] {
//     const table: { [key: string]: number } = {};
//     let result: number[] = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (table[nums[i]] >= 0) result = [table[nums[i]], i];
//         table[target - nums[i]] = i;
//     }

//     return result;
// }

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

function twoSum(nums: number[], target: number): number[] {
    let result: number[] = [];
    const table = new Map<number, number>();

    nums.forEach((num, i) => {
        if (table.has(num)) (result = [table.get(num) as number, i]), result;
        const diff = target - num;
        table.set(diff, i);
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
