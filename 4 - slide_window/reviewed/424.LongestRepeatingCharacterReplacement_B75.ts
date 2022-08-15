/* You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations. */

function characterReplacement(s: string, k: number): number {
    let longest = 0;
    // 紀錄當下遍歷過 window 內字母的頻率
    const hashMap: { [char: string]: number } = {};
    let l = 0;

    // r pointer 不斷往上
    for (let r = 0; r < s.length; r++) {
        // 紀錄當前字母頻率
        hashMap[s[r]] = (hashMap[s[r]] ?? 0) + 1;

        // 若 window 長度減去 window 內最常出現的字母頻率大於 k，
        // 表示現在這個 window 替換掉 k 個字母已經無法達到全相同字母 substring
        while (r - l + 1 - Math.max(...Object.values(hashMap)) > k) {
            // 所以將 l 所在位置的字母頻率減一
            hashMap[s[l]]--;
            // l 向上，window 內縮
            l++;
        }

        // 每次都更新最長 substring 的長度
        longest = Math.max(longest, r - l + 1);
    }

    return longest;
}

console.log(characterReplacement('AABABBA', 1));
console.log(characterReplacement('ABAA', 0));

/**
 * 左右兩個 pointers，用來探查 substring 的 window
 * s 內最長的 substring 其實就是等於 window 內 "最頻繁出現的字母數量" 加上 k
 * 例如 s = "ABABBA" k = 1
 * 最長 substring 的長度就等於 window "BABB" 最頻繁出現的字母 B 的數量 3 加上 1
 *
 * 所以定義一個 hashMap 紀錄當下遍歷過 window 內的字母的出現頻率
 * 若 "window 的長度" 減去這個 hashMap 內的 "最高頻率" 小於等於 k，
 * 表示 window 內隨便替換任 k 字母還是可以符合題目全相同字母 substring 的定義
 * 同時更新變數 longest substring
 *
 * 若 "window 的長度" 減去這個 hashMap 內的 "最高頻率" 大於 k，
 * 表示 window 內替換 k 字母後的 substring 無法達到相同字母 ubstring 的定義
 *
 * 所以將 l pointer 往上，hashMap 內 l 所在位置的字母頻率減一
 *
 */
