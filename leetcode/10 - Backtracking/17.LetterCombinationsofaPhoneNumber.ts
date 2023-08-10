/* 
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
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
T.C.: O(N * 4^N)
- 每個號碼最多包含 4 個字母，所以最差會有 4^N 個可能的組合。其中 N 是 digits 的長度。
- 每一個組合都要複製到結果中，且每一個組合的長度為 N。
- 所以 T.C. 為 O(N * 4^N)

S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const digits = '23';
// const digits = ""
// const digits = "2"

console.log(letterCombinations(digits));
