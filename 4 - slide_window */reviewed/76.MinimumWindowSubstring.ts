/* Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string. */

function minWindow(s: string, t: string): string {
    const table: { [key: string]: number } = {};
    let window = '',
        fast = 0,
        slow = 0;

    if (!t) return window;

    for (const c of t) table[c] = (table[c] ?? 0) + 1;

    let count = Object.keys(table).length;

    // 當 s 的最後一個字母包含在 table 中時，fast 若不超過 s 的最後一位。fast 加 1 後會直接跳出迴圈，就沒有機會讓 slow pointer 再次判斷。
    while (fast <= s.length) {
        if (count) {
            // table[s[fast]] 可以減到變成負的。因為同一個字母可能在 t 字母完全被找到之前，重複很多次。
            if (s[fast] in table) table[s[fast]]--;
            // table[s[fast]] 等於 0 表示這個字母已經完全被找到了，之後再找到 table[s[fast]] 會變成負的，表示是多找到的。
            if (table[s[fast]] === 0) count--;
            fast++;
        } else {
            // count 等於 0 表示所有 t 的字母都被找到，這時 slow 到 fast 的這段字串就包含所有 t 中的字母。
            // 當下的字串小於 window 才更新。
            if (!window.length || window.length > fast - slow) window = s.slice(slow, fast);
            // table[s[slow]] 大於 0 才開始移動 fast，在那之前遇到 t 的字母都是多找到的。
            // 接下來的 fast 就是要找下一個加回去的這個字母。
            if (s[slow] in table) table[s[slow]]++;
            if (table[s[slow]] > 0) count++;
            slow++;
        }
    }

    return window;
}

console.log(minWindow('cabwefgewcwaefgcf', 'cae'));

/**
 * /**
 * slide window
 * 定義一個 hash table 儲存字串 t 中的每一個字母以及對應的出現次數。
 * 設定兩個 pointer。fast 先移動，負責找到 s 字串中首先出現包含所有 t 字母的 substring。
 * 一找到就開始將 slow 移動。若 slow 指向的字母沒有在 t 字串中，就不斷移動直到指到下一個有出現在 t 字串中的字母，然後更新 window。
 * 反之，則往下一步破壞當下的 substring，換 fast 移動往下找到下一個相同字母。
 *
 * ex: s='ADOBECODEBANC', t='ABC'
 * 第一個被找出的子字串為 'ADOBEC' 這時 fast 指向 C，而 slow 指向 A。將 window 暫時等於 'ADOBEC'。
 * fast 停止。slow 指向的 A 有出現在 t 字串中。移動 slow，讓 slow 指向的 D 不存在 t 中。
 * fast 繼續移動，為了找到下一個 A。
 * 找到第二個 A 時，fast 停止。
 * slow 指向的 D 不在 t 中，不斷往上直到找到下個存在 t 中的字母。
 * 剛剛 fast 在找到下個 A 的過程中有多找到一個 B。所以 slow 找到 B 時可以略過，下個存在 t 中的字母是 C。
 * 這時 window 應該要等於 'CODEBA'，但 'CODEBA' 沒有比 'ADOBEC' 短，所以 window 不用更新。
 * slow 往上指向 O，破壞當下的 substring，換 fast 移動往下找到下一個 C。
 * 找到後換 slow 移動。O 不在 t 中，所以往上直到 B。這時 window 等於 'BANC'，比 'ADOBEC' 短所以更新。
 * fast 移動超過 s 長度。迴圈停止。
 * 返回最短 window 為 'BANC'。
 */

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */
