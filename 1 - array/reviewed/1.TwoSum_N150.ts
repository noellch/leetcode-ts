/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

/* Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity? */

/* ------------------------------------------------------------------------------- */

var twoSum_1 = function (nums: number[], target: number): number[] {
    // diff:index
    let map: { [key: number]: number } = {};
    let result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] >= 0) {
            result = [map[nums[i]], i];
        }

        map[target - nums[i]] = i;
    }
    return result;
};

console.log(twoSum_1([2, 7, 11, 15], 9));

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */

/* ------------------------------------------------------------------------------- */

function twoSum_2(nums: number[], target: number): number[] {
    // diff:index
    const hashMap: Map<number, number> = new Map();
    let result: number[] = [];

    nums.forEach((num, i) => {
        const difference = target - num;

        if (hashMap.has(num)) return (result = [hashMap.get(num) as number, i]);

        hashMap.set(difference, i);
    });

    return result;
}

console.log(twoSum_2([2, 7, 11, 15], 9));

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */

/* ------------------------------------------------------------------------------- */
