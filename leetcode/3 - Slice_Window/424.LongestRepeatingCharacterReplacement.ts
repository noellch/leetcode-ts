/* 
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.
*/

/* ------------------------------------------------------------------------------- */
function characterReplacement(s: string, k: number): number {
    let longest = -Infinity;
    const table = new Map<string, number>();
    let r = 0,
        l = 0;

    while (r < s.length) {
        table.set(s[r], 1 + (table.get(s[r]) || 0));

        // 若 window 長度減去 window 內最常出現的字母頻率大於 k，
        // 表示現在這個 window 替換掉 k 個字母已經無法達到全相同字母 substring
        if (r - l + 1 - Math.max(...table.values()) > k) {
            // 所以將 l 所在位置的字母頻率減一
            // l 向上，window 內縮
            table.set(s[l], (table.get(s[l]) as number) - 1);
            l++;
        }

        // 每次都更新最長 substring 的長度
        longest = Math.max(longest, r - l + 1);
        r++;
    }

    return longest;
}

/**
 * s 內最長的 substring 其實就是等於 window 內 "最頻繁出現的字母數量" 加上 k
 * 例如 s = "ABABBA" k = 1
 * 最長 substring 的長度就等於 window "BABB" 最頻繁出現的字母 B 的數量 3 加上 1
 *
 * 定義一個 table 紀錄當下遍歷過 window 內的字母的出現頻率
 * 若 "window 的長度" 減去這個 table 內的 "最高頻率" 小於等於 k，
 * 表示 window 內隨便替換任 k 字母還是可以符合題目全相同字母 substring 的定義
 * 同時更新變數 longest substring
 *
 * 若 "window 的長度" 減去這個 table 內的 "最高頻率" 大於 k，
 * 表示 window 內替換 k 字母後的 substring 無法達到相同字母 substring 的定義
 * 所以將 l pointer 往上，table 內 l 所在位置的字母頻率減一
 *
 */

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */

// const s = 'ABAB',
//     k = 2;
const s = 'AABABBA',
    k = 1;

console.log(characterReplacement(s, k));
