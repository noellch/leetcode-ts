/* 
You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/
/* ------------------------------------------------------------------------------- */

function maxArea(height: number[]): number {
    let amount = 0;

    let r = height.length - 1,
        l = 0;

    while (l < r) {
        if (height[r] < height[l]) {
            amount = Math.max(amount, (r - l) * height[r]);
            r--;
        } else {
            amount = Math.max(amount, (r - l) * height[l]);
            l++;
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
