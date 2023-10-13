/* 
There is a rectangular brick wall in front of you with n rows of bricks. The ith row has some number of bricks each of the same height (i.e., one unit) but they can be of different widths. The total width of each row is the same.

Draw a vertical line from the top to the bottom and cross the least bricks. If your line goes through the edge of a brick, then the brick is not considered as crossed. You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks.

Given the 2D array wall that contains the information about the wall, return the minimum number of crossed bricks after drawing such a vertical line.
*/

/* ------------------------------------------------------------------------------- */

function leastBricks(wall: number[][]): number {
    const table: Map<number, number> = new Map([[0, 0]]);

    for (const r of wall) {
        let total = 0;
        for (let i = 0; i < r.length - 1; i++) {
            total += r[i];
            table.set(total, table.has(total) ? (table.get(total) as number) + 1 : 1);
        }
    }

    return wall.length - Math.max(...table.values());
}

/*
T.C.: O(N^2)
S.C.: O(the width of the row)
*/
/* ------------------------------------------------------------------------------- */

// const wall = [
//     [1, 2, 2, 1],
//     [3, 1, 2],
//     [1, 3, 2],
//     [2, 4],
//     [3, 1, 2],
//     [1, 3, 1, 1],
// ];
const wall = [[1], [1], [1]];

console.log(leastBricks(wall));
