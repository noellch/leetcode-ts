/* 
https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
*/

/* ------------------------------------------------------------------------------- */

const digitToChar: { [d: string]: string } = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
};

function letterCombinations(digits: string): string[] {
    if (!digits) return [];
    const result: string[] = [];
    const str: string[] = [];

    function dfs(idx: number) {
        if (idx >= digits.length) return result.push([...str].join(''));

        for (const d of digitToChar[digits[idx]]) {
            str.push(d);
            dfs(idx + 1);
            str.pop();
        }
    }

    dfs(0);

    return result;
}

/* ------------------------------------------------------------------------------- */

/*
T.C.: O(3^N * 4^M)
- 假設給定的數字串長度是 N。對於每個數字，我們需要遍歷它對應的所有字母，這個數量是固定的。
因此，整個過程的時間複雜度是 O(3^N * 4^M)，其中 N 是數字串中只對應 3 個字母的數字個數，M 是數字串中對應 4 個字母的數字個數。

S.C.: O(N)
- 在解這個題目時，我們需要儲存所有可能的字母組合。
在最壞情況下，所有的數字都對應 4 個字母，所以我們可能需要存儲的組合數最多是 4^N。因此，空間複雜度是 O(4^n)。
*/

/* ------------------------------------------------------------------------------- */

const digits = '23';
// const digits = ""
// const digits = "2"

console.log(letterCombinations(digits));
