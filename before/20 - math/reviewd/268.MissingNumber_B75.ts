/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. */

/**
 * Follow up:
 * Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
 */

// solution1
function missingNumber1(nums: number[]) {
    const sum = nums.reduce((a, c) => a + c, 0);
    const sum1 = ((nums.length + 1) * nums.length) / 2;
    return sum1 - sum;
}

console.log(missingNumber1([9, 6, 4, 2, 3, 5, 7, 0, 1]));

// solution2
function missingNumber2(nums: number[]) {
    let result = 0;

    for (let i = 0; i <= nums.length; i++) {
        result ^= i ^ nums[i];
    }

    return result;
}

console.log(missingNumber2([9, 6, 4, 2, 3, 5, 7, 0, 1]));

/**
 * T.C.: O(n)
 * S.C.: O(1)
 */
