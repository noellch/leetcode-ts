/* Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2. */

function checkInclusion(s1: string, s2: string): boolean {
    const hashMap: { [key: string]: number } = {};
    let l = 0,
        r = 0;

    for (const s of s1) {
        hashMap[s] = (hashMap[s] ?? 0) + 1;
    }

    // 表示總共有多少個字母應該被判斷，例如 hello 就有 4 個字母要被判斷。
    let permutationLen = Object.keys(hashMap).length;

    while (r < s2.length) {
        // 這邊指的是無論 hashMap[s2[r]] 是多少都要被減一。
        // 如果 s2[r] 不存在 hashMap 中，這邊就會變成 undefined。所以不會被影響到
        // 原因是如果寫成 if(hashMap[s2[r]])   hashMap[s2[r]]--;
        // hashMap[s2[r]] 減到 0 就不會往下減了。但有可能會找到重複的字母，所以必須要能被減到變負數。
        hashMap[s2[r]]--;

        // 如果該項這次循環已經變成 0，表示這個字母已經都被找到了。
        // 所以讓 permutationLen 減一。

        if (hashMap[s2[r]] === 0) {
            permutationLen--;
        }

        // permutationLen 為 0 表示所有字母都被找到
        if (permutationLen === 0) return true;

        // 但如果 permutationLen 還沒為 0，window 的長度又剛好已經等於 s1 的長度，表示這個 window 並未完全包含 s1 的字母。
        if (r - l + 1 === s1.length) {
            // 要讓 l 往上。所以 s2[l] 在 hashMap 中如果是 0，要把 permutationLen 加回去。
            if (hashMap[s2[l]] === 0) {
                permutationLen++;
            }

            // 跟上面的理由一樣，不管 hashMap[s2[l]] 是正是負還是 0 都要加一。
            hashMap[s2[l]]++;

            // 最後 l 往上，讓 window 的 r 繼續找下一個匹配的字母。
            l++;
        }

        r++;
    }

    return false;
}

const s1 = 'hello',
    s2 = 'ooolleoooleh';

console.log(checkInclusion(s1, s2));
