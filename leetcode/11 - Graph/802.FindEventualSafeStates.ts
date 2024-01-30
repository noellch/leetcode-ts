/* 
https://leetcode.com/problems/find-eventual-safe-states/description/
*/

/* ------------------------------------------------------------------------------- */

function eventualSafeNodes(graph: number[][]): number[] {
    const len = graph.length;
    const map = new Map<number, boolean>([]);
    const safes: number[] = [];

    function dfs(i: number) {
        if (map.has(i)) return map.get(i);
        map.set(i, false);
        for (const n of graph[i]) {
            if (!dfs(n)) return false;
        }
        map.set(i, true);
        return true;
    }

    for (let i = 0; i < len; i++) {
        if (dfs(i)) safes.push(i);
    }

    return safes;
}

/* ------------------------------------------------------------------------------- */

// const graph = [[1, 2], [2, 3], [5], [0], [5], [], []];
const graph = [[], [0, 2, 3, 4], [3], [4], []];
console.log(eventualSafeNodes(graph));
