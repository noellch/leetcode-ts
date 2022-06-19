/* Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. */

function threeSum(nums: number[]): number[][] {
    const result: number[][] = []

    // 若 nums 的 長度不足 3，則直接返回空陣列。
    if (nums.length >= 3) {
        // 題目說到返回的結果不能重複。所以先 sort 這個 array，
        // 這樣當遍歷 nums，若遇到與上一輪相同的值時，就略過這個元素。
        nums = nums.sort((a, b) => a - b)

        let left, right

        for (let i = 0; i < nums.length - 2; i++) {
            // 每一輪的迴圈開始時，將 left 跟 right 重新初始化。
            // 等於每次的判斷都是 range from i、i + 1 to the end of this array。
            left = i + 1
            right = nums.length - 1

            // 若這一輪的值跟上一輪一樣，跳出這一輪迴圈不判斷。
            // 避免最終結果出現重複。
            if (i > 0 && nums[i] === nums[i - 1]) continue
            // nums[i] > 0 或 nums[rp] < 0 時，不管怎麼加的不可能等於 0 了，所以直接跳出迴圈。
            if (nums[i] > 0 || nums[right] < 0) break

            // 左右 pointer 沒有相遇，就不斷判斷。
            while (left < right) {
                const threeSum = nums[i] + nums[left] + nums[right]

                // 三個數相加小於 0 就讓 left 大一些 (因為 sort 過，array 越往上值越大。
                if (threeSum < 0) left++
                // 三個數相加大於 0 就讓 right 小一些。
                else if (threeSum > 0) right--
                //三個數相加剛好等於 0 的情況。
                else {
                    result.push([nums[i], nums[left], nums[right]])
                    right--
                    left++
                    // 若這一輪的值跟上一輪一樣，就讓值往上或往下 (因為上一輪已經判斷過了)。
                    while (right > left && nums[left] === nums[left - 1]) left++
                    while (right > left && nums[right] === nums[right + 1]) right--
                }
            }

            // nums[i] 經過 while loop 將 nums[i] 到 nums[nums.length-1] 的值逐一確認過。繼續往下個 i 重新開始。
            // 這也是為什麼需要 left = i + 1 和 right = nums.length - 1 重新定位。
        }
    }

    return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))

/**
 * T.C: O(nlogn) + O(n^2) => O(n^2)
 * S.C: O(1) or O(n) depends on how sorting implements
 */
