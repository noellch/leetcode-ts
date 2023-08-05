/* Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time. */

/**
 * nums is a unsorted array.
 * must write an algorithm that runs in O(n) time.
 */

/**
 * 有可能存在多個相同長度的 consecutive elements sequence 嗎？
 * nums 可能為空嗎？
 */

function longestConsecutive(nums: number[]): number {
    // this make T.C. O(n) possible, since has,get and add method are linear T.C. in Set.
    const set: Set<number> = new Set(nums);
    let longest = 0;

    for (let num of nums) {
        // num 若不存在前一位數，表示它會是 subsequence 的開頭。
        if (!set.has(num - 1)) {
            // 每次找到開頭從新計算數組長度。
            let length = 0;
            // 找到開頭開始判斷下一位是否存在。有的話將 length 跟自身 + 1（不然會一直困在 while 裏）。
            while (set.has(num)) {
                length++;
                num++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

/**
 *
 * 建立 set 的 time complexity 為 O(n)；再次遍歷 set O(n); search through set O(1)
 * T.C.: O(n) + O(n) + O(1) => O(n)
 * S.C.: O(n)
 */
