/* 
https://leetcode.com/problems/path-with-minimum-effort/description/
*/

/* ------------------------------------------------------------------------------- */
const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

// MinHeap + BFS
function minimumEffortPath(heights: number[][]): number {
    const heap = new MinPriorityQueue({
        compare: (a, b) => {
            return a[0] - b[0];
        },
    });
    heap.enqueue([0, 0, 0]);

    const visited = new Set<string>();
    while (!heap.isEmpty()) {
        const [diff, r, c] = heap.dequeue() as [number, number, number];

        if (visited.has(`${r}-${c}`)) continue;

        // 到了右下角最後一格，返回 diff
        if (`${r}-${c}` === `${heights.length - 1}-${heights[0].length - 1}`) return diff;

        visited.add(`${r}-${c}`);

        for (const [dr, dc] of dir) {
            const newR = r + dr,
                newC = c + dc;

            if (
                newR < 0 ||
                newC < 0 ||
                newR >= heights.length ||
                newC >= heights[0].length ||
                visited.has(`${newR}-${newC}`)
            )
                continue;

            const newDiff = Math.max(diff, Math.abs(heights[newR][newC] - heights[r][c]));
            heap.enqueue([newDiff, newR, newC]);
        }
    }
}

/*
T.C.: O()
S.C.: O()
*/

/* ------------------------------------------------------------------------------- */
const heights = [
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5],
];

console.log(minimumEffortPath(heights));
