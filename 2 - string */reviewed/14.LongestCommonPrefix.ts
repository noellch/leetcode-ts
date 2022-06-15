/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". */

function longestCommonPrefix(strs: string[]): string {
    // 如果 strs 長度存在，則預設 longest 等於 strs 的第一個值。
    let longest = strs[0] || '';

    if (strs.length > 1) {
        let p = 0;
        for (let i = 1; i < strs.length; i++) {
            // strs[i] 為 "" 的狀況
            if (!strs[i]) return '';

            p = 0;
            while (strs[i][p] && strs[i][p] === longest[p]) p++;
            longest = longest.substring(0, p);
        }
    }

    return longest;
}

console.log(longestCommonPrefix(['flower', 'flower', 'flower', 'flower']));
