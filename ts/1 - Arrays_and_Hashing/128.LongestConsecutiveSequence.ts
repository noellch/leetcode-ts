/* 
https://leetcode.com/problems/longest-consecutive-sequence/description/
*/

/* ------------------------------------------------------------------------------- */

function longestConsecutive(nums: number[]): number {
    if (!nums.length) return 0;

    const set = new Set(nums);
    let longest = 0;

    for (let num of nums) {
        if (!set.has(num - 1)) {
            let len = 1;
            let cur = num;
            while (set.has(cur + 1)) {
                len++;
                cur++;
            }
            longest = Math.max(longest, len);
        }
    }
    return longest;
}
//
/*
T.C.: O(N)
雖然有巢狀迴圈，但每個數字最多只會被訪問兩次（一次是外層迴圈，一次是內層迴圈），所以總共還是線性時間。
- the time complexity of set.has method is O(1) and for loop is O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// const nums = [100, 4, 200, 1, 3, 2];
const nums = [0];
// const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums));
