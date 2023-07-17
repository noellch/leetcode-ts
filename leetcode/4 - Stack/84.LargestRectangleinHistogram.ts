/* 
Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
*/

/* ------------------------------------------------------------------------------- */

function largestRectangleArea(heights: number[]): number {
    const stack = [] as [number, number][];
    let result = 0;
    let heightStart = 0;
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        heightStart = i;
        while (stack.length && stack[stack.length - 1][0] > heights[i]) {
            const [height, index] = stack.pop() as [number, number];
            result = Math.max(result, height * (i - index));
            heightStart = index;
        }

        stack.push([heights[i], heightStart]);
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
- nice explanation from nhttps://leetcode.com/problems/largest-rectangle-in-histogram/submissions/
*/

/* ------------------------------------------------------------------------------- */

const heights = [2, 1, 5, 6, 2, 3, 1, 1];
// const heights = [2, 4];

console.log(largestRectangleArea(heights));
