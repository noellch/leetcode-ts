/* 
In this problem, a tree is an undirected graph that is connected and has no cycles.

You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.
*/

/* 
題目要求在一個無向圖中『找到並返回』一條冗餘的連接，使得刪除這條連接後，圖中不再有環。
使用到 Union-Find Algorithm 演算法。
*/

/* ------------------------------------------------------------------------------- */

function findRedundantConnection(edges: number[][]): number[] {
    const parent: number[] = [];
    const rank: number[] = [];

    for (let i = 0; i <= edges.length; i++) {
        parent[i] = i;
        rank[i] = 1;
    }

    function find(node: number) {
        // 若自己不是自己的根節點，就讓一路到根節點的路徑上的 node，包含自己，都等於根節點。
        // 這樣在 union 時就可以立刻知道兩個 node 是不是位於同一個集合（樹）中。
        if (node !== parent[node]) {
            parent[node] = find(parent[node]);
        }

        return parent[node];
    }

    function union(node1: number, node2: number) {
        const p1 = find(node1);
        const p2 = find(node2);

        // 根節點相同，也就 node1 跟 node2 之間的 edge 會是 造成封閉迴路的 redundant connection
        if (p1 === p2) return false;

        if (rank[p1] > rank[p2]) {
            parent[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parent[p1] = p2;
            rank[p2] += rank[p1];
        }

        return true;
    }

    for (const [node1, node2] of edges) {
        if (!union(node1, node2)) return [node1, node2];
    }

    return [];
}

/*
T.C.: O(N)
- 我們需要遍歷每條連接並將其加入到並查集（Union-Find）中。如果發現兩個節點已經處於同一集合中，那麼這條連接就是冗餘連接。
- 在最壞的情況下，我們需要遍歷所有的連接，因此總的時間複雜度是 O(N)，其中 N 是連接的總數。

S.C.: O(N)
- 在使用並查集時，我們需要使用額外的數據結構來儲存每個節點的父節點，以及一些額外的信息，如秩（rank）或大小（size）。
這些數據結構的大小與節點的數目成正比，因此額外的空間複雜度是 O(N)。
*/

/* ------------------------------------------------------------------------------- */

const edges = [
    [1, 2],
    [1, 3],
    [2, 3],
];
console.log(findRedundantConnection(edges));
