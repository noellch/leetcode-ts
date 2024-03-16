/* 
https://leetcode.com/problems/brick-wall/description/
*/

/* ------------------------------------------------------------------------------- */

function leastBricks(wall: number[][]): number {
    // [0, 0] 是因為路徑不能從 wall 的最左邊往下
    const table: Map<number, number> = new Map([[0, 0]]);

    for (let row of wall) {
        let gaps = 0;
        // row.length - 1 是因為路徑不能從 wall 的最右邊往下
        for (let i = 0; i < row.length - 1; i++) {
            gaps += row[i];
            table.set(gaps, table.has(gaps) ? (table.get(gaps) as number) + 1 : 1);
        }
    }

    return wall.length - Math.max(...table.values());
}
// function leastBricks(wall: number[][]): number {
//     const table: Map<number, number> = new Map([[0, 0]]);

//     for (const r of wall) {
//         let total = 0;
//         for (let i = 0; i < r.length - 1; i++) {
//             total += r[i];
//             table.set(total, table.has(total) ? (table.get(total) as number) + 1 : 1);
//         }
//     }

//     return wall.length - Math.max(...table.values());
// }

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
