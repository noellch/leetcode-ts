/* 
https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/description/
*/

/* 
Constraints:
1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= p <= (nums.length)/2
 */

/* ------------------------------------------------------------------------------- */

function minimizeMax(nums: number[], p: number): number {
    if (p === 0) return 0;
    nums.sort((a, b) => a - b);

    let l = 0,
        r = nums[nums.length - 1] - nums[l];
    let result = r;

    function isValid(m: number) {
        let count = 0;
        let i = 0;
        while (i < nums.length - 1) {
            if (Math.abs(nums[i] - nums[i + 1]) <= m) {
                count += 1;
                i += 2;
            } else {
                i += 1;
            }

            if (count === p) return true;
        }

        return false;
    }

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

        if (isValid(mid)) {
            r = mid - 1;
            result = mid;
        } else {
            l = mid + 1;
        }
    }

    return result;
}

/*
T.C.: O(N log(N) + N log(M))
M 等於 0 ~ 10^9 這個範圍，因為對這個範圍做 binary search，並起每一次都會遍歷 N(nums 的長度)。

S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const nums = [10, 1, 2, 7, 1, 3],
//     p = 2;
// const nums = [4, 2, 1, 2],
//     p = 1;
const nums = [3, 6, 8, 7, 5, 4, 9, 5],
    p = 6;

console.log(minimizeMax(nums, p));
