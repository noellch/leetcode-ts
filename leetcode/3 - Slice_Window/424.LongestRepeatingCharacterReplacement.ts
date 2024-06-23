/* 
https://leetcode.com/problems/longest-repeating-character-replacement/description/
*/

/* ------------------------------------------------------------------------------- */
function characterReplacement(s: string, k: number): number {
    let result = 0;
    let l = 0,
        r = 0;
    const map: Record<string, number> = {};

    while (r < s.length) {
        map[s[r]] = ++map[s[r]] || 1;

        while (r - l + 1 - Math.max(0, ...Object.values(map)) > k) {
            map[s[l]]--;
            l += 1;
        }

        result = Math.max(result, r - l + 1);
        r += 1;
    }

    return result;
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
