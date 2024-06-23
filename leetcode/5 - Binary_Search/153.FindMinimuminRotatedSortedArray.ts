/* 
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
*/

/* ------------------------------------------------------------------------------- */

function findMin(nums: number[]): number {
    let l = 0,
        r = nums.length - 1;
    let result = nums[0];

    while (l <= r) {
        if (nums[l] < nums[r]) {
            result = Math.min(result, nums[l]);
            break;
        }

        let mid = l + Math.floor((r - l) / 2);
        result = Math.min(result, nums[mid]);

        if (nums[mid] >= nums[l]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return result;
}

/* 
rotated 後的 Array 會分兩個 ascending order sorted Array 的組合。(如 [3, 4, 5] 和 [1, 2])
判斷 num[mid] 是存在於左半邊的 Array 還是右半邊的 Array。（有可能 num[mid] 就是最小值，所以每次都要更新 result）
若 num[mid] 存在於左半邊的 Array，則最小值就會存在 mid 的右邊部分。所以讓 l = mid + 1 在這個範圍內繼續搜尋；
反之則讓 r = mid - 1。
若 nums[l] < nums[r]，表示目前這個範圍已經是 ascending order sorted Array，故 nums[l] 就會是最小值，因此更新 result，並跳出 while loop。
*/

/*
T.C.: O(log(N))
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const nums = [3, 4, 5, 1, 2];
const nums = [4, 5, 6, 7, 0, 1, 2];
// const nums = [11, 13, 15, 17];

console.log(findMin(nums));
