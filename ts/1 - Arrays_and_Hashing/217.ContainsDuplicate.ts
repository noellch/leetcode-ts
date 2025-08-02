/* 
https://leetcode.com/problems/contains-duplicate/description/
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
    const set: Set<number> = new Set();

    for (const num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }

    return false;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// const nums = [1, 2, 3, 1];
// const nums = [1, 2, 3, 4];
const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
