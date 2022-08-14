/* Given a string s, find the length of the longest substring without repeating characters. */

function lengthOfLongestSubstring1(s: string): number {
    if (!s.length) return 0;
    if (s.length === 1) return 1;

    const set: Set<string> = new Set();

    let p = 0,
        longest = -Infinity;

    for (let i = 0; i < s.length; i++) {
        // 假設目前 Set 為 Set[a, b, d, c]，當下最長的不重複字母字串就是 abdc。
        // 若緊接下來的字母是 d，因為與 Set 內的值重複。
        // 所以會刪除 set 內的 s[p]，直到 Set 內不再出現 "d"。
        // 以上面的例子，因為 i 會停在 "d"，Set 若沒有刪到 d 消失，i 不會繼續往上，所以會陸續刪除 a、b、d。
        // 直到 Set 內的 "d" 消失， i 所在的 d 會加入，讓 Set 重新計算新的不重複字母字串的長度。
        while (set.has(s[i])) {
            set.delete(s[p]);
            p++;
        }

        set.add(s[i]);
        longest = Math.max(longest, set.size);
    }

    return longest;
}

console.log(lengthOfLongestSubstring1('aab'));

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */

function lengthOfLongestSubstring2(s: string): number {
    if (!s.length) return 0;
    if (s.length === 1) return 1;

    const arr: string[] = [];

    let longest = -Infinity;

    for (let i = 0; i < s.length; i++) {
        const idx = arr.indexOf(s[i]);

        if (idx !== -1) {
            arr.splice(0, idx + 1);
        }

        arr.push(s[i]);
        longest = Math.max(longest, arr.length);
    }

    return longest;
}

console.log(lengthOfLongestSubstring2('aab'));

/**
 * T.C.: O(n)
 * S.C.: O(n)
 */
