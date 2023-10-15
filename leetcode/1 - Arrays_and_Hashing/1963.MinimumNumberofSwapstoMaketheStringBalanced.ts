/* 
You are given a 0-indexed string s of even length n. The string consists of exactly n / 2 opening brackets '[' and n / 2 closing brackets ']'.

A string is called balanced if and only if:

It is the empty string, or
It can be written as AB, where both A and B are balanced strings, or
It can be written as [C], where C is a balanced string.
You may swap the brackets at any two indices any number of times.

Return the minimum number of swaps to make s balanced.
*/

/* ------------------------------------------------------------------------------- */

function minSwaps(s: string): number {
    let extraClose = 0,
        needSwapClose = 0;

    for (const b of s) {
        b === ']' ? extraClose++ : extraClose--;
        needSwapClose = Math.max(extraClose, needSwapClose);
    }

    return Math.ceil(needSwapClose / 2);
    // 因為 1 次的 swap 可以消除兩個 extra close。
    // ]]][[[ 雖然到 index3 時 extra close 是 3，但只需 swap 1 次就可以將 3 個 close 減為 1。變為 []][][。
    // 這時 extra close 只剩下 index2。
    // 所以最小的 swap 次數為 (needSwapClose + 1)/2 的整數部分，也就是 Math.ceil(needSwapClose / 2)。
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
// const s = '][][';
const s = ']]][[[';
// const s = '[]';

console.log(minSwaps(s));
