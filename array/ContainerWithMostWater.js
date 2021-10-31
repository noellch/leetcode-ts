/* Q: Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container. */

//* original solution, better efficiency
var maxArea = function (h) {
    let lp = 0,
        rp = h.length - 1

    let currentHeight = 0
    let currentWidth = h.length - 1
    let water = currentHeight * currentWidth

    while (lp !== rp) {
        // 每次迴圈都找出當下的寬跟高。
        // 一樣若 lp 跟 rp 指向的那個值較小的為高，兩個指針的距離為寬。
        if (h[lp] >= h[rp]) {
            currentHeight = h[rp]
            currentWidth = rp - lp
            // 移動較小值那邊的指針
            rp--
        } else {
            currentHeight = h[lp]
            currentWidth = rp - lp
            // 移動較小值那邊的指針
            lp++
        }

        water = Math.max(water, currentHeight * currentWidth)
    }
    return water
}

//* better understand solution
var maxArea = function (h) {
    // 定義左右 pointer，個別指向陣列的頭跟尾。
    let lp = 0,
        rp = h.length - 1
    // 當下水的最大容量
    let water = 0

    // 指針從頭尾向中間聚集
    while (lp !== rp) {
        // 動態調整水的最大容量。以較小值那邊邊為高，兩個指針的距離為寬。
        water = Math.max(water, Math.min(h[lp], h[rp]) * (rp - lp))

        // 移動較小那邊的指針
        if (h[lp] >= h[rp]) {
            rp--
        } else {
            lp++
        }
    }
    return water
}

//* 關鍵點1：左右指針指到的高度，是以小的那個為當下容器的高度。
//* 關鍵點2：只移動較矮的那邊的指針，因為若移動高的那邊，會讓容量變小。

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// console.log(maxArea([4, 3, 2, 1, 4]))
// console.log(maxArea([1, 2, 1]))
// console.log(maxArea([1, 1]))
// console.log(maxArea([2, 1]))
// console.log(maxArea([0, 2]))
