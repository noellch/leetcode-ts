/* Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.
 */

/* ------------------------------------------------------------------------------- */

/* function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>(nums);

    return set.size === nums.length;
}
 */

/*
T.C.: O(n)
S.C.: O(n)
*/

/* ------------------------------------------------------------------------------- */

function containsDuplicate(nums: number[]): boolean {
    const table = new Map<number, number>();

    for (const num of nums) {
        if (table.has(num)) return true;
        table.set(num, 1);
    }

    return false;
}

/*
T.C.: O(n)
S.C.: O(n)
*/

/* ------------------------------------------------------------------------------- */

// const nums = [1, 2, 3, 1];
// const nums = [1, 2, 3, 4];
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
