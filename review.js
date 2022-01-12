var findPeakElement = function (nums) {
    let left = 0,
        right = nums.length - 1,
        mid

    while (left < right) {
        mid = Math.floor((right + left) / 2)
        if (nums[mid] > nums[mid + 1]) right = mid
        else left = mid + 1
        console.log(nums[left], nums[right])
        console.log(nums[mid])
    }
    return left
}

// console.log(

findPeakElement([1, 6, 1, 3, 5, 1, 4])
