/* There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, 
nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity. */

// 重點：
// 1. sorted in ascending order
// 2. write an algorithm with O(log n) runtime complexity
// 3. return index of target, otherwise -1
// 關鍵點在於時間複雜度要符合 O(logn)，所以無法直接搜尋整個 array。
// array 會經過旋轉，且我們不知道旋轉的 pivot 在哪個位置，所以無法用傳統的 binary search。

function search(nums: number[], target: number): number {
    let left = 0,
        right = nums.length - 1;
    let mid: number;

    // 有兩種情況：
    // #case1: array 旋轉後最小值超過 array 中位。[2, 3, 4, 5, 6, *0, 1]
    // #case2: array 旋轉後最小值不超過 array 中位。[5, 6, *0, 1, 2, 3, 4]
    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        // #case1
        if (nums[mid] >= nums[left]) {
            if (target > nums[mid] || target < nums[left]) left = mid + 1;
            else right = mid - 1;
            // #case2
        } else {
            if (target < nums[mid] || target > nums[right]) right = mid - 1;
            else left = mid + 1;
        }
    }

    return -1;
}

/**
 * 在傳統的 binary search 中加上判斷 nums[mid] >= nums[left]，來確定旋轉後的 array 是哪一種型態。
 */

console.log(search([6, 7, 0, 1, 2, 4, 5], 0));
