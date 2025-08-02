/* 
https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/description/
*/

/* ------------------------------------------------------------------------------- */

function interchangeableRectangles(rectangles: number[][]): number {
    let result = 0,
        table: Record<string, number> = {};

    for (const [w, h] of rectangles) {
        const radio = w / h;
        table[radio] = ++table[radio] || 1;
    }

    // C v 取 2，等於 v!/(2! * (v-2)!) = (v * (v-1))/2
    for (let v of Object.values(table)) {
        result += (v * (v - 1)) / 2;
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
