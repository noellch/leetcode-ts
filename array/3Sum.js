/* Q: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets. */

//? 給定一組 array，要返回所有三個相加等於 0 的元素，元素使用上不能重複。

var threeSum = function (nums) {
    let lp = 0
    let rp = 0
    let result = []

    // 非常重要！array 一定要先由小到大 sorted。
    nums.sort((a, b) => a - b)

    // 判斷直到 array 的最後三位。
    for (let i = 0; i < nums.length - 2; i++) {
        // 非常重要之二！每一輪的迴圈開始時，一定要把 lp 跟 rp 重新初始化。
        // 等於每次的判斷都是 range from i、i + 1 to the end of this array。
        // 這樣才不會錯過任何一個組合
        lp = i + 1
        rp = nums.length - 1

        // nums[i] > 0 或 nums[rp] < 0 時不管怎麼加的不可能等於 0 了，所以直接跳出迴圈。
        if (nums[i] > 0 || nums[rp] < 0) break

        // 若這一輪的值跟上一輪一樣，跳出這一輪迴圈不判斷。(因為上一輪已經判斷過一樣的數字了)
        if (i > 0 && nums[i] === nums[i - 1]) continue

        // 接下來若左右兩個 pointer 沒有相遇，就不斷判斷。
        while (lp < rp) {
            // 三個數相加小於 0 就讓 lp 大一些 (因為 sort 過，array 越往上值越大)
            if (nums[i] + nums[lp] + nums[rp] < 0) {
                lp++
                // 三個數相加大於 0 就讓 rp 小一些
            } else if (nums[i] + nums[lp] + nums[rp] > 0) {
                rp--
                //三個數相加剛好等於 0 的情況。
            } else {
                // 找到相加等於 0 的三個數數組，push 進 result。
                result.push([nums[i], nums[lp], nums[rp]])

                // 非常重要之三！若這一輪的值跟上一輪一樣，就讓值往上或往下 (因為上一輪已經判斷過了)
                while (lp < rp && nums[lp] === nums[lp + 1]) lp++
                while (lp < rp && nums[rp] === nums[rp - 1]) rp--
                // 因為這三個數字相加剛好等於 0，讓 lp 與 rp 同時前進，進行下一輪 while loop 的判斷，直到 lp === rp
                lp++
                rp--
            }
        }
        // 這個 nums[i] 經過 while loop 將 nums[i] 到 nums[nums.length-1] 的值三三確認過後。繼續往下個 i 重新開始。
        // 這也是為什麼前面需要 lp = i + 1 和 rp = nums.length - 1 讓 lp 及 rp 重新定位。
    }

    return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))

//* 主要思維：首先必須！一定！要將指定的 array 由小到大 sort 過。因此可以保證左手邊的值一定小於右手邊的值。
//* 指定一左一右兩個 pointer - lp & rp。
//* 使用 for loop 的 0 - nums[i] 來作為當下 lp 與 rp 值大小的指標。
//* rp 從 array 的尾端開始。lp 則從 i + 1 隨著 loop 不斷往上。
//* 每一輪都要判斷 nums[i] , nums[i+1] 到 nums[nums.length-1] 這段區間的所有數字的和。
//* 若為 0 則 push 進 result 最後返回。

// time complexity: O(n^2)
// space complexity: O(n)
