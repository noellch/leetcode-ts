/* 
You are given n rectangles represented by a 0-indexed 2D integer array rectangles, where rectangles[i] = [widthi, heighti] denotes the width and height of the ith rectangle.

Two rectangles i and j (i < j) are considered interchangeable if they have the same width-to-height ratio. More formally, two rectangles are interchangeable if widthi/heighti == widthj/heightj (using decimal division, not integer division).

Return the number of pairs of interchangeable rectangles in rectangles.
*/

/* ------------------------------------------------------------------------------- */

function interchangeableRectangles(rectangles: number[][]): number {
    const map: Map<number, number> = new Map();

    for (const [w, h] of rectangles) {
        const ratio = w / h;
        map.set(ratio, map.has(ratio) ? (map.get(ratio) as number) + 1 : 1);
    }

    let result = 0;
    for (const v of map.values()) {
        result += (v * (v - 1)) / 2;
        // C v 取 2，等於 v!/(2! * (v-2)!) = (v * (v-1))/2
    }

    return result;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const rectangles = [
    [4, 8],
    [3, 6],
    [10, 20],
    [15, 30],
];
// const rectangles = [
//     [4, 5],
//     [7, 8],
// ];

console.log(interchangeableRectangles(rectangles));
