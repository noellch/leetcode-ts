/* Q: Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. */

let arr = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6]

var removeDuplicates = function (nums) {
    // edge case
    if (nums.length <= 0) return

    // slow pointer
    let i = 0

    // j is fast pointer
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }

    return i + 1
}

console.log(removeDuplicates(arr))

/* A: */
// 因為 nums 是 non-decreasing order。
// 指定兩個 pointer，一快一慢依序比較。
// 快 pointer j 不斷往上，跟 i 比若遇到相同的值就不做事。
// 反之就將慢 pointer i index 往上 + 1，並將新值 nums[i] 替換成快 pointer j 指到的值 (跟 i 不同)。
// 整個 array 跑完後，前半部就會是完全不重複的值。 ex: [1, 2, 3, 4, 5, 6, 5, 5, 5, 6]
// 最後返回慢 pointer 當前的 index + 1。就是最後整個陣列所有不同值的數量。
