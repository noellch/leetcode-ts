/* 
Given a string s, partition s such that every substring of the partition is a palindrome. 
Return all possible palindrome partitioning of s.
*/

/* ------------------------------------------------------------------------------- */

function partition(s: string): string[][] {
    const result: string[][] = [];
    const part: string[] = [];

    function dfs(idx: number) {
        if (idx >= s.length) return result.push([...part]);

        for (let i = idx; i < s.length; i++) {
            if (isPalindrome(s, idx, i)) {
                part.push(s.substring(idx, i + 1));
                dfs(i + 1);
                part.pop();
            }
        }
    }
    dfs(0);

    return result;
}

function isPalindrome(s: string, l: number, r: number) {
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }

    return true;
}

/*
T.C.: O(2^N)
- 在最壞的情況下，我們需要考慮所有可能的分割情況。假設給定的字符串長度是 N。
在每一步，我們都有兩種選擇：要不就在當前位置進行分割，要不就不進行分割。因此，總的分割方案數是指數級的，是 O(2^N)。

S.C.: O(N)
- 遞迴調用的 call stack 高度為 N。其中 N 是 s 的長度。
- 此外，我還還需要額外的二維陣列還保存結果 N * N。
- O(N * N) + O(N) = O(N * N)
*/

/* ------------------------------------------------------------------------------- */

const s = 'adab';
// const s = "a"

console.log(partition(s));
