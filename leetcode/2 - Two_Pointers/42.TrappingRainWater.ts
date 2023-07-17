/* 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
*/

/* ------------------------------------------------------------------------------- */

function trap(height: number[]): number {
    let result = 0;
    let r = height.length - 1,
        l = 0;
    let lMax = height[l],
        rMax = height[r];

    while (l < r) {
        if (lMax < rMax) {
            l++;
            lMax = Math.max(lMax, height[l]);
            result += lMax - height[l];
        } else {
            r--;
            rMax = Math.max(rMax, height[r]);
            result += rMax - height[r];
        }
    }

    return result;
}

/*
T.C.: O(1)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// const height = [4,2,0,3,2,5]

console.log(trap(height));
