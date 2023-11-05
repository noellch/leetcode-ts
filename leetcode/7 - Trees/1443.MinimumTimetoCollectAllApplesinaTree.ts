/* 
Given an undirected tree consisting of n vertices numbered from 0 to n-1, which has some apples in their vertices. You spend 1 second to walk over one edge of the tree. Return the minimum time in seconds you have to spend to collect all apples in the tree, starting at vertex 0 and coming back to this vertex.

The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi. Additionally, there is a boolean array hasApple, where hasApple[i] = true means that vertex i has an apple; otherwise, it does not have any apple.
*/

/* ------------------------------------------------------------------------------- */

function minTime(n: number, edges: number[][], hasApple: boolean[]): number {
    const adj: { [par: number]: number[] } = {};

    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }

    for (const [par, child] of edges) {
        adj[par].push(child);
        adj[child].push(par);
    }

    function dfs(current: number, par: number) {
        let time = 0;
        for (const child of adj[current]) {
            if (child === par) continue;

            let childTime = dfs(child, current);

            if (childTime > 0 || hasApple[child]) {
                time += 2 + childTime;
            }
        }

        return time;
    }

    return dfs(0, -1);
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

// const n = 7,
//     edges = [
//         [0, 1],
//         [0, 2],
//         [1, 4],
//         [1, 5],
//         [2, 3],
//         [2, 6],
//     ],
//     hasApple = [false, false, true, false, true, true, false];
const n = 7,
    edges = [
        [0, 1],
        [0, 2],
        [1, 4],
        [1, 5],
        [2, 3],
        [2, 6],
    ],
    hasApple = [false, false, true, false, false, true, false];
// const n = 7,
//     edges = [
//         [0, 1],
//         [0, 2],
//         [1, 4],
//         [1, 5],
//         [2, 3],
//         [2, 6],
//     ],
//     hasApple = [false, false, false, false, false, false, false];
console.log(minTime(n, edges, hasApple));
