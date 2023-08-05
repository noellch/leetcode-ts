/**
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 * It is guaranteed that the answer will fit in a 32-bit integer.
 * A subarray is a contiguous subsequence of the array.
 */

function maxProduct(nums: number[]): number {
    // 避免 nums 只有一個元素時
    if (nums.length <= 1) return nums[0]

    /**
     * nums 中的元素可能存在負數，若出現最小負數積，再與接下來的負數相乘，則可能成為最大的正數積。
     * 而當下最大的正數積也有可能在與接下來的負數相乘後變成最小的負數積。
     * 所以在保存連續最大正數積的同時，也必須同步更新最小負數積。
     */

    let curMax = 0,
        curMin = 0,
        result = 0

    /**
     *  與新的一個元素相乘後可能會出現三種情況
     *  1. 新元素為正數。新元素 * prevMax 為最大正數積。
     *  2. 新元素本身的值為目前為止最大。如 [-1, 8]
     *  3. 新元素為負數。新元素 * prevMin 為最大正數積。
     */

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            curMax = 1
            curMin = 1
            continue
        }
        // 避免下面的 curMax 被更新後，curMin 取到更新後的值
        const temp = curMax
        curMax = Math.max(curMax * nums[i], curMin * nums[i], nums[i])
        curMin = Math.min(temp * nums[i], curMin * nums[i], nums[i])
        result = Math.max(result, curMax)
    }

    return result
}

const nums = [-2]
console.log(maxProduct(nums))

/**
 *
 * 如果 nums 全是正數，一定會越乘越大
 * 問題是會包含負數
 * 所以要不斷儲存當下積的最大值和最小值，因為下一個數很可能是負數，乘以最小值後就會成為最大正數
 * 但若中間遇到 0，要將最大值和最小值重設為 1
 * 因為 0 會將原本的最大最小值變成 0
 * 故設為 1 可以避免破壞整個結構，讓後續的元素可以繼續相乘
 */
