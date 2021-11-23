var search = function (nums, target) {
    let leftIdx = 0,
        rightIdx = nums.length - 1

    while (leftIdx < rightIdx) {
        let mid = Math.floor((leftIdx + rightIdx) / 2)

        if (nums[mid] < nums[rightIdx]) {
            rightIdx = mid
        } else {
            leftIdx = mid + 1
        }
    }

    let pivot = leftIdx
    leftIdx = 0
    rightIdx = nums.length - 1

    if (target > nums[rightIdx]) {
        rightIdx = pivot - 1
    } else {
        leftIdx = pivot
    }

    let mid = Math.floor((leftIdx + rightIdx) / 2)
    while (nums[mid] !== target && leftIdx < rightIdx) {
        if (nums[mid] < target) {
            leftIdx = mid + 1
        } else {
            rightIdx = mid - 1
        }

        mid = Math.floor((leftIdx + rightIdx) / 2)
    }

    return nums[mid] === target ? mid : -1
}

console.log(search([0, 1, 2, 4, 5, 6, 7], 4))
