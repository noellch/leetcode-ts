/* Q: There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity. */

//? 給定一個升序的 array，但會在某個 index 旋轉。找出這個 array 中，另一給定 target 的 index。
//? 若找不到 返回 -1，
//? 整個搜尋的時間複雜度必須要符合 O(logn)

var search = function (nums, target) {
    // 首先找出 pivot
    let left = 0,
        right = nums.length - 1

    // 因為 nums[pivot - 1] < nums[pivot] < nums[pivot + 1]
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        // 所以若 nums[mid] > nums[right]，表示 pivot 會在 mid 的右半邊。
        if (nums[mid] > nums[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    // 在這邊其實 left 跟 right 會在同個位置上，也都同等於 pivot
    let pivot = left

    // 接下來要找出 target 是在 pivot 的左半 subarray 還是 右半 subarray。
    left = 0
    right = nums.length - 1

    // 若 target 小於等於最右邊的值，則可以假設 target 會在 pivot 右手邊的 subarray中。
    if (target <= nums[right]) {
        left = pivot
    } else {
        right = pivot - 1
    }

    // 接下來取出 target 所在半邊的 subarray，對其做 binary search。
    let mid = Math.floor((left + right) / 2)

    while (nums[mid] !== target && left < right) {
        if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }

        mid = Math.floor((left + right) / 2)
    }

    return nums[mid] === target ? mid : -1
}

console.log(search([0, 1, 2, 4, 5, 6, 7], 4))

//* 這題的關鍵點在於時間複雜度要符合 O(logn)，所以無法直接搜尋整個 array。
//* 另一個難點是 array 會經過旋轉，且我們不知道旋轉的 pivot 在哪個位置，所以無法用傳統的 binary search。
