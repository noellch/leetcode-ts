/**
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 * It is guaranteed that the answer will fit in a 32-bit integer.
 * A subarray is a contiguous subsequence of the array.
 */

//? 求 subarray 中連續元素最大的積。

var maxProduct = function (nums) {
    if (nums.length < 2) return nums

    // nums 中的元素可能存在負數，若出現最小負數積，再與接下來的負數相乘，則可能成為最大的正數積。
    // 而當下最大的正數積也有可能在與接下來的負數相乘後變成最小的負數積。
    // 所以在保存連續最大正數積的同時，也必須同步更新最小負數積。

    let prevMin = 0,
        prevMax = 0,
        result = 0

    // 與新的一個元素相乘後可能會出現三種情況
    // 1. 新元素為正數。新元素 * prevMax 為最大正數積。
    // 2. 新元素本身的值為目前為止最大。
    // 3. 新元素為負數。新元素 * prevMin 為最大正數積。

    for (let i = 0; i < nums.length; i++) {
        // 先將更新後的 prevMax 暫存，為了下一行 prevMin 使用時不要取到更新後的值。
        const temp = prevMax
        prevMax = Math.max(nums[i], prevMin * nums[i], prevMax * nums[i])
        prevMin = Math.min(nums[i], prevMin * nums[i], temp * nums[i])
        result = Math.max(result, prevMax)
    }

    return result
}

const nums = [2, -5, -2, -4, -3]
console.log(maxProduct(nums))
