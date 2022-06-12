/* Given an array nums with n objects colored red, white, or blue, 
sort them in-place so that objects of the same color are adjacent,
 with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function. */

/**
 * Follow up:
 * Could you come up with a one-pass algorithm using only constant extra space?
 *
 * can't use sort function
 * sort them in-place
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    function swap(j: number, k: number) {
        let temp = nums[j];
        nums[j] = nums[k];
        nums[k] = temp;
    }

    let l = 0,
        r = nums.length - 1,
        i = 0;

    while (i <= r) {
        if (nums[i] === 0) {
            swap(i, l);
            l++;
            i++;
        } else if (nums[i] === 2) {
            swap(i, r);
            r--;
        } else {
            i++;
        }
    }
    console.log(nums);
}

sortColors([1, 0, 2]);

/**
 * quick sort
 * 題目要求不能使用 library's sort function 以及 sort in-place
 * 建立三個指標，l 指向陣列的開頭， r 指向 陣列的尾端，i 遍歷整個陣列。
 * 只要 nums[i] 是 0，就跟 nums[l] 交換，因為 0 需要往陣列開頭聚集。交換完後將 l+1，這樣下次 0 的交換就會是下一個位置。
 * 若nums[i] 是 2，就跟 nums[r] 交換，同理交換完後將 r-1。
 * 但有個狀況需要特殊處理
 * ex: [0, 1, 2, 1, 0, 2]
 *         l  i     r
 * 這時 i 是遇到 2 的情況需要跟 r 的位置坐交換。然後 i++
 * 但 r 目前指向的位置是 0，所以交換完後，i 就不再有機會指向 0。
 * 最後的結果會變成 [0, 1, 0, 1, 2, 2] 然後 i = r 跳出迴圈結束。
 * 為了解決這個問題，在每次遇到 2 時的交換，i 就不要 +1，這樣才能讓 i 有機會遇到下個 0。
 *
 *
 * T.C: O(n)
 * S.C: O(n1)
 *
 */
