/* You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 */

function maxArea(height: number[]): number {
    let left = 0,
        right = height.length - 1;
    let max = -Infinity;

    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));

        if (height[left] < height[right]) {
            left++;
        } else right--;
    }

    return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
/**
 * 左右指針是以值小的那個為當下容器的高度。
 * 只移動較矮的那邊的指針。因為若移動高的那邊，會讓容量變小。
 *  */

/**
 * T.C.: O(n)
 * S.C.: O(1)
 */
