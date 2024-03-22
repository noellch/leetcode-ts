/* 
https://leetcode.com/problems/trapping-rain-water/description/
*/

/* ------------------------------------------------------------------------------- */

// function trap(height: number[]): number {
//     const n = height.length;
//     const leftMax = Array(n).fill(0);
//     const rightMax = Array(n).fill(0);

//     leftMax[0] = height[0];
//     for (let i = 1; i < n; i++) {
//         leftMax[i] = Math.max(height[i], leftMax[i - 1]);
//     }

//     rightMax[n - 1] = height[n - 1];
//     for (let i = n - 2; i >= 0; i--) {
//         rightMax[i] = Math.max(height[i], rightMax[i + 1]);
//     }

//     let total = 0;
//     for (let i = 0; i < n; i++) {
//         const waterLevel = Math.min(leftMax[i], rightMax[i]);
//         if (waterLevel > height[i]) {
//             total += waterLevel - height[i];
//         }
//     }

//     return total;
// }

/* ------------------------------------------------------------------------------- */

function trap(height: number[]): number {
    let l = 0,
        r = height.length - 1;
    let leftMax = height[l],
        rightMax = height[r];
    let result = 0;

    while (l < r) {
        if (leftMax < rightMax) {
            l += 1;
            leftMax = Math.max(leftMax, height[l]);
            if (leftMax > height[l]) result += leftMax - height[l];
        } else {
            r -= 1;
            rightMax = Math.max(rightMax, height[r]);
            if (rightMax > height[r]) result += rightMax - height[r];
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
