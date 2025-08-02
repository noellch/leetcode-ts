/* 
https://leetcode.com/problems/container-with-most-water/description/
*/
/* ------------------------------------------------------------------------------- */

function maxArea(height: number[]): number {
    let amount = 0;

    let l = 0,
        r = height.length - 1;

    while (l < r) {
        const lHeight = height[l];
        const rHeight = height[r];

        if (lHeight < rHeight) {
            amount = Math.max(amount, (r - l) * lHeight);
            l++;
        } else {
            amount = Math.max(amount, (r - l) * rHeight);
            r--;
        }
    }
    return amount;
}

/*
T.C.: O(N)
S.C.: O(1)
*/

/* ------------------------------------------------------------------------------- */
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const height = [1, 1];

console.log(maxArea(height));
