/* 
https://leetcode.com/problems/largest-rectangle-in-histogram/
*/

/* ------------------------------------------------------------------------------- */

function largestRectangleArea(heights: number[]): number {
    const stack: [number, number][] = [];
    let result = 0;
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
        let stackIndex = i;

        while (stack.length > 0 && heights[i] < stack[stack.length - 1][0]) {
            const [height, pos] = stack.pop() as [number, number];
            result = Math.max(result, (i - pos) * height);
            stackIndex = pos;
        }

        stack.push([heights[i], stackIndex]);
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
- nice explanation from https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/1430546/monotonique-stack-solution-intuition-javascript/
*/

/* ------------------------------------------------------------------------------- */

const heights = [2, 1, 5, 6, 2, 3, 1, 1];
// const heights = [4, 3, 2, 1];
// const heights = [1, 2, 3, 4];
// const heights = [2, 4];

console.log(largestRectangleArea(heights));
