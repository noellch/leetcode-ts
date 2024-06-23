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
        r = Math.max(...nums) - Math.min(...nums),
        result = r;

    function isValid(mid: number) {
        let i = 0,
            count = 0;

        while (i < nums.length - 1) {
            if (Math.abs(nums[i] - nums[i + 1]) <= mid) {
                count++;
                i += 2;
            } else {
                i += 1;
            }
            if (count === p) return true;
        }

        return false;
    }

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        if (isValid(mid)) {
            result = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return result;
}

/*
T.C.: O(Nlog(N) + Nlog(M))
M 等於 0 ~ 10^9 這個範圍，因為對這個範圍做 binary search，並起每一次都會遍歷 N(nums 的長度)。

S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

const nums = [10, 1, 2, 7, 1, 3],
    p = 2;
// const nums = [4, 2, 1, 2],
//     p = 1;

console.log(minimizeMax(nums, p));
