/* 
https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description/
*/

/* ------------------------------------------------------------------------------- */
function minReorder(n: number, connections: number[][]): number {
    const graph = new Map<number, number[]>();
    let changed = 0;
    const visited = new Set<number>([0]);

    // 方便搜尋
    const conn = new Set();
    connections.forEach(([from, to]) => {
        conn.add(`${from}-${to}`);
    });

    // 建立 graph
    for (const [from, to] of connections) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        if (!graph.has(to)) {
            graph.set(to, []);
        }
        graph.get(from)?.push(to);
        graph.get(to)?.push(from);
    }

    function dfs(city: number) {
        for (const neighbor of graph.get(city) as number[]) {
            if (visited.has(neighbor)) {
                continue;
            }

            // 無法指定目標城市，所以需要改變方向
            if (!conn.has(`${neighbor}-${city}`)) {
                changed++;
            }
            visited.add(neighbor);
            dfs(neighbor);
        }
    }

    dfs(0);

    return changed;
}

/*
T.C.: O(N)
S.C.: O(N)
*/

/* ------------------------------------------------------------------------------- */

const n = 6,
    connections = [
        [0, 1],
        [1, 3],
        [2, 3],
        [4, 0],
        [4, 5],
    ];

console.log(minReorder(n, connections));
