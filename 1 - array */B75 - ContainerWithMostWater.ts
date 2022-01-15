/* Q: Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container. */

var maxArea = function (h: number[]): number {
    let lp = 0,
        rp = h.length - 1,
        // 當下水的最大容量
        water = 0
    // 指針從頭尾向中間聚集
    while (rp > lp) {
        // 動態調整水的最大容量。以較小值那邊邊為高，兩個指針的距離為寬。
        water = Math.max(water, (rp - lp) * Math.min(h[lp], h[rp]))
        // 移動較小那邊的指針
        if (h[rp] > h[lp]) {
            lp++
        } else {
            rp--
        }
    }

    return water
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

/**
 *
 * 左右指針指到的高度，是以小的那個為當下容器的高度。
 * 只移動較矮的那邊的指針，因為若移動高的那邊，會讓容量變小。
 *
 *  */
