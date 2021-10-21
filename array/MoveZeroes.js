/* Q: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array. */

//* two pointer
// var moveZeroes = function (nums) {
//     if (nums.length === 1) return nums

//     let pointer1 = 0
//     let pointer2 = 0

//     while (pointer2 < nums.length) {
//         if (nums[pointer2] === 0) {
//             pointer2++
//         } else {
//             let temp = nums[pointer1]
//             nums[pointer1] = nums[pointer2]
//             nums[pointer2] = temp
//             pointer1++
//             pointer2++
//         }
//     }

//     return nums
// }

//* smart solution
var moveZeroes = function (nums) {
    let current = 0

    for (let num of nums) {
        if (num !== 0) {
            nums[current++] = num
        }
    }

    for (let i = current; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
}

console.log(moveZeroes([0, 1, 0, 3, 0, 5, 0, 12]))

//* 本來覺得用 tow pointer 解應該ＯＫ，但發現有更聰明的解法。
//* 先把 nums 中不是 0 的值通通拿出來照順序放到 nums 的最前面。再將除此之外的 index 賦值為 0。

// 1. Define a pointer called current which is used to separate non-zero digits and zero.
// 2. 用 for loop 將 nums 內的值全部拿出來檢查。不為 0 的從 index 0 開始重新賦值回 nums。也就是將 nums 的前 n 位調整成這幾個不為 0 的值。
// 3. 每找到一個不為 0 的值，current 就 + 1。
// 4. 將 nums 的前 n 位調整成不為 0 的值後，current 會指向 index n + 1。
// 5. 再將 current 到 nums 的最後一位全都賦值為 0，就可以得到一個非 0 數字在前 (原本順序不變)，0 在後的陣列了。
